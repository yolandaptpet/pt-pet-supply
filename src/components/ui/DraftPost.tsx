import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { z } from 'zod';

// Define the Zod schema
const postSchema = z.object({
  title: z.string().max(42, 'Title must be 42 characters or less.'),
  description: z.string().max(140, 'Description must be 140 characters or less.'),
  tags: z.string().optional(), // No max length defined for tags
  body: z.string().optional() // No max length defined for body
});

const DraftPost: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  // Load saved values from localStorage when the component mounts
  useEffect(() => {
    const savedTitle = localStorage.getItem('draftTitle');
    const savedDescription = localStorage.getItem('draftDescription');
    const savedTags = localStorage.getItem('draftTags');
    const savedBody = localStorage.getItem('draftBody');

    if (savedTitle) setTitle(savedTitle);
    if (savedDescription) setDescription(savedDescription);
    if (savedTags) setTags(savedTags);
    if (savedBody) setBody(savedBody);
  }, []);

  // Update localStorage whenever the user types in any field
  useEffect(() => {
    localStorage.setItem('draftTitle', title);
    localStorage.setItem('draftDescription', description);
    localStorage.setItem('draftTags', tags);
    localStorage.setItem('draftBody', body);
  }, [title, description, tags, body]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the input against the schema
    const validationResult = postSchema.safeParse({
      title,
      description,
      tags,
      body,
    });

    if (!validationResult.success) {
      const formErrors = validationResult.error.formErrors.fieldErrors;
      setErrors({
        title: formErrors.title ? formErrors.title[0] : undefined,
        description: formErrors.description ? formErrors.description[0] : undefined,
      });
      return;
    }

    // Handle form submission logic here (e.g., save to database)

    // Clear localStorage after submission
    localStorage.removeItem('draftTitle');
    localStorage.removeItem('draftDescription');
    localStorage.removeItem('draftTags');
    localStorage.removeItem('draftBody');

    // Optionally, reset state if needed
    setTitle('');
    setDescription('');
    setTags('');
    setBody('');
    setErrors({}); // Clear errors on successful submission
  };

  // Check if character limits have been reached
  const isTitleMaxedOut = title.length >= 42;
  const isDescriptionMaxedOut = description.length >= 140;

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
            onChange={(e) => {
              const newValue = e.target.value;
              // Allow update if the new value is within the max length
              if (newValue.length <= 42) setTitle(newValue);
            }}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter blog title. Maximum of 42 characters."
            required
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          {isTitleMaxedOut && <p className="text-red-500 text-sm">Title limit reached.</p>}
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
            onChange={(e) => {
              const newValue = e.target.value;
              // Allow update if the new value is within the max length
              if (newValue.length <= 140) setDescription(newValue);
            }}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter a brief description of the blog post. Maximum of 140 characters."
            required
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          {isDescriptionMaxedOut && <p className="text-red-500 text-sm">Description limit reached.</p>}
        </div>

        {/* Tags Field */}
        <div>
          <label htmlFor="tags" className="block text-lg font-medium mb-2">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Add tags separated by commas"
          />
        </div>

        {/* Body Field (QuillJS Editor) */}
        <div>
          <label htmlFor="body" className="block text-lg font-medium mb-2">
            Body
          </label>
          <ReactQuill
            value={body}
            onChange={setBody}
            className="w-full bg-white p-2 border border-gray-300 rounded-md my-editor-wrapper"
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
    </div>
  );
};

export default DraftPost;
