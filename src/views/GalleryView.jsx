import styled from "styled-components";
import { formatKoreanDate } from "../utils/DateFormat";
import { IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";
import Img001 from "../assets/001.svg";
import Img002 from "../assets/002.svg";
import Img003 from "../assets/003.svg";

const Thumbnails = [Img001, Img002, Img003];

function GalleryCard({ post }) {
  const Thumbnail = Thumbnails[(post.id - 1) % 3] || Img001;

  return (
    <CardWrapper>
      <ThumbnailImg src={Thumbnail} alt={post.title} />
      <CardBody>
        <CardTitle>{post.title}</CardTitle>
        <Excerpt>{post.content}</Excerpt>
        <div className="info">
          <span>{post.writer}</span>
          <span>·</span>
          <span>{formatKoreanDate(post.date)}</span>
        </div>
        <div className="info">
          <IoHeartOutline size={16} color="var(--icon-tertiary)" />
          <span>{post.likes}</span>
          <span>·</span>
          <IoChatbubbleOutline size={16} color="var(--icon-tertiary)" />
          <span>{post.comments}</span>
        </div>
      </CardBody>
    </CardWrapper>
  );
}

export default function GalleryView({ posts }) {
  return (
    <Grid>
      {posts.map((post) => (
        <GalleryCard key={post.id} post={post} />
      ))}
    </Grid>
  );
}

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  list-style: none;
  padding: 0;
`;

const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.8rem;
  border: 1px solid var(--border-primary);
  border-radius: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--background-secondary);
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--text-tertiary);
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 138.5%;
    letter-spacing: 0.0252rem;
  }
`;

const ThumbnailImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 0.8rem;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding-inline: 0.4rem;
`;

const CardTitle = styled.div`
  overflow: hidden;
  color: var(--text-primary);
  text-overflow: ellipsis;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.0091rem;
`;

const Excerpt = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--text-secondary);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 150%;
`;