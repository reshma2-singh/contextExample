import React, { createContext, useState } from "react";
import ChildA from './components/ChildA'

export const FirstName = createContext();


function App() {
  const [user, setUser] = useState({
    name: "cat",
    age: 15,
    address: "some",
  });
  const [color, setColor] = useState("green");
  const[data,setData]=useState([])
  function handleChange(obj) {
    setUser(obj)
  }
  function handleClick(val) {
    setColor(val)
  }
  return (
    <div className="App">
      <FirstName.Provider value={[user, (obj) => handleChange(obj), { color }, (val) => handleClick(val)]}>
        <ChildA />
      </FirstName.Provider>
    
    </div>
  )
}
export default App;
