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
  const todaysDate = new Date();
  const [selectedDate, setSelectedDate] = useState();

  return (
    <>
      <Sheet
        style={{ maxWidth: "400px", margin: "0 auto" }}
        isOpen={showDateModal}
        onClose={() => setShowDateModal(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <div
                className="h-[100%] box-border overflow-hidden pt-6 pb-4 cursor-pointer relative grid grid-row-3 "
                style={{ maxWidth: "400px", margin: "0 auto" }}>
                <div
                  style={{ maxWidth: "400px" }}
                  className=" row-span-1 w-full pt-6 -mt-8 space-y-4 bg-white ">
                  <button
                    className="absolute right-6 -mt-2 z-[9999] group "
                    onClick={() => setShowDateModal(false)}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className="fill-[#434455] group-hover:fill-buttonBlue group-active:fill-buttonBlue transition-all duration-500"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8333 1.34163L10.6583 0.166626L5.99999 4.82496L1.34166 0.166626L0.166656 1.34163L4.82499 5.99996L0.166656 10.6583L1.34166 11.8333L5.99999 7.17496L10.6583 11.8333L11.8333 10.6583L7.17499 5.99996L11.8333 1.34163Z" />
                    </svg>
                  </button>
                  <p className="font-medium text-center text-black400">
                    Travel dates
                  </p>
                  <p className="text-black400 pl-5 ">Select your travel date</p>
                  <div>
                    <ul className=" grid grid-cols-7 text-sm text-[#72737F] font-normal px-2">
                      <li className="text-center ">Sun</li>
                      <li className="text-center ">Mon</li>
                      <li className="text-center ">Tue</li>
                      <li className="text-center ">Wed</li>
                      <li className="text-center ">Thu</li>
                      <li className="text-center ">Fri</li>
                      <li className="text-center ">Sat</li>
                    </ul>
                  </div>
                  <hr />
                </div>
                <div className="row-span-1 overflow-auto py-4 px-2">
                  <MobileCalendar
                    minDate={moment(todaysDate, "YYYY-MM-DD")}
                    maxDate={moment("2024-12-31", "YYYY-MM-DD")}
                    selectedDate={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(moment(date._d, "YYYY-MM-DDTHH:mm:ss"));
                    }}
                  />
                </div>
                <div
                  style={{ maxWidth: "400px" }}
                  className=" row-span-1 w-full bottom-0 bg-white p-4 z-50">
                  <button
                    onClick={() => {
                      setShowDateModal(false);
                      setFlightDateInfo(selectedDate.format("ddd D, YYYY"));
                    }}
                    className="w-full px-4 py-3 bg-buttonBlue text-center text-white rounded-[5px] hover:bg-grayedOut active:bg-grayedOut transition-all duration-500">
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
