import { z } from "zod";
import nodemailer from "nodemailer";
import { writeFile } from "fs/promises";
import path from "path";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  images: z.array(z.string()).optional(), // Base64 encoded images
});

const transporter = nodemailer.createTransport({
  host: import.meta.env.SMTP_HOST,
  port: Number(import.meta.env.SMTP_PORT),
  secure: false,
});

export const POST = async ({ request }: { request: Request }) => {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Save images if provided
    if (data.images && data.images.length > 0) {
      const imageDir = path.join(process.cwd(), "uploaded-images");
      await Promise.all(
        data.images.map((base64Image, index) => {
          const matches = base64Image.match(/^data:image\/(\w+);base64,(.+)$/);
          if (!matches) throw new Error("Invalid image format");

          const [, fileType, base64Data] = matches;
          const buffer = Buffer.from(base64Data, "base64");
          const filePath = path.join(imageDir, `image-${Date.now()}-${index}.${fileType}`);
          return writeFile(filePath, buffer);
        })
      );
    }

    const emailOptions = {
      from: `contactform@ptpet.net`,
      to: "yolanda@ptpet.net",
      subject: `New Contact Form Submission from ${data.name} - ${data.email}: ${data.subject}`,
      text: data.message,
      html: `<p>${data.message}</p>`, // Optionally send HTML content
    };

    await transporter.sendMail(emailOptions);

    return new Response(
      JSON.stringify({ message: "Your message has been sent successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    const message =
      err instanceof z.ZodError
        ? "Invalid input: " + err.errors.map((e) => e.message).join(", ")
        : "An error occurred while sending your message. Please try again.";

    return new Response(JSON.stringify({ error: message }), { status: 400 });
  }
};