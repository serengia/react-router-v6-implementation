import { useRef, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const commentValue = commentTextRef?.current?.value;

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddingComment, quoteId } = props;

  const submitFormHandler = (event) => {
    event.preventDefault();

    sendRequest({ commentData: { text: commentValue }, quoteId: quoteId });
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddingComment();
    }
  }, [status, error, onAddingComment]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
