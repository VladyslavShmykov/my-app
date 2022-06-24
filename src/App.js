import './App.scss';
import {useState} from "react";

function App() {

    const [quantity, setQuantity] = useState(0);

    function increment() {
        setQuantity(quantity + 1);
    }

    function decrement() {
        setQuantity(quantity - 1);
    }

    return (
        <div>
            <h1>Counter: {quantity}</h1>
            <button onClick={increment} className={'btn btn-success'}>Add</button>
            <button onClick={decrement} className={'btn btn-danger'}>Remove</button>
        </div>
    );
}

export default App;
