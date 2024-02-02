import { useState } from "react";

import Airports from "../Assets/data/airports.json";
import BottomSheet from "./FlightBottomSheet";

const FlightSelectionHandler = ({ flightType, flightId, setFlightId }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setShowModal(true);
        }}
        className="flex items-center gap-2.5 rounded-[5px] py-4 px-3 bg-white h-[50px] active:bg-grayedOut md:hover:bg-grayedOut transition-all duration-300 cursor-pointer group fill-[#D3D3D3] md:hover:fill-white active:fill-white md:hover:text-white shadow-custom">
        <div className="flex items-center gap-2.5 ">
          {flightType === "From" && (
            <svg
              width="15"
              height="13"
              viewBox="0 0 13 11"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4943 9.56865H0.869279C0.525529 9.56865 0.244279 9.8499 0.244279 10.1937C0.244279 10.5374 0.525529 10.8187 0.869279 10.8187H11.4943C11.838 10.8187 12.1193 10.5374 12.1193 10.1937C12.1193 9.8499 11.838 9.56865 11.4943 9.56865ZM12.4755 3.71865C12.338 3.21865 11.8255 2.9249 11.3255 3.05615L8.00678 3.94365L3.96928 0.181154C3.80053 0.0186537 3.55678 -0.0375963 3.33178 0.0249037C2.90678 0.143654 2.70678 0.631154 2.92553 1.0124L5.07553 4.7374L1.96928 5.56865L0.988029 4.79365C0.831779 4.6749 0.631779 4.63115 0.438029 4.68115L0.231779 4.7374C0.031779 4.7874 -0.0619709 5.01865 0.0442791 5.19365L1.21928 7.2249C1.36303 7.46865 1.65053 7.5874 1.91928 7.51865L11.8068 4.86865C12.3068 4.73115 12.6068 4.21865 12.4755 3.71865Z" />
            </svg>
          )}
          {flightType === "To" && (
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8125 11.875H2.1875C1.84375 11.875 1.5625 12.1563 1.5625 12.5C1.5625 12.8438 1.84375 13.125 2.1875 13.125H12.8125C13.1562 13.125 13.4375 12.8438 13.4375 12.5C13.4375 12.1563 13.1562 11.875 12.8125 11.875ZM2.19375 7.25626L12.0875 9.90626C12.5875 10.0375 13.1 9.74376 13.2375 9.24376C13.3688 8.74376 13.075 8.23126 12.575 8.09376L9.25625 7.20626L7.64375 1.92501C7.575 1.70001 7.4 1.53126 7.175 1.46876C6.75 1.35626 6.33125 1.67501 6.33125 2.11876V6.41876L3.21875 5.59376L2.75 4.43126C2.675 4.25001 2.525 4.11251 2.33125 4.06251L2.125 4.00626C1.925 3.95001 1.73125 4.10001 1.73125 4.30626V6.65001C1.73125 6.93751 1.91875 7.18126 2.19375 7.25626Z" />
            </svg>
          )}
          <p className="text-grayedOut md:group-hover:text-white text-xs ">
            {flightType}
          </p>
        </div>
        <div>
          {flightId !== "" &&
            Airports.map((airport) =>
              airport.Id === flightId ? (
                <p key={airport.Id} className="text-sm ">
                  <span>{airport.Name}</span>{" "}
                  <span className="">({airport.Code})</span>
                </p>
              ) : null
            )}
        </div>
      </div>
      <BottomSheet
        Airports={Airports}
        setFlightId={setFlightId}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default FlightSelectionHandler;
