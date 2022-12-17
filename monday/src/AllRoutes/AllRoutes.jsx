
// import { Link } from '@chakra-ui/react';
import React from 'react';
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Nav from "../Component/Nav"
import Solution from '../Pages/Solution';
import Platform from '../Pages/Platform';
// import Customers from '../Pages/Customers';
import Customer from '../Pages/Customer';
import Resourse from '../Pages/Resourse';
import Pricing from '../Pages/Pricing';
import Payment from '../Pages/Payment';
import Createaccount from '../Pages/Createaccount';
import PrivateRoute from '../Private/PrivateRoute';


const AllRoutes = () => {

    




    return (


        <div>
            <Nav/>

            <Routes>
                <Route path='/' element={<Home/>}></Route>

                <Route path='/solution' element={<Solution/>}></Route>
                <Route path='/platform' element={<Platform/>}></Route>
                <Route path='/customers' element={<Customer/>}></Route>
                <Route path='/Resourse' element={<Resourse/>}></Route>
                <Route path='/pricing' element={ <PrivateRoute><Pricing></Pricing></PrivateRoute>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/createaccount' element={<Createaccount/>}></Route>
                <Route path='/payment' element={<Payment/>}></Route>

            </Routes>
        </div>
    );
}

export default AllRoutes;
