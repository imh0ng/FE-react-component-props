import Button from "../components/Button/Button";
import { useState } from 'react';

const SelectButtons = () => {
  const [activeButtonName, SetActiveButton] = useState("Default");

  const handleButtonClick = (name) => {
    SetActiveButton(name);
  };
  
  return (
    <div className="selectBtns">
      {["Primary", "Secondary", "Default"].map((btnName) => (
        <Button 
          key={btnName}
          btnName={btnName}
          onClick={() => handleButtonClick(btnName)}
          isOn={activeButtonName === btnName}
        />
      ))}
    </div>
  );
};

export default SelectButtons;
