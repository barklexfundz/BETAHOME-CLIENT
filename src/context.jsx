import { createContext, useState } from "react";
import { properties } from "./mockData/properties";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const AppContext = createContext();

const CustomPrevArrow = (props) => (
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    <FaLongArrowAltLeft size="40px" />
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    <FaLongArrowAltRight size="40px" />
  </div>
);

const AppProvider = ({ children }) => {
  const [bedroomCount, setBedroomCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const setLightMode = () => {
    setIsDark(!isDark);
    console.log("clicked light mode");
  };

  const incrementBedroom = () => {
    setBedroomCount(bedroomCount + 1);
  };

  const decrementBedroom = () => {
    if (bedroomCount > 0) {
      setBedroomCount(bedroomCount - 1);
    }
  };

  return (
    <AppContext.Provider
      value={{
        properties,
        bedroomCount,
        incrementBedroom,
        decrementBedroom,
        isDark,
        setIsDark,
        setLightMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
