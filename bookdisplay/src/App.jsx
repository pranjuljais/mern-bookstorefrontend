import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Books from "./routes/Books";
import Singlebook from "./routes/Singlebook";
import Createbook from "./routes/Createbook";
import Editbook from "./routes/Editbook";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:slug" element={<Singlebook />} />
          <Route path="/createbook" element={<Createbook />} />
          <Route path="/editbook/:slug" element={<Editbook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
