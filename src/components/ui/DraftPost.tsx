import React from 'react';

const DraftPost = () => {
  return (
    <div className="lg:col-span-2 pb-16">
      <h1 className="font-bold text-2xl mx-4 py-4">Create a Blog Post</h1>

      <form className="mx-4 space-y-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter blog title"
            required
          />
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
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Write a brief description of the blog post"
            required
          ></textarea>
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
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Add tags separated by commas"
          />
        </div>

        {/* Body Field */}
        <div>
          <label htmlFor="body" className="block text-lg font-medium mb-2">
            Body
          </label>
          <textarea
            id="body"
            name="body"
            rows={16}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Write the blog content here"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#7F0201] text-white hover:bg-[#5e0101] transition rounded-3xl"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default DraftPost;
