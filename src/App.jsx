import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FormConverter from "./Components/Form/FormConverter";
import FormStake from "./Components/Form/FormStake";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route path="converter" element={<FormConverter />} />
            <Route path="stake" element={<FormStake />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
