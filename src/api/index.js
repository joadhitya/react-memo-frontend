import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req, res) => {
  if (localStorage.getItem("profile")) {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const token = profile.token;
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

const AUTH  = axios.create({ baseURL: "http://localhost:5000" });
// POST
export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`posts/${id}`);
export const likePost = (id) => API.patch(`posts/${id}/likePost`);

// USER
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
