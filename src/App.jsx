import { CodeBlock, dracula } from "react-code-blocks";
import CustomizedTimeline from "./components/Timeline";
import { FaCircle } from 'react-icons/fa';

function App() {
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
      <div className="flex flex-col md:flex-row w-screen h-screen p-4">
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
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
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
              }}
            />
          </div>
        </div>
      </div>
      <CustomizedTimeline className="mt-8"/>
    </>
  );
}

export default App;
