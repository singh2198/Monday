
import { Box } from '@chakra-ui/react'
import React from 'react'
import { FcCalendar, ReactIcons} from "react-icons/fc"


export default function Home() {
  return (
    <div>
        <div  style={{position:'relative'}}>
          {/* Background image */}
           <img src='https://images.pexels.com/photos/1764702/pexels-photo-1764702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={'100%'} ></img>
        </div >

        <div>

            <div style={{top:'24%' ,position:'absolute' ,left:'46%'}}>
              {/* Logo img */}
              <img src='https://dapulse-res.cloudinary.com/image/upload/welcome-back/Logo_monday.com.svg' width={'16%'} ></img>
            </div>

            <h1 style={{top:"30%", display:"inline" ,position:"absolute" ,color:"White" ,left:'40%'}}>Welcome Back </h1>
            <h1 style={{top:"40%", display:"inline" ,position:"absolute" ,color:"White" ,left:'42%'}}>Akash Singh  </h1>
            <p style={{top:"64%", display:"inline" ,position:"absolute" ,color:"White" ,left:'42%'}}>Pick Up Where You Left Off </p>

        </div>


        <div style={{top:'90%',display:'inline-flex' ,position:'absolute' ,left:'32%',justifyContent:'space-between',border:'1px solid red',width:'40%'}}>
          <div>
            <p style={{color:'white'}}>Akash | Email Addresh</p>
          </div>
          <button style={{margin:'10px'}}>Logout</button>
        </div>


        <div style={{display:'flex' ,justifyContent:'space-evenly', top :'130%' ,left:'20%',marginTop:'50px'}}>
          <div style={{width:'200px', border:'', boxShadow: '0px 20px 30px -10px',borderRadius:'3px'}}>
            <div style={{marginLeft:'20px'}}>

            <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DanielleHassan/welcome-back/category-icon3.png" alt="calender"  style={{width:'60px'}}/>
            <p>Contact Sales</p>
            <p>Learn more</p>
            </div>

          </div>

          <Box style={{width:'200px' ,boxShadow: '0px 20px 30px -10px'}} >
          <div style={{marginLeft:'20px'}}>

            <img  src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DanielleHassan/dev-minisite/Jira/boards%20Da/1.png'  alt='chatbox' width={'60px'} margin={'20px'}></img>
            <p>24/7 Support</p>
            <p>Learn more</p>
          </div>
          </Box>
          

          <div style={{width:'200px',border:'' ,boxShadow: '0px 20px 30px -10px'}}>
          <div style={{marginLeft:'20px'}}>

            <img  src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DanielleHassan/welcome-back/pricing.png' alt='copy' width={'60px'}></img>
            <p margin='20px'>Pricing and Plans</p>
            <p>Learn more</p>
          </div>
          </div>
        </div>

    </div>
  )
}
