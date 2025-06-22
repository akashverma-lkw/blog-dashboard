import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('blogs/fetchPosts', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20');
  return res.data;
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    posts: [],
    filteredPosts: [],
    status: 'idle',
    filter: 'All',
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
      state.filteredPosts.unshift(action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      if (action.payload === 'All') {
        state.filteredPosts = state.posts;
      } else {
        state.filteredPosts = state.posts.filter(
          (post) => post.category === action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // Simulate categories
        const categories = ['Tech', 'Lifestyle', 'News'];
        const enriched = action.payload.map((post) => ({
          ...post,
          category: categories[Math.floor(Math.random() * categories.length)],
        }));
        state.posts = enriched;
        state.filteredPosts = enriched;
        state.status = 'succeeded';
      });
  },
});

export const { addPost, setFilter } = blogSlice.actions;
export default blogSlice.reducer;
