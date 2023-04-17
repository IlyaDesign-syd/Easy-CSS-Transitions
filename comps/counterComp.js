import { React, useState, useRef, useEffect } from 'react';

function CounterComp() {
    const [count, setCount] = useState(0);

    function handleCounter() {
        setCount(count + 1)
    }

    return(
        <div>
           <input type="button" onClick={handleCounter} value="add count" data-testid="buttonIncr"/>
           <div >Current count:</div>
           <div data-testid="counterElem">{count}</div>
        </div>
    )
}

export default CounterComp;