import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Register User
export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    return await apiClient.post("/register", {
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password,
    });
  } catch (error) {
    throw error; // Propagate error to the component
  }
};

// Login User
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("/login", {
      email: email.toLowerCase(),
      password,
    });

    const { token } = response.data;

    if (token) {
      localStorage.setItem("token", token);
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return response.data;
  } catch (error) {
    throw error; // Propagate error to the component
  }
};

// Google Login — no try/catch since it redirects, but no issue here.
export const googleLogin = async () => {
  window.location.href = `${API_BASE_URL}/auth/login`;
};

// Fetch Recent Searches
export const fetchRecentSearches = async () => {
  try {
    return await apiClient.get("/recent_searches");
  } catch (error) {
    throw error;
  }
};

// Save Recent Search
export const saveSearch = async (query: string) => {
  try {
    return await apiClient.post("/recent_searches", {
      query: query.toLowerCase(),
    });
  } catch (error) {
    throw error;
  }
};

// Delete Recent Search
export const deleteSearch = async (searchId: number) => {
  try {
    return await apiClient.delete(`/delete_search/${searchId}`);
  } catch (error) {
    throw error;
  }
};

// Search Media
export const mediaSearch = async (param: any) => {
  try {
    return await apiClient.get(
      `/search_images?q=${param.query}&page=${param.page}`
    );
  } catch (error) {
    throw error;
  }
};

export const mediaDetail = async (param: any) => {
  try {
    return await apiClient.get(`/image_detail/${param}`);
  } catch (error) {
    throw error;
  }
};
