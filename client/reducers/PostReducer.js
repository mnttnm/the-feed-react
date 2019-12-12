import uuid from 'uuid/v4';

export const initPosts = ({initialState}) => {
  return {posts: initialState};
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state];
    case 'REMOVE_POST':
      return state.filter(post => post.id !== action.id);
    case 'ADD_POSTS':
      return [...state, action.payload];
    default:
      return state;
  }
}

export const initTags = ({initialState}) => {
  return {tags: initialState};
};

export const tagReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TAGS':
      return [...state, action.payload];
    default:
      return state;
  }
}