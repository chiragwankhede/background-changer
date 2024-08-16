import { useState } from "react"


function App() {
const [color, setColor] = useState("pink")

  return (
<div className="w-full h-screen " style={{backgroundColor : color}}
>

<button onClick={ () => setColor("red")}
className="p-4 outline-none rounded-2xl py-3- border-spacing-3"
style={{backgroundColor: "red"}}
>red</button>
<button onClick={ () => setColor("green")}
className="p-4 outline-none rounded-2xl py-3- border-spacing-3"
style={{backgroundColor: "green"}}
>green</button>
<button onClick={ () => setColor("white")}
className="p-4 outline-none rounded-2xl py-3- border-spacing-3"
style={{backgroundColor: "white"}}
>white</button>
<button onClick={ () => setColor("yellow")}
className="p-4 outline-none rounded-2xl py-3- border-spacing-3"
style={{backgroundColor: "yellow"}}
>yellow</button>
<button onClick={ () => setColor("black")}
className="p-4 outline-none rounded-2xl py-3- border-spacing-3 text-white"
style={{backgroundColor: "black"}}
>black</button>
<button onClick={ () => setColor("lavender")}
className="p-4 outline-none rounded-2xl py-3- border-spacing-3"
style={{backgroundColor: "lavender"}}
>lavender</button>
<button onClick={ () => setColor("orange")}
className="p-4 outline-none rounded-2xl py-3- border-spacing-3"
style={{backgroundColor: "orange"}}
>orange</button>
<button onClick={ () => setColor("olive")}
className="p-4 outline-none rounded-2xl py-3- border-spacing-3"
style={{backgroundColor: "olive"}}
>olive</button>













</div>
  )
}

export default App
