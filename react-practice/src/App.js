import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// react intro day two;
// 1.Component => smallest reusable peace of code

/*function App() {

  const food = "Pizza";
  const age = 26;
  const skills= ["mern", "dsa", "animation", "react", "23","24"]
  return (
    <div className="App">
      <h1> Your fovorite {food} is and your {age} year old</h1>
      <h3>if your age is{age > 18 ? "Eligible to drive":"Not Eligible"}</h3>    
      <div>Your Skill:
        <ul>{skills.map((ele) => {
          return <p className='redtext'>{ele}</p>
        })}</ul>
      </div>
    </div>        // ternury operators
  );
}*/


/*
function App() {
  const food = "Pizza";
  const age = 26;
  const skills = ["mern", "dsa", "animation", "react", "23", "24"];
  return (
    <div className="App">
      <h1>
        Your fovorite {food} is and your {age} year old
      </h1>
      <h3>if your age is{age > 18 ? "Eligible to drive" : "Not Eligible"}</h3>
      <div>
        Your Skill:
        <ul>
          {skills.map((ele) => {
            return <Skill skills={ele} />;
          })}
        </ul>
      </div>
    </div> // ternury operators
  );
}

//creating a custom component for reusable code
function Skill({skills}) {
  return <p className="redtext"> Your Skills : {skills}</p>; // the parameter must be same which you have given at line 42 as key value (skills) or can use like value.skills in component part
}
*/


/* State, Props and conditional renderign
 */

/*state management day four */

/*function App() {
  const data= "Hello Zaatu"
  return (
    <div className="App">
      <First data={data} />
      <Second/>
    </div> 
  );
}

function First({ data }) {
  return <div>{data}</div>    //getting data from parent (parent to child state)
}
function Second({data}) {
  return <div>second child</div>;   //getting data from parent (parent to child state)
}*/


/*
function App() {
  const [message, setMessage]= useState("")   // it's use to transfere data from sibling to sibling
  const getData = (data) => {
    console.log(data)
    setMessage(data)
  };
  return (
    <div className="App">
      <First dataFn={getData} />
      <Second message={message}/>
    </div>
  );
}

function First({ dataFn }) {
  const data = "Hello Swapnil"  
           //sending data to parent (child to parent state)
  return (
    <div>
      first child
      <button onClick={() => {dataFn(data)}}>add data</button>   
    </div> // btn invokes the getData fun 
  );
}
function Second({ message })
{
  console.log("received from :", {message})    // receiving data from first (sibs) creating sibling to sibling state;
  return <div>second child {message}</div>;
}
*/
import {Todo} from "./components/Todo"
function App() {
  <div className="App">
  <Todo/>
  </div>
}
export default App;
