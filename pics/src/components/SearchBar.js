import { useState } from "react";
import './SearchBar.css'
function SearchBar({ onSearch }) {
    const [term, setTerm]  = useState('')
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        onSearch(term)
    }
    const handleChange = (event) =>{
        setTerm(event.target.value)
    }
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange}></input>
      </form>
    </div>
  );
}
export default SearchBar;
