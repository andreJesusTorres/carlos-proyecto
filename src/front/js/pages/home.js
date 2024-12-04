import React, { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <div>
        <h1>Welcome to the Blog</h1>
        <p>This is the Home page.</p>
      </div>
      <h1>Publicaciones</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
