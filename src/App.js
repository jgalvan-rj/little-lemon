import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Home, Booking } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reservations" element={<Booking />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
