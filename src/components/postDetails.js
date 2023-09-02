import React, { useState, useEffect } from "react";
import { fetchComments } from "../api";
const PostDetail = ({ onSelectPost }) => {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [postIdFilter, setPostIdFilter] = useState("");

  useEffect(() => {
    fetchComments()
      .then((data) => {
        setComments(data);
        setFilteredComments(data);
      })
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  const handleFilterChange = (e) => {
    const postId = e.target.value;
    setPostIdFilter(postId);
    if (postId === "") {
      setFilteredComments(comments);
    } else {
      setFilteredComments(
        comments.filter((comment) => comment.postId === parseInt(postId))
      );
    }
  };

  return (
    <div className="w-full md:w-1/2 p-4 border-r border-gray-400 h-full">
      <h2 className="text-4xl font-bold mb-4 text-center">Posts</h2>
      <label htmlFor="postId" className="text-lg text-blue-600 font-semibold">
        Filter by postId :){" "}
      </label>
      <input
        type="text"
        id="postId"
        value={postIdFilter}
        onChange={handleFilterChange}
        placeholder="Enter Post Number between 1 to 100"
        className="border rounded-lg px-4 py-2 w-full
          focus:outline-none focus:ring-4 focus:ring-blue-500
          placeholder-gray-400 hover:border-gray-500 shadow-xl"
      />
      <div className="h-1/2 md: overflow-y-auto">
        <ul className="text-gray-600 mt-7 list-disc ml-5">
          {filteredComments.map((comment) => (
            <li key={comment.id} onClick={() => onSelectPost(comment.postId)}>
              {comment.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostDetail;
