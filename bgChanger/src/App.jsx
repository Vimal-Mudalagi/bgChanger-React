import { useState } from "react"


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center top-5 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-2xl bg-white px-3 py-3 rounded-3xl">

          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-l"
            style={{ backgroundColor: "red" }}
          >Red</button>

          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-l"
            style={{ backgroundColor: "green" }}
          >Green</button>

          <button 
          onClick={() => setColor("brown")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-l"
            style={{ backgroundColor: "brown" }}
          >Brown</button>

          <button
          onClick={() => setColor("violet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-l"
            style={{ backgroundColor: "violet" }}
          >violet</button>

          <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-l"
            style={{ backgroundColor: "orange" }}
          >orange</button>

          <button 
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-l"
            style={{ backgroundColor: "yellow" }}
          >yellow</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-l"
            style={{ backgroundColor: "blue" }}
          >blue</button>

          <button 
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-l"
            style={{ backgroundColor: "purple" }}
          >purple</button>

          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-l"
            style={{ backgroundColor: "pink" }}
          >pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
