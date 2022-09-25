import { Navigate, Routes, Route } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import PageNotFound from "./pages/PageNotFound";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Navigate to={"/quotes"} />} />

        <Route path={"/quotes"} element={<AllQuotes />} />

        <Route path={"/quotes/new"} element={<NewQuote />} />

        <Route path={"/quotes/:quoteId/*"} element={<QuoteDetail />}>
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
