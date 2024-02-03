import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ heading }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <header className="relative">
      {location.pathname !== "/" && (
        <button
          onClick={goBack}
          className="p-2 flex items-center justify-center absolute left-0 bg-white shadow-custom top-0 bottom-0 my-auto">
          <svg
            width="15"
            height="15"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.875 4.875H2.89375L5.94375 1.825C6.1875 1.58125 6.1875 1.18125 5.94375 0.937497C5.7 0.693747 5.30625 0.693747 5.0625 0.937497L0.943753 5.05625C0.700003 5.3 0.700003 5.69375 0.943753 5.9375L5.0625 10.0562C5.30625 10.3 5.7 10.3 5.94375 10.0562C6.1875 9.8125 6.1875 9.41875 5.94375 9.175L2.89375 6.125H9.875C10.2188 6.125 10.5 5.84375 10.5 5.5C10.5 5.15625 10.2188 4.875 9.875 4.875Z"
              fill="#223E7C"
            />
          </svg>
        </button>
      )}
      <h1 className=" font-semibold text-center text-customBlack text-[17px]">
        {heading}
      </h1>
    </header>
  );
};

export default Header;
