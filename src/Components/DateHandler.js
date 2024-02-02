import { useState } from "react";
import DateBottomSheet from "./DateBottomSheet";

const DateHandler = ({ flightDateInfo, setFlightDateInfo }) => {
  const [showDateModal, setShowDateModal] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setShowDateModal(true);
        }}
        className="flex items-center gap-2.5 rounded-[5px] py-4 px-3 bg-white h-[50px] active:bg-buttonHover md:hover:bg-buttonHover transition-all duration-300 cursor-pointer">
        <div className="flex items-center gap-2.5 ">
          <svg
            width="17"
            height="17"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.875 1.875H11.25V1.25C11.25 0.90625 10.9688 0.625 10.625 0.625C10.2812 0.625 10 0.90625 10 1.25V1.875H5V1.25C5 0.90625 4.71875 0.625 4.375 0.625C4.03125 0.625 3.75 0.90625 3.75 1.25V1.875H3.125C2.43125 1.875 1.88125 2.4375 1.88125 3.125L1.875 11.875C1.875 12.5625 2.43125 13.125 3.125 13.125H11.875C12.5625 13.125 13.125 12.5625 13.125 11.875V3.125C13.125 2.4375 12.5625 1.875 11.875 1.875ZM11.25 11.875H3.75C3.40625 11.875 3.125 11.5938 3.125 11.25V5H11.875V11.25C11.875 11.5938 11.5938 11.875 11.25 11.875ZM5 6.25H6.875C7.21875 6.25 7.5 6.53125 7.5 6.875V8.75C7.5 9.09375 7.21875 9.375 6.875 9.375H5C4.65625 9.375 4.375 9.09375 4.375 8.75V6.875C4.375 6.53125 4.65625 6.25 5 6.25Z"
              fill="#D3D3D3"
            />
          </svg>
          <p className="text-grayedOut text-xs ">Departure</p>
        </div>
        <div>
          <p className="text-sm ">
            {flightDateInfo}
          </p>
        </div>
      </div>
      <DateBottomSheet
        setFlightDateInfo={setFlightDateInfo}
        showDateModal={showDateModal}
        setShowDateModal={setShowDateModal}
      />
    </>
  );
};

export default DateHandler;
