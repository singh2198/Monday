import React from 'react'
import {Link } from "react-router-dom"
import { ReactNode } from 'react';
// import { Img } from '@chakra-ui/react';
import { Image ,Box} from '@chakra-ui/react'

export default function Nav() {
  return (
    <div>
      <Box display={['none','flex']} justifyContent={'space-between'} border={'1px solid red'} height={'40px'} position={'relative'} backgroundColor={'white'} width={'100%'} zIndex={3}>
            <Box boxSize='' border='1px solid red' display={'flex'} justifyContent={'space-between'} width={'400px'}>
                <Image src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png' alt='monday' width={'90px'} />

                
                <Link to='/solution'>Solution</Link>
                <Link to="/platform">Platform</Link>
                <Link to="/customers">Customers</Link>
                <Link to="/Resourse">Resourse</Link>
                {/* <Link to="/">Home</Link> */}
            </Box>

            <Box border='1px solid red' display={'flex'} justifyContent={'space-between'} width={'200px'}>
              <Link to="/pricing">Price</Link>
              <Link to="/">Login</Link>
              <Link to="/login">Dark Mode</Link>

            </Box>
            
            
            

      </Box>

    </div>
  )
}
