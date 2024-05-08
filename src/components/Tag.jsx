import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, isTagSelected, clickable }) => {
  const tagBackgroundColor = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      onClick={() => (clickable ? selectTag(tagName) : undefined)}
      style={
        isTagSelected ? tagBackgroundColor[tagName] : tagBackgroundColor.default
      }
    >
      {tagName}
    </button>
  );
};

export default Tag;
