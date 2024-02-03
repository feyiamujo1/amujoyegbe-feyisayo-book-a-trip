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
      <Sheet isOpen={showModal} onClose={() => setShowModal(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <div className="py-6  relative ">
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="fixed right-6 -mt-4 z-[9999] group">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    className="fill-[#434455] group-hover:fill-buttonBlue group-active:fill-buttonBlue transition-all duration-500"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8333 1.34163L10.6583 0.166626L5.99999 4.82496L1.34166 0.166626L0.166656 1.34163L4.82499 5.99996L0.166656 10.6583L1.34166 11.8333L5.99999 7.17496L10.6583 11.8333L11.8333 10.6583L7.17499 5.99996L11.8333 1.34163Z" />
                  </svg>
                </button>
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
                        <p className="text-xs text-black300">{airport.Name}</p>
                      </div>
                      <p className="text-sm text-black400">{airport.Code}</p>
                    </div>
                  </div>
                ))}
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
