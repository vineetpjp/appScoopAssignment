import axios from "axios";

const fetchBooks = async () => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchBooks };
