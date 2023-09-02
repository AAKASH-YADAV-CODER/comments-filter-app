import React, { useState } from "react";
import CommentList from "./components/commentList";
import PostDetail from "./components/postDetails";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <div className="border border-x-neutral-950 rounded-lg bg-rose-50 p-4 m-4 flex overflow-hidden md:flex-row">
      <PostDetail onSelectPost={handleSelectPost} />
      <CommentList postId={selectedPostId} />
    </div>
  );
}

export default App;
