import React from 'react'
import{BsFillGrid3X3GapFill,BsPeopleFill,BsFillPeopleFill, BsFillAirplaneEnginesFill} from 'react-icons/bs'
import {useState} from "react"
import axios from  "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from "react"


function Homes() {
  
  const[sensor,setSensor]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
  
        const sensorResponse = await axios.get('http://localhost:3001/getSensors');
        setSensor(sensorResponse.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };console.log(sensor)


 // useEffect(()=>{ 
    //table();
 // },[])//
 /*console.log(sensor); 
const table = async ()=>{
  axios.get('http://localhost:3001/getTable')
  .then(users =>setUsers(users.data))  
  .catch(err => console.log(err))
};
 
const sensors =async()=> {
  axios.get('http://localhost:3001/getSensors')
  .then(users => setsensor(users.data))
  .catch(err => console.log("error fetching data",err))
};

  //table();
 // sensors()
console.log(sensor)*/

 //fetchData();
 const intervalid = setInterval(fetchData,1000);
 return()=>{
  clearInterval(intervalid);
 }
  }, [sensor]);
  return (
    <main className='main-container'>
          <div className='main-tittle'>
             <h3>DASHBOARD</h3>
          </div>
          <div className="main-cards">
            <div className='card'>
              <div className="card-inner">           
                <h3>Sensor 1</h3>
               <BsFillAirplaneEnginesFill className='card_icon'/>
              </div>
              <h1 className='mohan'>{sensor.length > 0 ? sensor[0].sensor1 : ''}</h1>
            </div>    
          <div className='card'>
            <div className="card-inner">
              <h3>Sensor 2</h3>
                < BsFillGrid3X3GapFill className='card_icon'/>
            </div>
              <h1 className='mohan'>{sensor.length > 0 ? sensor[0].sensor2 : ''}</h1>
          </div>
          <div className='card'>
            <div className="card-inner">
             <h3>Sensor 3</h3>
               < BsPeopleFill className='card_icon'/>
            </div>
             <h1 className='mohan'>{sensor.length > 0 ? sensor[0].sensor3 : ''}</h1>
          </div>
          <div className='card'>
            <div className="card-inner">
             <h3>Sensor 4</h3>
               < BsFillPeopleFill className='card_icon'/>
            </div>
           <h1 className='mohan'>{sensor.length > 0 ? sensor[0].sensor4 : ''}</h1>
          </div>
        </div>
          <div className='charts'>
            <table>
                <thead>
              <tr>
                <th>
                  No
                </th>
                <th>
                  Sensor 1
                </th>
                <th>
                  Sensor 2
                </th>
                <th>
                  Sensor 3
                </th>
                <th>
                  Sensor 4
                </th>  
              </tr>
              </thead>
             <tbody>
              <tr>
               <th>1</th>
               <th>{sensor.length > 0 ? sensor[3].sensor1 : ''}</th>
               <th>{sensor.length > 0 ? sensor[3].sensor2 : ''}</th>
               <th>{sensor.length > 0 ? sensor[3].sensor3 : ''}</th>
               <th>{sensor.length > 0 ? sensor[3].sensor4 : ''}</th>
              </tr>
              <tr>
                <th>2</th>
                <th>{sensor.length > 0 ? sensor[2].sensor1 : ''}</th>
                <th>{sensor.length > 0 ? sensor[2].sensor2 : ''}</th>
                <th>{sensor.length > 0 ? sensor[2].sensor3 : ''}</th>
                <th>{sensor.length > 0 ? sensor[2].sensor4 : ''}</th>
              </tr>
              <tr>
                <th>3</th>
                <th>{sensor.length > 0 ? sensor[1].sensor1 : ''}</th>
                <th>{sensor.length > 0 ? sensor[1].sensor2 : ''}</th>
                <th>{sensor.length > 0 ? sensor[1].sensor3 : ''}</th>
                <th>{sensor.length > 0 ? sensor[1].sensor4 : ''}</th>
              </tr>
              <tr>
                <th>4</th>
                <th>{sensor.length > 0 ? sensor[0].sensor1 : ''}</th>
                <th>{sensor.length > 0 ? sensor[0].sensor2 : ''}</th>
                <th>{sensor.length > 0 ? sensor[0].sensor3 : ''}</th>
                <th>{sensor.length > 0 ? sensor[0].sensor4 : ''}</th>
              </tr>

            </tbody>
            </table>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6996041325424!2d80.24036047420527!3d12.991055214453205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526789b9607537%3A0x961343cab532a48d!2sXYMA%20Analytics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1697189525515!5m2!1sen!2sin"            
               width="500"
               height="300"
               style={{ border: "0" }}
               allowFullScreen=""
               loading="lazy"
               title="Apple Park on Google Maps"
            ></iframe>
          </div>

    </main> 
    
  )
}

export default Homes