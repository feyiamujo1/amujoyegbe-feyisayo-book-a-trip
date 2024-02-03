import Sheet from "react-modal-sheet";

const FlightBottomSheet = ({
  Airports,
  setFlightId,
  showModal,
  setShowModal,
  oppositeValue,
}) => {
  return (
    <>
      <Sheet
        style={{ maxWidth: "400px", margin: "0 auto", height: "100vh" }}
        isOpen={showModal}
        onClose={() => setShowModal(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <div
                className="h-[100%] box-border overflow-hidden pt-6 pb-4 cursor-pointer relative grid grid-row-2 "
                style={{ maxWidth: "400px", margin: "0 auto" }}>
                <div
                  style={{ maxWidth: "400px" }}
                  className=" row-span-1 w-full pt-6 pb-4 -mt-8 space-y-4 bg-white ">
                  <button
                    className="absolute right-6 -mt-2 z-[9999] group "
                    onClick={() => setShowModal(false)}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className="fill-[#434455] group-hover:fill-buttonBlue group-active:fill-buttonBlue transition-all duration-500"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8333 1.34163L10.6583 0.166626L5.99999 4.82496L1.34166 0.166626L0.166656 1.34163L4.82499 5.99996L0.166656 10.6583L1.34166 11.8333L5.99999 7.17496L10.6583 11.8333L11.8333 10.6583L7.17499 5.99996L11.8333 1.34163Z" />
                    </svg>
                  </button>
                </div>
                <div className="row-span-1 overflow-auto pt-2 pb-32 px-2">
                  {Airports.map((airport) => (
                    <div
                      onClick={() => {
                        if (oppositeValue !== airport.Id) {
                          setFlightId(airport.Id);
                          setShowModal(false);
                        }
                      }}
                      className={` px-5 ${
                        oppositeValue === airport.Id
                          ? "opacity-30"
                          : "cursor-pointer active:bg-grayedOut md:hover:bg-grayedOut rounded-[5px] group"
                      } `}
                      key={airport.Id}>
                      <div className="flex justify-between items-center h-[60px] border-b border-[#EFEFEF] group-hover:border-grayedOut transition-all duration-500 ">
                        <div>
                          <p className="text-sm text-black400">
                            {airport.StateName}, Nigeria
                          </p>
                          <p className="text-xs text-black300">
                            {airport.Name}
                          </p>
                        </div>
                        <p className="text-sm text-black400">{airport.Code}</p>
                      </div>
                    </div>
                  ))}
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

export default FlightBottomSheet;
