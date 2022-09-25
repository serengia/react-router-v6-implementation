import React, { useEffect } from "react";
import { Link, useParams, Outlet } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

function QuoteDetail() {
  const {
    sendRequest,
    status,
    data: activeQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const { quoteId } = useParams();

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!activeQuote?.text) {
    return <p>No quote found with your query.</p>;
  }

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <h1>Single Quote Detail Page</h1>
      <HighlightedQuote quote={activeQuote} />
      <div className="centered">
        <Link to={`comments`} className="btn--flat">
          View Comments
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default QuoteDetail;
