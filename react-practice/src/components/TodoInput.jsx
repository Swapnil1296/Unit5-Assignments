import { useState } from "react";


export const TodoInput = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <input type="text" placeholder="Enter "
                onChange={(e) => {
                setText(e.target.value)
            }}/>
            <button>Add Value</button>
        </div>
    )
}