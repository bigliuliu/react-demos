import { useState } from "react";
import Dropdown from "../components/Dropdown";
function DropdownPage() {
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];
  const [selection, setSelection] = useState(null)
  const handleSelect = (option)=>{
    setSelection(option)
  }
  return <Dropdown options={options} value = {selection} onChange = {handleSelect}/>;
}
export default DropdownPage;