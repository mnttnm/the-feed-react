import React, { useContext } from "react";
import Post from "../components/Post";
import uuid from "uuid";
import styled from "styled-components";
import { PostContext } from "../context/PostContext";

function PostContainer({className}) {
  const { posts } = useContext(PostContext);
  return posts.length ? (
    <div className={className}>
      {
        posts[0].map(post => <Post newPost={post} key={uuid()}/>)
      }
    </div>
  ) : (
    <div className="empty">No posts to display</div>
  );
}

const StyledPostContainer = styled(PostContainer)`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-left: 18%;

  @media only screen and (max-width: 320px) {
    margin: auto;
  }
`;

export default StyledPostContainer;
