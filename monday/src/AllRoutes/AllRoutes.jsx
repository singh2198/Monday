
// import { Link } from '@chakra-ui/react';
import React from 'react';
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Nav from "../Component/Nav"
import Solution from '../Pages/Solution';
import Platform from '../Pages/Platform';
import Customers from '../Pages/Customers';
import Resourse from '../Pages/Resourse';


const AllRoutes = () => {

    




    return (


        <div>
            <Nav/>

            <Routes>
                <Route path='/' element={<Home/>}></Route>

                <Route path='/solution' element={<Solution/>}></Route>
                <Route path='/platform' element={<Platform/>}></Route>
                <Route path='/customers' element={<Customers/>}></Route>
                <Route path='/Resourse' element={<Resourse/>}></Route>

            </Routes>
        </div>
    );
}

export default AllRoutes;
