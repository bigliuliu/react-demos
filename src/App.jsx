import { useRef } from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import CustomizedTimeline from "./components/Timeline";
import { FaCircle, FaHome, FaBookOpen, FaFileContract, FaCoffee } from 'react-icons/fa';

function App() {
  const timelineRef = useRef(null);

  const scrollToTimeline = (e) => {
    e.preventDefault();
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const code = `import { useState } from "react";
function ReactDemos(){
  const [des,setDes]= useState('')
  useEffect(()=>{
    setDes('This is my first React project')
  },[])
  return (<div>{des}<div>)
}
export default ReactDemos`;
  return (
    <>
      <nav className="fixed top-0 right-0 p-4 z-10 bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-bl-lg">
        <ul className="flex space-x-4">
          <li>
            <a href="#" onClick={scrollToTop} className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <FaHome className="mr-2" />
              <span className="hidden sm:inline">Home</span>
            </a>
          </li>
          <li>
            <a href="#timeline" onClick={scrollToTimeline} className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <FaBookOpen className="mr-2" />
              <span className="hidden sm:inline">Collection</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <FaFileContract className="mr-2" />
              <span className="hidden sm:inline">Contract</span>
            </a>
          </li>
          <li>
            <a 
              href="https://www.buymeacoffee.com/TianaLau" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <FaCoffee className="mr-2" />
              <span className="hidden sm:inline">Buy me a coffee</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col md:flex-row w-full min-h-screen p-4 overflow-auto">
        <div className="w-full md:w-2/3 text-center m-auto">
          <h1 className="font-bold text-4xl md:text-7xl mb-4">Amazing React Demos</h1>
          <p className="text-slate-500 text-xl md:text-2xl mt-4">
          Learning React by <span className="underline decoration-orange-600">specific projects,</span>
          say good bye to hello world  👋
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 transition duration-300 ease-in-out transform hover:scale-105">
            start <span className="ml-2">→</span>
          </button>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0 flex items-center">
          <div className="w-full md:w-5/6 mx-auto bg-[#1e1e1e] rounded-lg overflow-hidden">
            <div className="flex items-center bg-[#323233] px-4 py-2">
              <FaCircle className="text-[#ff5f56] mr-2" />
              <FaCircle className="text-[#ffbd2e] mr-2" />
              <FaCircle className="text-[#27c93f]" />
              <span className="ml-4 text-white text-sm">App.jsx</span>
            </div>
            <CodeBlock
              theme={dracula}
              text={code}
              language="javascript"
              showLineNumbers={true}
              customStyle={{
                borderRadius: "0 0 5px 5px",
                fontSize: "1rem",
                padding: "1rem",
                maxHeight: "60vh",
                overflow: "auto",
              }}
            />
          </div>
        </div>
      </div>
      <div ref={timelineRef} id="timeline" className="w-full min-h-screen p-4">
        <CustomizedTimeline className="w-full h-full"/>
      </div>
    </>
  );
}

export default App;
