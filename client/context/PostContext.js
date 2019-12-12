import React, { createContext, useReducer, useEffect} from 'react';
import axios from 'axios';
import {postReducer, tagReducer} from '../reducers/PostReducer';

export const PostContext = createContext();

const SERVER_URL = 'http://localhost:4000/';

const PostContextProvider = (props) => {
  const [posts, dispatchPosts ] = useReducer(postReducer, []);
  const [filterTags, dispatchTags ] = useReducer(tagReducer, []);

  const getPosts = async () => {
    let posts = await axios.get(`${SERVER_URL}posts`);
    return posts.data;
  }

  const getTags = async () => {
    let filterTags = await axios.get(`${SERVER_URL}tags`);
    return filterTags.data;
  }

  useEffect(() => {
    getPosts().then((response) => {
      dispatchPosts({type:'ADD_POSTS', payload:response});
    })
    getTags().then((response) => {
      dispatchTags({type:'ADD_TAGS', payload:response});
    })
  }, [])

  return (
    <PostContext.Provider value={{ filterTags, posts, dispatchPosts, dispatchTags }}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;