import React, { useState, useEffect } from "react";
import { fetchCommentdata } from "../api";
const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments associated with the selected postId
    fetchCommentdata()
      .then((data) => {
        setComments(
          data.filter((comment) => comment.postId === parseInt(postId))
        );
      })
      .catch((error) => console.error("Error fetching comments:", error));
  }, [postId]);

  return (
    <div className="w-full md:w-1/2 h-full p-4">
      <h2 className="text-4xl font-bold mb-4 text-center">Comments</h2>
      <div className="h-full md:max-h-96 overflow-y-auto">
        <ul className="text-gray-600 list-decimal ml-5">
          {comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CommentList;
