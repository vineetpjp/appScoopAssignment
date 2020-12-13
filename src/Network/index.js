import axios from "axios";

const Data = async () => {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a"
  );

  return response.data;
};

export default Data;
