import React from "react"
import { Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/book/Books";
import About from "./components/About";
import BookDetail from "./components/book/BookDetails";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
