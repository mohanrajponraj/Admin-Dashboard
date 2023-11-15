import React,{useState,useEffect} from 'react'
import {BsFiletypePdf } from 'react-icons/bs';
import{FaFileExcel} from 'react-icons/fa'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios'

import {utils,writeFile} from 'xlsx'

function Document(){
  const [data,setData]=useState([])
    
    useEffect(()=>{
      async function  fetchDatafrombackend(){
        try{
          const response =await axios.get('http://localhost:3001/getSensors')
          setData(response.data)
          console.log(response.data)
        }
        catch(error){
        console.log("Error fetching Data",error)
      }
    }
fetchDatafrombackend()
  },[])


const jspdfGenerator =() =>{
  const  doc = new jsPDF('p','pt')
  doc.text(20,20,"Sensors Data's")
  doc.autoTable({
   startY:30,
   head:[['Sensor 1','Sensor 2', 'Sensor3','Sensor 4']],
   body: data.map((row) => [row.sensor1, row.sensor2, row.sensor3, row.sensor4]),
  });
  doc.save("generate.pdf")
   }; 
const ExcelGenerator =()=>{
  const ws= utils.json_to_sheet(data)
  const wb =utils.book_new()
  utils.book_append_sheet(wb,ws,'sensors Data')
  writeFile(wb,'generate.xlsx')
}   
  return(
      <div className='document'>
      
        <div className="datacontain">
          <button className='tables' onClick={jspdfGenerator}>
              Download as PDF< BsFiletypePdf className='icons'/>
          </button>
        </div>
        
        <div className="datacontainer2">
            <button  className ='tables1' onClick={ExcelGenerator}>
              Download as Excel< FaFileExcel  className='icons1'/>         
            </button>
        </div>
      </div>
        
      
    );
 }
export default Document;  

/*function Document() {
  
  return (
    <div className='document'>
      <h2>Sensors Data </h2>
        
        <button className='tables'>
          Download PDF<FaFileDownload className='icon'/>
        
        </button>
        
    </div>
  )
}

export default Document*/