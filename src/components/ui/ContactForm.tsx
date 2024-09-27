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

/**
 * A reusable contact form component that handles user input, validation, and submission via EmailJS.
 *
 * @return {JSX.Element} The rendered contact form component
 */
const ContactForm = () => {
  // Initialize state for form fields
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string[]>>>({});
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // to track form submission status
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
      setIsOpen(false); // Close the modal

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

  // Toggle modal visibility
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button className="pb-3 font-bold" onClick={toggleModal}>Message Us</button>
      {isOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {errors.name && <span>{errors.name.join(", ")}</span>}
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {errors.email && <span>{errors.email.join(", ")}</span>}
            </label>
            <label>
              Subject:
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {errors.subject && <span>{errors.subject.join(", ")}</span>}
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {errors.message && <span>{errors.message.join(", ")}</span>}
            </label>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          <button onClick={toggleModal} disabled={isSubmitting}>Close</button>
          {successMessage && <p>{successMessage}</p>}
        </div>
      )}
    </>
  );
};

export default ContactForm;
