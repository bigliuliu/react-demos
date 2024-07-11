import { createContext, useState } from "react";
const BookContext = createContext();
function Provider({ children }) {
  const [count, setCount] = useState(5);
  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };
  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}
export { Provider };
export default BookContext;

// import BookContext,{Provider} from '.df/a.ad'
