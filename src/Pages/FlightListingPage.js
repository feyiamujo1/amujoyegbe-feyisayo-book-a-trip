import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import UsersSearchDetailContainer from "../Components/FlightListingComponents/UsersSearchDetailContainer";

const FlightListingPage = () => {
  const location = useLocation();

  const usersInfo = location.state;

  console.log(location.state);
  return (
    <div className="space-y-6 relative">
      <Header heading={"Flight Listings"} />
      <UsersSearchDetailContainer usersInfo={usersInfo} />
    </div>
  );
};

export default FlightListingPage;
