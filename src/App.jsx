import { CodeBlock, dracula } from "react-code-blocks";
import CustomizedTimeline from "./components/Timeline";
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
      <div className="flex w-screen h-screen">
        <div className="w-2/3 text-center m-auto">
          <h1 className="font-bold text-7xl">Amazing React Demos</h1>
          <p className="text-slate-500 text-2xl mt-4">
            Learning React by{" "}
            <span className="underline decoration-orange-600">
              specific projects
            </span>
            ,say good bye to hello world 👋
          </p>
          <p className="text-slate-300 text-3xl mt-6 cursor-pointer after:content-['\2192']">
            start{" "}
          </p>
        </div>
        <div className="w-1/3 m-auto ml-2">
          <div className="w-5/6 flex">
            <CodeBlock
              theme={dracula}
              text={code}
              language="javascript"
              showLineNumbers={true}
              customStyle={{
                borderRadius: "5px",
                boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                fontSize: "1.25rem",
              }}
            />
          </div>
        </div>
      </div>
      <CustomizedTimeline/>
    </>
  );
}


export default App;
