import "./Styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import Detail from "./Pages/Detail";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
