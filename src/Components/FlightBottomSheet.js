import Sheet from "react-modal-sheet";

const FlightBottomSheet = ({
  Airports,
  setFlightId,
  showModal,
  setShowModal,
}) => {
  return (
    <>
      <Sheet isOpen={showModal} onClose={() => setShowModal(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <div className="py-6 cursor-pointer relative ">
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="fixed right-4 -mt-4 z-[9999] ">
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
                {Airports.map((airport) => (
                  <div
                    key={airport.Id}
                    onClick={() => {
                      setFlightId(airport.Id);
                      setShowModal(false);
                    }}
                    className="flex justify-between items-center h-[60px] border-b border-[#EFEFEF] active:bg-buttonHover md:hover:bg-buttonHover transition-all duration-500 px-4 md:px-6">
                    <div>
                      <p className="text-sm text-black400">
                        {airport.StateName}, Nigeria
                      </p>
                      <p className="text-xs text-black300">{airport.Name}</p>
                    </div>
                    <p className="text-sm text-black400">{airport.Code}</p>
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
