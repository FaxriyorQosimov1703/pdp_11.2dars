
import { useState, useEffect} from 'react';
import Red from './components/Red'
import Green from './components/Green'
import Yellow from './components/Yellow'




import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


  function App() {
    const [time, setTime] = useState(20);

    useEffect(() => {
      let Time = setInterval(() => {
        if(time === 0) {
          setTime(20);
        }else {
          setTime(prevT => prevT - 1)
        }
      }, 1000)
      return () => clearInterval(Time)
    }, [time])

    return (
      <div className="wrapper">
        <div>
          <div className="box">
            <div className="round">{10<time?<Red />:''}</div>
            <div className="round">{time < 14 && time > 10? <Yellow />:''}</div>
            <div className="round">{time<11?<Green />:''}</div>
            <h1>{time}</h1>
          </div>
        </div>
      </div>
    )
  }



export default App;
