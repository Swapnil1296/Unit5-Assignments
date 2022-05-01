import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Todo} from "./component/Todo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Todo></Todo>
    </div>
  )
}

export default App
