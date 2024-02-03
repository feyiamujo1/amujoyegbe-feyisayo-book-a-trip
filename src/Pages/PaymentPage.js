import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import UsersSearchDetailContainer from "../Components/FlightListingComponents/UsersSearchDetailContainer";

const PaymentPage = () => {
  const location = useLocation();
  const usersInfo = location.state;
  console.log(usersInfo);

  return (
    <div className="space-y-6 relative pb-7">
      <Header heading={"Make Payment"} />
      <UsersSearchDetailContainer usersInfo={usersInfo} />
      <div className="flex flex-col gap-5">
        <p className="font-semibold text-[#565656] text-sm">Summary</p>
        <div className="space-y-3 p-4 rounded-[5px] shadow-custom bg-white">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-[#BABABA] text-sm">Ticket fare</p>
            <p className="font-semibold text-[17px]">
              N {usersInfo.selectedFlightDetails.TicketFare}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-[#BABABA] text-sm">
              Service Charges
            </p>
            <p className="font-semibold text-[17px]">
              N {usersInfo.selectedFlightDetails.ServiceCharge}
            </p>
          </div>
        </div>
        <div className=" p-4 rounded-[5px] shadow-custom bg-white">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-buttonBlue text-sm">
              Total Amount
            </p>
            <p className="font-semibold text-[20px]">
              N {usersInfo.selectedFlightDetails.TotalFare}
            </p>
          </div>
        </div>
        <div className=" w-full bottom-0 pt-8 ">
        <button
          className="w-full px-4 py-3 bg-buttonBlue text-center text-white rounded-[5px] hover:bg-grayedOut active:bg-grayedOut transition-all duration-500 disabled:bg-buttonBlue disabled:bg-opacity-60 disabled:hover:bg-buttonBlue disabled:hover:bg-opacity-60 shadow-custom">
          Pay N {usersInfo.selectedFlightDetails.TotalFare}
        </button>
      </div>
      </div>
    </div>
  );
};

export default PaymentPage;
