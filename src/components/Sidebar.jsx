import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/blogSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = ['All', 'Tech', 'Lifestyle', 'News'];

  return (
    <div className="bg-white dark:bg-gray-900 p-4 w-full md:w-64 shadow-md transition-colors duration-300">
      <h2 className="font-bold mb-4 text-gray-800 dark:text-gray-100">Filters</h2>
      <ul>
        {filters.map((filter) => (
          <li key={filter} className="mb-2">
            <button
              onClick={() => dispatch(setFilter(filter))}
              className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
