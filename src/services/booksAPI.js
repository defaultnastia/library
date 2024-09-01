import axios from "axios";

const booksAPIInstance = axios.create({
  baseURL: "https://library-be-production-be58.up.railway.app/api/books",
});

export const getAllBooks = async () => {
  const result = await booksAPIInstance.get("");
  return result.data.reverse();
};

export const addBook = async (data) => {
  const result = await booksAPIInstance.post("", data);
  return result.data;
};

export const updateBook = async (isbn, data) => {
  const result = await booksAPIInstance.put(`/${isbn}`, data);
  return result.data;
};

export const deleteBook = async (isbn) => {
  const result = await booksAPIInstance.delete(`/${isbn}`);
  return result.data;
};

export const searchBooks = async (query) => {
  const result = await booksAPIInstance.get("/search", {
    params: {
      query,
    },
  });
  return result.data;
};

export const markAsBorrowed = async (isbn, isBorrowed) => {
  const result = await booksAPIInstance.patch(`/${isbn}/borrow`, {
    isBorrowed,
  });
  return result.data;
};
