import { useState } from 'react'

import { IconContext } from "react-icons";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './style.css';
import moment from 'moment';
function App() {
  const queryParameters = new URLSearchParams(window.location.search)
  const inputTanggal = queryParameters.get("tanggal");
  const inputJam = queryParameters.get("jam");
  const [tanggal,setTanggal] = useState("2024-9-4");
  const [jam,setJam] = useState("00");
  console.log(inputJam === "");
  console.log(inputTanggal === "");
  moment.locale('i')
  let displayTanggal = moment(tanggal).format('LLL');
  // console.log(typeof inputTanggal);
  // console.log(inputTanggal);
  const date = moment().format("MMMM DD YYYY");
  const time = moment().format("HH mm ss");
  return (
    <>
      <section className="h-screen flex items-center justify-center flex-col relative gap-12 px-6 pb-28">
        <h1 className='text-white text-2xl  text-center tracking-widest '>WE'RE LAUNCHING SOON</h1>
        <div className='w-72  flex'>
          <FlipClockCountdown 
           renderMap={[false, true, true, true]}
          to={new Date(tanggal)}
          labelStyle={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase' }}
          className='flip-clock' />
         
        </div>
        <p className='text-white'>Date : {displayTanggal}</p>
        <p className='text-white'>Date : {displayTanggal}</p>
        
        <footer className='justify-end  items-end absolute bottom-0 w-full'>
          <div className="h-36  bg-[url('./assets/pattern-hills.svg')] bg-top flex justify-center ">
            <div className='flex mt-16 gap-6'>
            <p> Today's date is { date } </p>
            <p> The time is { time } </p>
              {/* <img src={IconFacebook} alt="" className='w-7 h-7 hover:text-black'/>
              <img src={IconPinterest} alt="" className='w-7 h-7 hover:bg-blue-500'/>
              <img src={IconInstagram} alt="" className='w-7 h-7 hover:bg-blue-500'/> */}
              <IconContext.Provider value={{ color: "#915eff", className: "contactIcon" }}>
                <FaFacebookSquare style={{ color: "white", fontSize: "1.7em" }}/>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "#915eff", className: "contactIcon" }}>
                <FaPinterest style={{ color: "white", fontSize: "1.7em" }}/>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "#915eff", className: "contactIcon" }}>
                <FaInstagram style={{ color: "white", fontSize: "1.7em" }}/>
              </IconContext.Provider>
              
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}

export default App