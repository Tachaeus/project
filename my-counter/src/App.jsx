import {useState} from "react"

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="root">
        <h2>My Counter</h2>
        <div>
        <button onClick={() => setCount((count) => count + 1)}>Count = {count}</button>
        <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
        </div>
        <div>
        <button onClick={() => setCount((count) => count - count)}>Reset</button>
        </div>
        </div>
    );
}
export default Counter