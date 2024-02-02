import { useState } from "react";
import Header from "../Components/Header";
import ContentCounter from "../Components/ContentCounter";
import FlightSelectionHandler from "../Components/FlightSelectionHandler";
import DateHandler from "../Components/DateHandler";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [flightOriginId, setFlightOriginId] = useState("");
  const [flightDestinationId, setFlightDestinationId] = useState("");
  const [flightDateInfo, setFlightDateInfo] = useState("");

  const navigateToNext = () => {
    navigate("/flight-listing", {
      state: {
        flightOriginId: flightOriginId,
        flightDestinationId: flightDestinationId,
        flightDateInfo: flightDateInfo,
      },
    });
  };

  return (
    <div className="space-y-6 relative">
      <Header heading={"Search Flight"} />
      <div className="space-y-2.5">
        <FlightSelectionHandler
          flightType={"From"}
          flightId={flightOriginId}
          setFlightId={setFlightOriginId}
        />
        <FlightSelectionHandler
          flightType={"To"}
          flightId={flightDestinationId}
          setFlightId={setFlightDestinationId}
        />
        <DateHandler
          flightDateInfo={flightDateInfo}
          setFlightDateInfo={setFlightDateInfo}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2.5">
          <svg
            width="13"
            height="15"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.74375 2.38126C2.25625 1.89376 2.25625 1.10001 2.74375 0.612512C3.23125 0.125012 4.025 0.125012 4.5125 0.612512C5 1.10001 5 1.89376 4.5125 2.38126C4.01875 2.87501 3.23125 2.87501 2.74375 2.38126ZM1.75 9.00001V4.00001C1.75 3.65626 1.46875 3.37501 1.125 3.37501C0.78125 3.37501 0.5 3.65626 0.5 4.00001V9.00001C0.5 10.725 1.9 12.125 3.625 12.125H6.75C7.09375 12.125 7.375 11.8438 7.375 11.5C7.375 11.1563 7.09375 10.875 6.75 10.875H3.625C2.5875 10.875 1.75 10.0375 1.75 9.00001ZM10.05 11.0938L7.69375 8.73751C7.4625 8.50626 7.14375 8.37501 6.8125 8.37501H5.1875V6.07501C5.86875 6.63126 6.85 7.13751 7.8125 7.33751C8.23125 7.42501 8.625 7.11251 8.625 6.68751C8.625 6.35626 8.38125 6.08751 8.05 6.03126C7.1625 5.88126 6.25 5.40001 5.70625 4.80001L4.83125 3.83126C4.7125 3.70001 4.5625 3.59376 4.4 3.51876C4.21875 3.43126 4.0125 3.37501 3.8 3.37501H3.78125C3.00625 3.37501 2.375 4.00626 2.375 4.78126V8.37501C2.375 9.41251 3.2125 10.25 4.25 10.25H7.41875L9.15625 11.9875C9.4 12.2313 9.80625 12.2313 10.05 11.9875C10.3 11.7438 10.3 11.3438 10.05 11.0938Z"
              fill="#080403"
            />
          </svg>
          <p className="font-semibold text-sm">Passengers</p>
        </div>
        <div className="space-y-2.5">
          <ContentCounter
            contentName={"Adults"}
            minimum={1}
            count={adultCount}
            setCounter={setAdultCount}
          />
          <ContentCounter
            contentName={"Children"}
            minimum={0}
            count={childrenCount}
            setCounter={setChildrenCount}
          />
          <ContentCounter
            contentName={"Infant"}
            minimum={0}
            count={infantCount}
            setCounter={setInfantCount}
          />
        </div>
      </div>
      <div className=" w-full bottom-0 pt-8 ">
        <button
          disabled={
            flightOriginId === "" ||
            flightDestinationId === "" ||
            flightDateInfo === ""
          }
          onClick={navigateToNext}
          className="w-full px-4 py-3 bg-buttonBlue text-center text-white rounded-[5px] hover:bg-grayedOut active:bg-grayedOut transition-all duration-500 disabled:bg-buttonBlue disabled:bg-opacity-60 disabled:hover:bg-buttonBlue disabled:hover:bg-opacity-60 shadow-custom">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
