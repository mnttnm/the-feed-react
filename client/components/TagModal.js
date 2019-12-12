import React, { useContext, useRef} from "react";
import { PostContext } from "../context/PostContext";
import uuid from 'uuid';
import styled from 'styled-components';

const TagCheckBox = props => {

  const onCheckBoxSelect = (event) => {
    console.log(event.target.checked);
  }

  return (
    <div className="tag-checkbox">
      <label>
        <input
          type="checkbox"
          className="tag-check"
          data-value={props.tag}
          onSelect={onCheckBoxSelect}
          onChange={onCheckBoxSelect}
        />
        <span>{props.tag.toUpperCase()}</span>
      </label>
    </div>
  );
};


const Modal = () => {
  const { filterTags } = useContext(PostContext);
  const tagsArray = filterTags.length ? filterTags[0][0].tags: [];
  let count = useRef(0);
  console.log('calling post:', count + 1);

  const onTagSelectionComplete = () => {
    console.log('Processing your selection!');
  }

  return (
    <div id="modal1" className="modal tags-selection-options">
      <h4>Tags</h4>

      <div className="modal-content">
        {tagsArray.length ? (
            tagsArray.map(tag => {
             return <TagCheckBox tag={tag.name} key={uuid()} />;
            })
        ) : (
          <div className="empty">No tags to display</div>
        )}
        <StyledApplyButton onClick={onTagSelectionComplete} className="modal-apply-button">
          Apply
        </StyledApplyButton>
      </div>

    </div>
  );
}

const StyledApplyButton = styled.button`
  padding: 7px;
  border:none;
  background-color: blue;
  color: aliceblue;
  font-size: 1em;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Roboto';
`;

export default Modal;

  // getTagsFromDB().then(
  //   tagArray => {
  //     for (let tagIndex = 0; tagIndex < tagArray.length; tagIndex++) {
  //       const element = tagArray[tagIndex];
  //       renderTag(element.data(), element.id, tagsModal);
  //     }
  //     //Apply button action
  //     applyTagFilterButton.addEventListener("click", evt => {
  //       resetChipTab();
  //       // `:checked` special selector for the checkboxes to see if it is checked
  //       selectedTags = document.querySelectorAll(".tag-check:checked");
  //       if (selectedTags.length > 0) {
  //         let selectedTagsValue = [];
  //         selectedTags.forEach(selectedTag => {
  //           let tagName = selectedTag.getAttribute("data-value");
  //           selectedTagsValue.push(tagName);
  //           createChipElement(tagName);
  //           currentSelectedTags.push(tagName);
  //         });
  //         resetUI();
  //         getPostsForFilteredTags(selectedTagsValue);
  //       } else {
  //         currentSelectedTags = [];
  //         getPostsForFilteredTags(currentSelectedTags);
  //       }
  //     });
  //   },
  //   err => {
  //     console.log("Couldn't fetch tags, error: ", err);
  //   }
  // );

  //     //reset button functionality
  //     let resetButton = document.querySelector(".reset-tag-filter");
  //     resetButton.addEventListener("click", evt => {
  //       resetChipTab();
  //       resetSelectedTagsUI();
  //       resetUI();
  //       renderPostsFromCache();
  //     });
  //   };

  //   function removeCheckMarkForTag(tag) {
  //     let selectedTags = document.querySelectorAll(".tag-check");
  //     if (selectedTags) {
  //       selectedTags.forEach(selectedTag => {
  //         if (selectedTag.getAttribute("data-value") === tag) {
  //           selectedTag.checked = false;
  //         }
  //       });
  //     }
  //   }


  //   function resetSelectedTagsUI() {
  //     let selectedTags = document.querySelectorAll(".tag-check");
  //     if (selectedTags) {
  //       selectedTags.forEach(selectedTag => {
  //         selectedTag.checked = false;
  //       });
  //     }
  //   }