import { useSelector } from 'react-redux';
import BlogCard from './BlogCard';

const BlogList = () => {
  const { filteredPosts, status } = useSelector((state) => state.blogs);

  // Loading State
  if (status === 'loading') {
    return (
      <div className="p-4 text-center text-gray-700 dark:text-gray-300 text-lg">
        Loading...
      </div>
    );
  }

  // Empty State
  if (filteredPosts.length === 0) {
    return (
      <div className="p-4 text-center text-gray-700 dark:text-gray-300 text-md">
        No blog posts available in this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {filteredPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
