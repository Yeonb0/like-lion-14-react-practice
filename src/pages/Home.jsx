import { useEffect, useState } from "react";
import styled from "styled-components";
import PostListContainer from "../common/PostListContainer";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/articles`);
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data = await response.json();
        const normalized = data.data.map((item) => ({
          id: item.id,
          title: item.title,
          content: item.content,
          writer: item.author,
          date: item.createdAt,
          likes: item.totalLikes ?? item.totalLike ?? 0,
          comments: item.totalComments ?? 0,
        }));
        setPosts(normalized.reverse());
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <Main>
      <PostListContainer posts={posts} />
    </Main>
  );
};

export default Home;

const Main = styled.main`
  max-width: 96rem;
  margin: 0 auto;
  padding: 2rem 2.4rem;
`;