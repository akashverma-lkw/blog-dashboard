import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BlogList from './components/BlogList';
import AddPostModal from './components/AddPostModal';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './redux/blogSlice';

export default function App() {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Sidebar (filters) */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1">
        <Header onAddClick={() => setModalOpen(true)} />
        <BlogList />
      </div>

      {/* Modal to add a new post */}
      <AddPostModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
