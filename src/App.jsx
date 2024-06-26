import { useEffect, useState } from 'react'

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
  const [tanggal,setTanggal] = useState("2024-9-3");
  const [jam,setJam] = useState("00");
  const [displayTanggal, setDisplayTanggal] = useState("")
  

  useEffect(()=>{
    setDisplayTanggal(moment(tanggal).format('dddd MMMM Do, YYYY HH:mm:ss'));
    if(typeof inputTanggal !== 'object')  {
      if(inputTanggal.length < 8 || inputTanggal.length > 8) return ;

      const tanggalBaru =`${inputTanggal.slice(4)}-${inputTanggal.slice(2,4)}-${inputTanggal.slice(0,2)}`;
      
      if(new Date(tanggalBaru).getTime() < new Date().getTime() == true) return ;

      let tanggalSementara = new Date(tanggalBaru).getTime();

      console.log("tanggal default", new Date('2024-06-27').getTime(), "-");
      console.log("tanggal sementara", new Date(tanggalBaru).getTime(), "-", tanggalBaru);
      
      // console.log(moment(tanggalBaru).format('YYYY-MM-DD'));
      if(typeof inputJam !== 'object') {
        if(inputJam > 24) {
          setTanggal(tanggalSementara - 7 * 3600*1000 )
          setDisplayTanggal(moment(tanggal).format('dddd MMMM Do, YYYY HH:mm:ss'));

            return 
            
        };
        setTanggal(tanggalSementara - 7 * 3600*1000 + inputJam *3600*1000)
        setDisplayTanggal(moment(tanggal).format('dddd MMMM Do, YYYY HH:mm:ss'));

        return
      }

      setTanggal(tanggalSementara - 7 * 3600*1000);
      setDisplayTanggal(moment(tanggal).format('dddd MMMM Do, YYYY HH:mm:ss'));

    }

    if(typeof inputJam !== 'object') {
      console.log(tanggal)
      let dataJam =  new Date(tanggal).getTime();
      // console.log(tanggalSementara)
      if(inputJam > 24) {
        setTanggal(dataJam)
        setDisplayTanggal(moment(dataJam).format('dddd MMMM Do, YYYY HH:mm:ss'));

          return 
          
      };

      console.log(inputJam)
      let dataJamBaru = dataJam  + inputJam *3600*1000
      setTanggal(dataJamBaru)
      // console.log("--",moment(tanggal))
      // console.log("---",mo ment(tanggal).add(2,'hours'))
      setDisplayTanggal(moment(dataJamBaru).format('dddd MMMM Do, YYYY HH:mm:ss'));
      return; 

      // return
    }
    

    
  },[]);
  
  return (
    <>
      <section className="h-screen flex items-center justify-center flex-col relative gap-12 px-6 pb-28">
        <h1 className='text-white text-2xl  text-center tracking-widest '>WE'RE LAUNCHING SOON</h1>
        <div className='flex'>
          <FlipClockCountdown 
           renderMap={[true, true, true, true]}
          to={tanggal}
          labelStyle={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase' }}
          className='flip-clock' />
         
        </div>
        <p className='text-white border-[#fa5f86] border-2 p-5'>Launch : <br/> {displayTanggal}</p>

        
        <footer className='justify-end  items-end absolute bottom-0 w-full'>
          <div className="h-36  bg-[url('./assets/pattern-hills.svg')] bg-top flex justify-center ">
            <div className='flex mt-16 gap-6'>
            {/* <p> Today's date is { date } </p> */}
            {/* <p> The time is { time } </p> */}
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
