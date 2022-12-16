import React from 'react'
import {Link } from "react-router-dom"
import { ReactNode } from 'react';
// import { Img } from '@chakra-ui/react';
import { Image ,Box} from '@chakra-ui/react'
import Login from '../Pages/Login';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate=useNavigate()
  return (
    <div>
      <Box display={['none','flex']} justifyContent={'space-between'} border={''} height={'46px'} position={'relative'} backgroundColor={'white'} width={'100%'} zIndex={3}>
            <Box boxSize='' border='' display={'flex'} justifyContent={'space-between'} width={'400px'}>
                <Image src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png' alt='monday' width={'90px'}  cursor={'pointer'} onClick={()=> navigate('/')}/>

                
                <Link to='/solution' style={{textDecoration:'none' ,padding:'5px' ,fontSize:'18px'}}>Solution</Link>
                <Link to="/platform" style={{textDecoration:'none' ,padding:'5px' ,fontSize:'18px'}}>Platform</Link>
                <Link to="/customers" style={{textDecoration:'none' ,padding:'5px' ,fontSize:'18px'}}>Customers</Link>
                <Link to="/Resourse" style={{textDecoration:'none' ,padding:'5px' ,fontSize:'18px'}}>Resourse</Link>
                {/* <Link to="/">Home</Link> */}
            </Box>

            <Box border='' display={'flex'} justifyContent={'space-between'} width={'200px'}>
              <Link to="/pricing" style={{textDecoration:'none' ,padding:'5px' ,fontSize:'18px'}}>Price</Link>
              <Link to="/login" style={{textDecoration:'none' ,padding:'5px' ,fontSize:'18px'}}>Login</Link>
              
              <Link to="/login" style={{textDecoration:'none' ,padding:'5px' ,fontSize:'18px'}}>Dark Mode</Link>

            </Box>
            
            
            

      </Box>

    </div>
  )
}
