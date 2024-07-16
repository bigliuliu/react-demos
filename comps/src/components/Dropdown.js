import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";
function Dropdown({ options,value,onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenSelect = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (option) => {
    setIsOpen(false)
    onChange(option)
  };
  const renderOptions = options.map((option, index) => {
    return (
      <div
        className="bg-gray-50 p-1 mb-1 cursor-pointer hover:bg-sky-100 rounded"
        onClick={() => {
          handleClick(option);
        }}
        key={index}
        label={option.value}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="w-48 relative">
      <Panel
        className="flex items-center justify-between border-b cursor-pointer"
        onClick={handleOpenSelect}
      >
        {value?.label || 'Select...'}
        {isOpen ? <GoChevronDown className="text-lg"/>:<GoChevronLeft className="text-lg"/>}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderOptions}</Panel>}
    </div>
  );
}
export default Dropdown;
