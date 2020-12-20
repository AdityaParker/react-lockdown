import React from "react";

const Book = (props) => {
  const clickHandler = (author) => alert(author);
  const { title, image, author, number } = props;
  const name = "created by Aditya Gautam";
  return (
    <article className="book">
      <img src={image} alt="" />
      <p>Item number :{number}</p>
      <p
        onMouseOver={(e) => {
          console.log(e);
          console.log(e.target);
        }}
      >
        {title}
      </p>
      <p>{author}</p>
      <b>{name}</b>
      <button type="button" onClick={() => clickHandler(author)}>
        Reference guide
      </button>
    </article>
  );
};

export default Book;
