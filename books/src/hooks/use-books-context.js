import { useContext } from "react";
import BookContext from "../context/books";
function useBooksContext(){
    return useContext(BookContext)
}
export default useBooksContext