import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/blogSlice';

const AddPostModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('Tech');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title || !body) return alert('All fields are required!');
    const newPost = {
      id: Date.now(),
      title,
      body,
      userId: 999, // Dummy author ID
      category,
    };
    dispatch(addPost(newPost));
    onClose();
    setTitle('');
    setBody('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
          Add New Post
        </h2>

        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-full p-2 mb-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Body"
          rows={3}
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-full p-2 mb-2 rounded resize-none"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <select
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-full p-2 mb-4 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Tech</option>
          <option>Lifestyle</option>
          <option>News</option>
        </select>

        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-600 font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPostModal;
