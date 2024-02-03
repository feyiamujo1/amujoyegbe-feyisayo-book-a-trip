import Airports from "../../Assets/data/airports.json";
import Ellispe11 from "../../Assets/svgs/Ellipse 11.svg";
import DesignLine from "../../Assets/images/Line 407.png";

const UsersSearchDetailContainer = ({ usersInfo }) => {
  const {
    flightOriginId,
    flightDestinationId,
    flightDateInfo,
    passengersInfo,
    selectedFlightDetails,
  } = usersInfo;
  return (
    <div className="bg-white rounded-[5px] p-4 shadow-custom">
      {selectedFlightDetails && (
        <p className=" text-buttonBlue font-semibold mb-2 text-center">
          {selectedFlightDetails?.OperatingAirlineName}
        </p>
      )}
      <div className="w-full px-2 flex items-center justify-between relative">
        <div className="h-[15px] w-[16px] bg-white rounded-full border border-buttonBlue"></div>
        <img src={DesignLine} alt="design" className="w-full" />
        <div className="h-[15px] w-[16px] bg-white rounded-full border border-buttonBlue"></div>
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
      {selectedFlightDetails && (
        <p
          className={`text-[9px] mt-2 font-semibold text-center ${
            selectedFlightDetails.FlightClass === "Economy" && "text-[#72737F]"
          } 
      ${selectedFlightDetails.FlightClass === "First" && "text-[#223E7C]"} 
      ${selectedFlightDetails.FlightClass === "Premium" && "text-[#CF9D61]"} 
      ${selectedFlightDetails.FlightClass === "Business" && "text-[#5CC977]"} ${
            selectedFlightDetails.FlightClass === "Premium" && "text-[#CF9D61]"
          }`}>
          {selectedFlightDetails.FlightClass + " Class"}
        </p>
      )}
      <div className="flex justify-between items-center my-3">
        {Airports.filter((airport) => airport.Id === flightOriginId).map(
          (airport) => (
            <div key={airport.Id}>
              <p className="font-semibold text-[22px] text-[#080403]">
                {airport.Code}
              </p>
              <p className="text-[9px]">{airport.StateName}, Nigeria</p>
            </div>
          )
        )}

        {Airports.filter((airport) => airport.Id === flightDestinationId).map(
          (airport) => (
            <div key={airport.Id} className="text-right">
              <p className="font-semibold text-[22px] text-[#080403]">
                {airport.Code}
              </p>
              <p className="text-[9px]">{airport.StateName}, Nigeria</p>
            </div>
          )
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between gap-1.5 items-center">
          <span className="w-[23px] h-[23px] p-1 flex justify-center items-center rounded-[5px] bg-[#D3D8E5]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.88041 7.58333H1.62499C1.32708 7.58333 1.08333 7.82708 1.08333 8.125C1.08333 8.42292 1.32708 8.66667 1.62499 8.66667H4.88041V9.63625C4.88041 9.88 5.17291 9.99917 5.34083 9.82583L6.84666 8.31458C6.94958 8.20625 6.94958 8.03833 6.84666 7.93L5.34083 6.41875C5.17291 6.24542 4.88041 6.37 4.88041 6.60833V7.58333ZM8.11958 6.38625V5.41667H11.375C11.6729 5.41667 11.9167 5.17292 11.9167 4.875C11.9167 4.57708 11.6729 4.33333 11.375 4.33333H8.11958V3.36375C8.11958 3.12 7.82708 3.00083 7.65916 3.17417L6.15333 4.68542C6.05041 4.79375 6.05041 4.96167 6.15333 5.07L7.65916 6.58125C7.82708 6.74917 8.11958 6.63 8.11958 6.38625Z"
                fill="#223E7C"
              />
            </svg>
          </span>
          <p className="text-xs font-semibold">{flightDateInfo}</p>
        </div>
        <div className="flex justify-between gap-1.5 items-center">
          <span className="w-[23px] h-[23px] p-1 flex justify-center items-center rounded-[5px] bg-[#D3D8E5]">
            <svg
              width="12"
              height="10"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.74375 2.38126C2.25625 1.89376 2.25625 1.10001 2.74375 0.612512C3.23125 0.125012 4.025 0.125012 4.5125 0.612512C5 1.10001 5 1.89376 4.5125 2.38126C4.01875 2.87501 3.23125 2.87501 2.74375 2.38126ZM1.75 9.00001V4.00001C1.75 3.65626 1.46875 3.37501 1.125 3.37501C0.78125 3.37501 0.5 3.65626 0.5 4.00001V9.00001C0.5 10.725 1.9 12.125 3.625 12.125H6.75C7.09375 12.125 7.375 11.8438 7.375 11.5C7.375 11.1563 7.09375 10.875 6.75 10.875H3.625C2.5875 10.875 1.75 10.0375 1.75 9.00001ZM10.05 11.0938L7.69375 8.73751C7.4625 8.50626 7.14375 8.37501 6.8125 8.37501H5.1875V6.07501C5.86875 6.63126 6.85 7.13751 7.8125 7.33751C8.23125 7.42501 8.625 7.11251 8.625 6.68751C8.625 6.35626 8.38125 6.08751 8.05 6.03126C7.1625 5.88126 6.25 5.40001 5.70625 4.80001L4.83125 3.83126C4.7125 3.70001 4.5625 3.59376 4.4 3.51876C4.21875 3.43126 4.0125 3.37501 3.8 3.37501H3.78125C3.00625 3.37501 2.375 4.00626 2.375 4.78126V8.37501C2.375 9.41251 3.2125 10.25 4.25 10.25H7.41875L9.15625 11.9875C9.4 12.2313 9.80625 12.2313 10.05 11.9875C10.3 11.7438 10.3 11.3438 10.05 11.0938Z"
                fill="#080403"
              />
            </svg>
          </span>
          <p className="text-[9px] font-semibold flex items-center">
            {passengersInfo.adults} Adults
            <img src={Ellispe11} alt="ellipse" className="mx-1 mt-0.5" />
            {passengersInfo.children} Children
            <img src={Ellispe11} alt="ellipse" className="mx-1 mt-0.5" />
            {passengersInfo.infants} Infants
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsersSearchDetailContainer;
