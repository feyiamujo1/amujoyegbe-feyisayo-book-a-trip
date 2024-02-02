import ellipseGray from "../../Assets/svgs/Ellipse 1111.svg";
import moment from "moment";

const AvailableFlightsContainer = ({ flight }) => {
  return (
    <div className="bg-white rounded-[5px] p-4 border border-darker space-y-5">
      <div className="flex justify-between gap-1.5">
        <p className="w-[140px]">
          <span className="font-semibold text-nowrap">{moment(flight.DepartureDate, moment.ISO_8601).format("hh:mm a").toString()}</span>{" "}
          <span className="text-sm text-black300">
            {flight.DepartureAirportCode}
          </span>
        </p>
        <div className="w-full">
          <p className="text-[#72737F] text-[13px] w-fit mx-auto">
            {flight.StopOverDuration.replace(/:/g, " ")}
          </p>
          <div className="w-full px-2 flex items-center justify-between relative my-1">
            <div className="h-[10px] w-[10px] bg-white rounded-full border border-buttonBlue"></div>
            <hr className="bg-[#F7F7F9] w-full " />
            <div className="h-[10px] w-[10px] bg-white rounded-full border border-buttonBlue"></div>
            <svg
              width="17"
              height="17"
              viewBox="0 0 15 15"
              className="absolute left-0 right-0 bottom-0 top-0 m-auto"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.4375 1.575L9.375 6.5625H12.8125C13.3312 6.5625 13.75 6.98125 13.75 7.5C13.75 8.01875 13.3312 8.4375 12.8125 8.4375H9.375L6.4375 13.425C6.325 13.625 6.10625 13.75 5.875 13.75C5.4375 13.75 5.125 13.3313 5.24375 12.9125L6.55625 8.4375H3.125L2.28125 9.85C2.225 9.94375 2.11875 10 2.0125 10H1.7H1.65C1.44375 10 1.29375 9.80625 1.34375 9.6125L1.8 7.7875L1.875 7.5L1.81875 7.2625L1.75 7L1.45 5.8125L1.34375 5.39375C1.29375 5.19375 1.44375 5.00625 1.65 5.00625H1.88125H2.0125C2.125 5.00625 2.225 5.0625 2.28125 5.15625L3.125 6.5625L6.5625 6.5625L5.25 2.0875C5.125 1.66875 5.4375 1.25 5.875 1.25C6.10625 1.25 6.325 1.375 6.4375 1.575Z"
                fill="#223E7C"
              />
            </svg>
          </div>
          <p className="text-[#72737F] text-[13px] w-fit mx-auto">
            {flight.StopOvers === "Non"
              ? "Non-stop"
              : flight.StopOvers + " stop"}
          </p>
        </div>
        <p className="w-[140px] text-right">
          <span className="font-semibold text-nowrap">{moment(flight.ArrivalDate, moment.ISO_8601).format("hh:mm a").toString()}</span>{" "}
          <span className="text-sm text-black300">
            {flight.ArrivalAirportCode}
          </span>
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex text-[13px]">
          <p className="text-[#72737F]">{flight.OperatingAirlineName}</p>
          <img src={ellipseGray} alt="design" className="mx-1 mt-1" />
          <p
            className={`${flight.FlightClass === "Economy" && "text-[#72737F]"} 
            ${flight.FlightClass === "First" && "text-[#223E7C]"} 
            ${flight.FlightClass === "Premium" && "text-[#CF9D61]"} 
            ${flight.FlightClass === "Business" && "text-[#5CC977]"} ${
              flight.FlightClass === "Premium" && "text-[#CF9D61]"
            } text-[#72737F]`}>
            {flight.FlightClass === "First"
              ? "First Class"
              : flight.FlightClass}
          </p>
        </div>
        <p className="font-medium">N {flight.TotalFare}</p>
      </div>
      <button className="w-full px-4 py-3 bg-buttonBlue text-center text-white rounded-[5px] hover:bg-grayedOut active:bg-grayedOut transition-all duration-500 ">
        Make Payment
      </button>
    </div>
  );
};

export default AvailableFlightsContainer;
