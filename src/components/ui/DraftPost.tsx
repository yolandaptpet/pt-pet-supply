import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { z } from 'zod';

type DraftPostProps = {
  allTags: string[]; // Accept the list of all tags as props
};

// Define the Zod schema
const postSchema = z.object({
  title: z.string().max(40, 'Title must be 40 characters or less.'),
  description: z.string().max(140, 'Description must be 140 characters or less.'),
  body: z.string(),
  tags: z.array(z.string()),
  publishDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'), // Ensure the date is valid
});

const DraftPost: React.FC<DraftPostProps> = ({ allTags }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // For selected tags
  const [tagsInput, setTagsInput] = useState<string>(''); // For custom tag input field
  const [body, setBody] = useState<string>('');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});
  
  // Confirmation modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [confirmationText, setConfirmationText] = useState<string>('');

  const tagRegex = /^[a-zA-Z0-9]+$/; // Enforce only alphanumeric tags

  // Load saved values from localStorage when the component mounts
  useEffect(() => {
    const savedTitle = localStorage.getItem('draftTitle');
    const savedDescription = localStorage.getItem('draftDescription');
    const savedBody = localStorage.getItem('draftBody');
    const savedTags = localStorage.getItem('draftTags');

    if (savedTitle) setTitle(savedTitle);
    if (savedDescription) setDescription(savedDescription);
    if (savedBody) setBody(savedBody);
    if (savedTags) setSelectedTags(JSON.parse(savedTags));
  }, []);

  // Update localStorage whenever the user types in any field
  useEffect(() => {
    localStorage.setItem('draftTitle', title);
    localStorage.setItem('draftDescription', description);
    localStorage.setItem('draftBody', body);
    localStorage.setItem('draftTags', JSON.stringify(selectedTags));
  }, [title, description, body, selectedTags]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the confirmation modal
  };

  const confirmSubmit = async () => {
    if (confirmationText.toLowerCase() !== 'yes') {
      alert("Please type 'yes' to confirm.");
      return;
    }

    const validationResult = postSchema.safeParse({
      title,
      description,
      body,
      tags: selectedTags, // Pass selected tags to the schema
      publishDate: new Date().toISOString().split('T')[0], // Automatically set publishDate to today's date
    });

    if (!validationResult.success) {
      const formErrors = validationResult.error.formErrors.fieldErrors;
      setErrors({
        title: formErrors.title ? formErrors.title[0] : undefined,
        description: formErrors.description ? formErrors.description[0] : undefined,
      });
      setIsModalOpen(false); // Close the modal on error
      return;
    }

    try {
      const response = await fetch('/api/submit-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validationResult.data), // Send the entire validated data
      });

      const result = await response.json();
      if (!response.ok) {
        console.error('Failed to submit post:', result, 'Status:', response.status);
      } else {
        console.log('Post submitted successfully:', result);
        // Clear form fields after successful submission
        setTitle('');
        setDescription('');
        setBody('');
        setSelectedTags([]);
        setErrors({});
        localStorage.removeItem('draftTitle');
        localStorage.removeItem('draftDescription');
        localStorage.removeItem('draftBody');
        localStorage.removeItem('draftTags');
      }
    } catch (error) {
      console.error('An error occurred while submitting the post:', error);
    } finally {
      setIsModalOpen(false); // Close the modal after submission
      setConfirmationText(''); // Reset confirmation text
    }
  };

  const addCustomTag = () => {
    if (tagsInput.trim() && tagRegex.test(tagsInput) && !selectedTags.includes(tagsInput)) {
      setSelectedTags((prevTags) => [...prevTags, tagsInput.trim()]);
      setTagsInput(''); // Clear the input after adding
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="lg:col-span-2 pb-16 text-lg">
      <h1 className="font-bold text-2xl mx-4 py-4">Create a Blog Post</h1>

      <form className="mx-4 space-y-4" onSubmit={handleSubmit}>
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7F0201] focus:border-[#7F0201]"
            placeholder="Enter blog title. Maximum of 40 characters."
            maxLength={40}
            required
            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please enter a title.')}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block text-lg font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7F0201] focus:border-[#7F0201]"
            placeholder="Enter a brief description of the blog post. Maximum of 140 characters."
            maxLength={140}
            required
            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please enter a description.')}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Tags Field */}
        <div>
          <label htmlFor="tags" className="block text-lg font-medium mb-2">
            Select or Add Tags
          </label>
          <div className="flex flex-wrap gap-2 pb-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTags((prev) =>
                  prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
                )}
                className={`px-3 py-1 rounded-full ${
                  selectedTags.includes(tag) ? 'bg-[#7F0201] text-white' : 'bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-[50%] p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter a custom tag and click 'Add Tag'; Repeat as needed."
            />
            <button
              type="button"
              onClick={addCustomTag}
              className="px-4 py-2 bg-[#7F0201] text-white rounded-3xl"
            >
              Add Tag
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {selectedTags.map((tag) => (
              <div key={tag} className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-2 text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Body Field */}
        <div>
          <label htmlFor="body" className="block text-lg font-medium mb-2">
            Body
          </label>
          <ReactQuill
            value={body}
            onChange={setBody}
            className="w-full min-h-[100px] bg-white p-2 border border-gray-300 rounded-md my-editor-wrapper"
            placeholder="Write the blog content here"
            theme="snow"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#7F0201] text-white hover:bg-[#A52A2A] transition rounded-3xl"
          >
            Submit Post
          </button>
        </div>
      </form>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-lg font-semibold mb-4">Confirm Submission</h2>
            <p className="mb-4">Type "yes" to confirm submission of your post.</p>
            <input
              type="text"
              value={confirmationText}
              onChange={(e) => setConfirmationText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Type 'yes'"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={confirmSubmit}
                className="px-4 py-2 bg-[#7F0201] text-white rounded-3xl mr-2"
              >
                Confirm
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded-3xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DraftPost;