import React from "react";
import styled from "styled-components";
import uuid from "uuid";

function handleTagSelection(tag) {
  console.log("Selected tag: ", tag);
}

function PostComponent(props) {
  const { title, description, postedOn, url, tags } = props.newPost;
  return (
    <div className={props.className}>
      <PostTitle>
        <a className="post-url post-title" href={url} target="blank">
          {title.toUpperCase()}
        </a>
      </PostTitle>
      <div className="post-publish">{postedOn}</div>
      <p className="post-description">{description}</p>
      <div className="post-footer">
        <div className="post-tags">
          {tags.map(tag => (
            <Tag
              onClick={() => handleTagSelection(tag)}
              as="a"
              href="#"
              key={uuid()}
            >
              {`#${tag}`}
            </Tag>
          ))}
        </div>
        <div className="post-stats">
          <div className="rating">
            <i className="fa fa-star rating-icon"></i>
            <div id="rating-value">9</div>
          </div>
          <div className="separater">|</div>
          <div className="views">
            <span id="views-value">100</span>{" "}
            <span id="views-label"> views</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const PostTitle = styled.h3`
  > a {
    text-decoration: none;
    color: #b5905e;
    font-family: "Roboto-Medium";
  }
`;

const Tag = styled.button`
  color: white;
  font-size: 1em;
  margin-left: 0.2em;
  padding: 0.2em 1em;
  background-color: #564e3d;
  border-radius: 3px;
  text-decoration: none;
`;

const Post = styled(PostComponent)`
  background-color: #dbe0d3;
  color: #564e3d;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
`;

export default Post;
