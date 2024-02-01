import { Route, Routes } from "react-router-dom";
import "./App.css";
import FlightListingPage from "./Pages/FlightListingPage";
import PaymentPage from "./Pages/PaymentPage";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <div className=" bg-bgWhite min-h-screen">
      <div className="w-[85%] mx-auto py-7">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/flight" element={<FlightListingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
