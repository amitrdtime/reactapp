import { useState, useEffect} from "react";

function About() {
    //let count = 0;
    let [count, setCount] = useState(0);

    let increment = () =>{
        setCount(count++)
        console.log("Inc-",count);
    }

    let decrement = () =>{
        setCount(count--)
        console.log("Dec-",count);
    }

    useEffect(()=>{
        console.log('call first time useEffect');
        // calling apis
    },[]);

    useEffect(()=>{
        console.log('call every render useEffect');
        // 
    });

    useEffect(()=>{
        console.log('call when state value change useEffect');
        // fetch('http://localhost:5001/user/getuserbyid/'+ userId)
    },[count]);

    return (
        <main className="p-3 box1" >
            <button onClick={increment}>Increment</button> <button onClick={decrement}>Decrement</button>
            <br/>
            {count}
        </main> 
    )
}

export default About;