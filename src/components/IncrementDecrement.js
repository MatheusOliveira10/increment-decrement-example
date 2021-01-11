import React, { useState } from "react";

export const IncrementDecrement = () => {
    const [counter, setCounter] = useState(14)

    return <div id="contador">
        <span> {counter} </span>
        <span onClick={() => { setCounter(counter + 1) }}> + </span>
        <span onClick={() => { setCounter(counter - 1) }}> - </span>
    </div>
}