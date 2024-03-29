import { Route, Routes } from "react-router-dom";
import "./App.css";
import FlightListingPage from "./Pages/FlightListingPage";
import PaymentPage from "./Pages/PaymentPage";
import SearchPage from "./Pages/SearchPage";
import ScrollToTheTop from "./Components/ScrollToTheTop";

function App() {
  return (
    <div className=" bg-bgWhite min-h-screen">
      <ScrollToTheTop />
      <div className="max-w-[400px] mx-auto py-7 px-4">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/flight-listing" element={<FlightListingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
