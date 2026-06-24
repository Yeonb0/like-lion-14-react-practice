import { useState } from "react";
import styled from "styled-components";
import GalleryView from "../views/GalleryView";

const Modes = [
  { key: "list", label: "리스트" },
  { key: "board", label: "보드" },
  { key: "gallery", label: "갤러리" },
  { key: "feed", label: "피드" },
];

export default function PostListContainer({ posts }) {
  const [viewMode, setViewMode] = useState("gallery");

  return (
    <Container>
      <Toolbar>
        <Title>블로그</Title>
        <ViewSelect
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
        >
          {Modes.map((mode) => (
            <option key={mode.key} value={mode.key}>
              {mode.label}
            </option>
          ))}
        </ViewSelect>
      </Toolbar>

      {viewMode === "gallery" && <GalleryView posts={posts} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const ViewSelect = styled.select`
  padding: 0.6rem 1rem;
  border: 1px solid var(--border-primary);
  border-radius: 0.8rem;
  background-color: var(--background-secondary);
  color: var(--text-primary);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
`;