import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const getColor = () => {
    return color == "black" ||
      color == "red" ||
      color == "blue" ||
      color == "green"
      ? "text-white"
      : "text-black";
  };
  return (
    <>
      <div className="h-screen w-screen" style={{ backgroundColor: color }}>
        <div className={"text-2xl w-full text-center py-3 " + getColor()}>
          Background Colour Changer
        </div>
        <div className="fixed flex flex-wrap justify-center top-16 inset-x-0 px-2">
          <div className="flex flex-wrap  gap-3 justify-center shadow-lg py-2 px-3 bg-slate-300 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white bg-red-600"
            >
              Red
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black bg-white"
            >
              White
            </button>
            <button
              onClick={() => setColor("cyan")}
              className="outline-none px-4 py-1 rounded-full text-white bg-cyan-600"
            >
              Cyan
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white bg-pink-600"
            >
              Pink
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white bg-blue-600"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white bg-yellow-600"
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white bg-orange-600"
            >
              Orange
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white bg-green-600"
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
