import Sheet from "react-modal-sheet";
import MobileCalendar from "react-scroll-calendar";
import moment from "moment";
import "react-scroll-calendar/build/react-scroll-calendar.css"; // only needs to be imported once
import { useState } from "react";

const DateBottomSheet = ({
  setFlightDateInfo,
  showDateModal,
  setShowDateModal,
}) => {
  const [selectedDate, setSelectedDate] = useState();
  return (
    <>
      <Sheet isOpen={showDateModal} onClose={() => setShowDateModal(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <div className="py-6 px-1 cursor-pointer relative">
                <button
                  className="fixed right-4 -mt-4 z-[9999] "
                  onClick={() => setShowDateModal(false)}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.8333 1.34163L10.6583 0.166626L5.99999 4.82496L1.34166 0.166626L0.166656 1.34163L4.82499 5.99996L0.166656 10.6583L1.34166 11.8333L5.99999 7.17496L10.6583 11.8333L11.8333 10.6583L7.17499 5.99996L11.8333 1.34163Z"
                      fill="#434455"
                    />
                  </svg>
                </button>
                <div className="fixed w-full pt-4 -mt-8 space-y-4 bg-white ">
                  <p className="font-medium text-center text-black400">
                    Travel dates
                  </p>
                  <p className="text-black400 pl-4 ">Select your travel date</p>
                  <div>
                    <ul className=" grid grid-cols-7 text-sm text-[#72737F] font-normal">
                      <li className="text-center -ml-2.5">Sun</li>
                      <li className="text-center -ml-2.5">Mon</li>
                      <li className="text-center -ml-2.5">Tue</li>
                      <li className="text-center -ml-2.5">Wed</li>
                      <li className="text-center -ml-2.5">Thu</li>
                      <li className="text-center -ml-2.5">Fri</li>
                      <li className="text-center -ml-2.5">Sat</li>
                    </ul>
                  </div>
                  <hr />
                </div>
                <div className="mb-10 mt-32">
                  <MobileCalendar
                    minDate={moment(new Date(), "YYYY-MM-DD")}
                    maxDate={moment("2025-12-31", "YYYY-MM-DD")}
                    onSelect={(date) => {
                      setSelectedDate(moment(date._d, "YYYY-MM-DDTHH:mm:ss"));
                      console.log(date);
                    }}
                  />
                </div>
                <div className="fixed w-full bottom-0 bg-white p-4 z-50">
                  <button
                    onClick={() => {
                      setShowDateModal(false);
                      setFlightDateInfo(selectedDate.format("ddd D, YYYY"));
                    }}
                    className="w-full px-4 py-3 bg-buttonBlue text-center text-white rounded-[5px]">
                    Confirm
                  </button>
                </div>
              </div>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default DateBottomSheet;
