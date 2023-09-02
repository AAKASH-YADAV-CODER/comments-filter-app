import axios from "axios";

export const fetchComments = async () => {
  try {
    // Fetch comments for the first 100 posts
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    // Organize comments by post So the similar postId comments not re-render
    const commentsByPost = {};
    response.data.forEach((comment) => {
      const postId = comment.postId;
      if (!commentsByPost[postId]) {
        commentsByPost[postId] = comment;
      }
    });

    // Convert comments object to an array of first comments
    const firstComments = Object.values(commentsByPost);

    return firstComments;
  } catch (error) {
    throw error;
  }
};

export const fetchCommentdata = async () => {
  try {
    //Fetching all Data from given url
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
