import React, {useState, useEffect, useRef} from 'react';

const useTimer =(initialValue)=>{
    const [timer, setTimer] = useState(initialValue);
    const timerRef =useRef(null);
    const start =()=>{
        if(!timerRef.current){
            timerRef.current= setInterval(()=>{
                setTimer(prev=>prev+1);
            },1000)
        }
    }
    const pause=()=>{
        if(timerRef.current){
            clearInterval(timerRef.current);
            timerRef.current=null; 
        }
    }
    const Reset =()=>{
        pause();
        setTimer(initialValue);
    }
  
    

}
export default function TimerApp(){
    const{start,pause,Reset,timer} =useTimer(0);
    return(
        <div>
            <h1>{`Timer:${timer}`}</h1>
            <button onClick={start}>start</button>
            <button onClick={pause}>pause</button>
            <button onClick={Reset}>Reset</button>
        </div>

    )
}