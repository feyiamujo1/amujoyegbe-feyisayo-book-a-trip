import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import UsersSearchDetailContainer from "../Components/FlightListingComponents/UsersSearchDetailContainer";
import AvailableFlightsContainer from "../Components/FlightListingComponents/AvailableFlightsContainer";
import FlightListing from "../Assets/data/flight-listing.json"

const FlightListingPage = () => {
  const location = useLocation();

  const usersInfo = location.state;

  const availableFlights=FlightListing.length;
  return (
    <div className="space-y-6 relative pb-7">
      <Header heading={"Flight Listings"} />
      <UsersSearchDetailContainer usersInfo={usersInfo} />
      <div className=" space-y-5">
        <div className="flex items-center gap-1.5">
          <p className="font-semibold text-[#080403] text-[17px]">
            Available Flights
          </p>
          <p className="font-semibold text-buttonBlue text-sm mt-0.5">
            {availableFlights} Flights
          </p>
        </div>
        <div className="space-y-2.5">
          {FlightListing.map((flight, index) => (
            <AvailableFlightsContainer flight={flight} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightListingPage;
