import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { z } from "zod";
import emailjs from "emailjs-com";
import imageCompression from "browser-image-compression";
import { FaUpload, FaImage, FaTimes, FaQuestionCircle } from "react-icons/fa";

// Define schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * A contact form component that allows users to send messages.
 * The form includes input fields for name, email, subject, and message, as well as
 * an optional file upload feature for attaching images. The form is validated
 * using zod and will display error messages if the input is invalid. The form
 * also displays a success message after submission.
 */
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string[]>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages((prevImages) => [...prevImages, ...files]); // Append new files to the state
  };

  const handleImageDelete = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index)); // Remove image by index
  };

  const compressImages = async (files: File[]) => {
    const options = { maxSizeMB: 3, maxWidthOrHeight: 800 };
    const compressedImages = await Promise.all(
      files.map((file) => imageCompression(file, options))
    );
    const base64Images = await Promise.all(
      compressedImages.map((file) =>
        new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        })
      )
    );
    return base64Images;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);

      setIsSubmitting(true);
      setSuccessMessage(null);

      const base64Images = await compressImages(images);

      const emailData = {
        ...formData,
        images: base64Images, // Include images as base64 strings
      };

      const serviceID = "your_service_id";
      const templateID = "your_template_id";
      const userID = "your_user_id";

      await emailjs.send(serviceID, templateID, emailData, userID);

      setFormData({ name: "", email: "", subject: "", message: "" });
      setImages([]);
      setErrors({});
      setSuccessMessage("Your message has been sent successfully!");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors(err.flatten().fieldErrors);
      } else {
        setSuccessMessage("An error occurred while sending your message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-lg px-4"
      >
        <label className="block font-bold text-[#452B1F]">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-4/5 md:w-2/3 p-1 border rounded text-center text-[#452B1F]"
        />
        {errors.name && <span className="text-red-500 animate-slide-in">{errors.name.join(", ")}</span>}

        <label className="block font-bold pt-2 text-[#452B1F]">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-4/5 md:w-2/3 p-1 border rounded text-center text-[#452B1F]"
        />
        {errors.email && <span className="text-red-500 animate-slide-in">{errors.email.join(", ")}</span>}

        <label className="block font-bold pt-2 text-[#452B1F]">Subject:</label>
        <input
          type="text"
          name="subject"
          placeholder="Enter a subject..."
          value={formData.subject}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-4/5 md:w-2/3 p-1 border rounded text-center text-[#452B1F]"
        />
        {errors.subject && <span className="text-red-500 animate-slide-in">{errors.subject.join(", ")}</span>}

        <label className="block font-bold pt-4 text-[#452B1F]">Message:</label>
        <textarea
          name="message"
          placeholder="Enter your message..."
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full md:w-4/5 py-2 px-6 border rounded min-h-[15vh] text-[#452B1F]"
        />
        {errors.message && <span className="text-red-500 animate-slide-in">{errors.message.join(", ")}</span>}

        <div className="flex items-center">
          <label className="block font-bold pt-4 text-[#452B1F]">Attach Images:</label>

          {/* Question Mark Icon */}
          <div
            className="relative ml-1 mt-3 flex items-center"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
          >
            <FaQuestionCircle
              size={20}
              className="text-gray-600 cursor-pointer hover:text-gray-800"
            />
            {showTooltip && (
              <p className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black text-white text-sm rounded p-2 shadow-lg">
                Attaching images is optional, but can help assist us with addressing your pet's needs!
                <br />
                <br />
                Maximum of 5 images.
              </p>
            )}
          </div>
        </div>
        
        <div className="w-4/5 mx-auto flex flex-col items-center">
          <input
            id="file-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            disabled={isSubmitting}
            className="hidden"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex items-center gap-2 bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold py-1 px-3 rounded-xl"
          >
            <FaUpload size={12} />
            <span>Upload Files</span>
          </label>

        </div>

        <div className="flex flex-wrap gap-2 mt-1 mb-4">
          {images.map((_, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center w-12 h-12 border rounded bg-gray-100"
            >
              <FaImage size={30} className="text-gray-400" />
              <FaTimes
                onClick={() => handleImageDelete(index)}
                className="absolute top-0 right-0 text-red-500 cursor-pointer"
                size={20}
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold text-xl w-48 my-2 py-2.5 px-2 rounded-xl"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
    </div>
  );
};

export default ContactForm;