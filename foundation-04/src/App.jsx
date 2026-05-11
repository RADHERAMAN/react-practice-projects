import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [post, setPost] = useState([]);
  const [status, setStatus] = useState(true);
  const [seconds, setSeconds] = useState(10);

  useEffect(() =>{
    const timerId = setInterval(() => {
      setSeconds((current) => Math.max(current-1, 0));
    },1);
    return () => {
      //cleanup
      clearInterval(timerId);
    }
  },[]);
  useEffect(() => {
    const controller = new AbortController();

    async function loadpost(){
      try{
        setStatus("loading...");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
          {signal: controller.signal}

        );
        const data = await response.json();
        setPost(data);
        setStatus("success");

      }
      catch(error){
        if(error.name === "AbortError"){
          console.log("Fetch Aborted");
        }else{
          setStatus("error")
        }
      }
    }
    loadpost();
    return () => {
      controller.abort()
    }
  },[])
  return (
    <>
    <div>
      <h1>useEffect</h1>
      <h1>{seconds}</h1>
      <h2>{status}</h2>
      {post.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
         
        </div>
      ))}
    </div>

    </>
  )
}

export default App
