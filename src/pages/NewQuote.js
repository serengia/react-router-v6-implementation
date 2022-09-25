import React, { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useNavigate } from "react-router-dom";

function NewQuote() {
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(addQuote, false);
  const onAddHandler = (data) => {
    sendRequest(data);
  };

  useEffect(() => {
    if (status === "completed") {
      navigate("/", { replace: false });
    }
  }, [status, navigate]);

  return (
    <div>
      <QuoteForm isLoading={status === "pending"} onAddQuote={onAddHandler} />
    </div>
  );
}

export default NewQuote;
