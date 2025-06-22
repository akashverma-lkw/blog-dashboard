const BlogCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow transition-colors duration-300">
      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
        {post.title}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 mt-2">
        {post.body}
      </p>

      <p className="text-sm text-blue-600 dark:text-blue-400 mt-3">
        Category: {post.category}
      </p>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        Author ID: {post.userId}
      </p>
    </div>
  );
};

export default BlogCard;
