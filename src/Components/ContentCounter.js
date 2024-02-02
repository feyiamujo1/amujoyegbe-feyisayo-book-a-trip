import React from "react";

const ContentCounter = ({ contentName, minimum, count, setCounter }) => {
  const increaseCount = () => {
    setCounter((prev) => prev + 1);
  };
  const descreaseCount = () => {
    if (count > minimum) {
      setCounter((prev) => prev - 1);
    }
  };
  return (
    <div className="flex justify-between items-center gap-2 rounded-[5px] px-3 py-1.5 bg-white">
      <p className="text-grayedOut text-[12px]">{contentName}</p>
      <div className="flex gap-3 items-center">
        <button
          onClick={descreaseCount}
          disabled={count <= minimum}
          className={`h-9 w-9 flex items-center justify-center rounded-[5px] bg-buttonOffWhite ${
            count <= minimum
              ? "buttonHover"
              : "active:bg-buttonHover  md:hover:bg-buttonHover transition-all duration-500"
          } `}>
          <svg
            width="12"
            height="2"
            viewBox="0 0 12 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="2" fill="#15162B" />
          </svg>
        </button>
        <p className="text-Black400 w-[30px] text-center">{count}</p>
        <button
          onClick={increaseCount}
          className={`h-9 w-9 flex items-center justify-center rounded-[5px] bg-buttonOffWhite active:bg-buttonHover md:hover:bg-buttonHover transition-all duration-500`}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.8333 6.83332H6.83332V11.8333H5.16666V6.83332H0.166656V5.16666H5.16666V0.166656H6.83332V5.16666H11.8333V6.83332Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContentCounter;
