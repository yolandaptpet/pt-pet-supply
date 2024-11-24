import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { z } from "zod";
import emailjs from "emailjs-com";

// Define schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

// Define the form data structure
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string[]>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // to track form submission status
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // UseEffect to load initial data from localStorage and sync changes
  useEffect(() => {
    const loadFormDataFromLocalStorage = () => {
      setFormData({
        name: localStorage.getItem("contactName") || "",
        email: localStorage.getItem("contactEmail") || "",
        subject: localStorage.getItem("contactSubject") || "",
        message: localStorage.getItem("contactMessage") || "",
      });
    };

    // Load the form data on initial mount
    loadFormDataFromLocalStorage();

    // Set up a listener for changes to localStorage (from other tabs)
    const handleStorageChange = () => {
      loadFormDataFromLocalStorage();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    localStorage.setItem(`contact${name.charAt(0).toUpperCase() + name.slice(1)}`, value);
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate form
      contactSchema.parse(formData);

      // EmailJS integration
      setIsSubmitting(true);
      setSuccessMessage(null);
      
      // Replace with your EmailJS service, template, and user IDs
      const serviceID = "your_service_id";
      const templateID = "your_template_id";
      const userID = "your_user_id";

      const emailData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Sending form data through EmailJS
      await emailjs.send(serviceID, templateID, emailData, userID);
      
      // Clear the localStorage after form submission
      localStorage.clear();

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
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
    <>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full max-w-lg px-4"
        >
          <label className="block font-bold">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-2/3 p-1 border rounded text-center"
          />
          {errors.name && <span className="text-red-500">{errors.name.join(", ")}</span>}
  
          <label className="block font-bold pt-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-2/3 p-1 border rounded text-center"
          />
          {errors.email && <span className="text-red-500">{errors.email.join(", ")}</span>}
  
          <label className="block font-bold pt-2">Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-2/3 p-1 border rounded text-center"
          />
          {errors.subject && <span className="text-red-500">{errors.subject.join(", ")}</span>}
  
          <label className="block font-bold pt-4">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-4/5 p-2 border rounded min-h-[20vh]"
          />
          {errors.message && <span className="text-red-500">{errors.message.join(", ")}</span>}
  
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#7F0201] hover:bg-[#A52A2A] text-white font-bold text-xl w-40 mt-8 mb-4 py-2 px-2 rounded-xl"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      </div>
    </>
  );  
};

export default ContactForm;
