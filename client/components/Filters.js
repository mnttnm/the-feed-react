import React, {useContext} from "react";
import { PostContext } from "../context/PostContext";

const Input = ({ id, label, children }) => (
  <div className="input-container">
    <label htmlFor={id} className="label">
      {label}
    </label>
    {children}
  </div>
);

const Filter = () => {
    const { filterTags } = useContext(PostContext);
    const tagsArray = filterTags.length ? filterTags[0][0].tags: [];
    return (
    <section aria-labelledby="filter" className="filter-wrapper">
      <h3 id="filter">
        Filters
        {/* <span id="postCount">{100} Resources</span> */}
      </h3>
      <div className="inputs" aria-expanded={true}>
        <Input id="category" label="Filter by Category" key="category">
          <select name="category" className="selctor" id="category-selctor">
            <option value="youtube">Youtube</option>
            <option value="blog-post">Blog-Post</option>
            <option value="tweet">Tweet</option>
          </select>
        </Input>
      </div>
      <div className="inputs" aria-expanded={true}>
        <Input id="tags" label="Filter by Tags" key="tags">
          <select name="tags" className="selctor" id="tags-selctor">
            {
              tagsArray.map((tag,i) => <option key={i} value={tag.name}>{tag.name}</option>)
            }
          </select>
        </Input>
      </div>
      {/* <button onClick={onModalClick} id="modalController" data-target="modal1" className="modal-trigger">Filter By Tags</button> */}
    </section>
  );
};

export default Filter;
