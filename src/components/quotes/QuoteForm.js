import { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const navigate = useNavigate();

  const [formIsTouched, setFormIsTouched] = useState();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });

    // Navigate after successful submission
    navigate("/quotes");
  }

  const formFocusedHandler = () => {
    setFormIsTouched(true);
  };

  const onClickHandler = () => {
    setFormIsTouched(false);
  };

  return (
    <Fragment>
      {/* {formIsTouched && (
        <Prompt
          when={formIsTouched}
          message={(locationObj) =>
            `Are you sure you want to leave. All your unsaved changes will be lost. ${JSON.stringify(
              locationObj
            )}`
          }
        />
      )} */}
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={onClickHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
