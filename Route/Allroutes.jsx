import React from 'react'
import { Route, Routes } from 'react-router'
import Product from '../src/Compoents/Productdetails'
import Allproduct from '../src/Compoents/Productlistings'
import Home from '../src/Compoents/Home'
import Login from '../src/Compoents/Login'
import About from '../src/Compoents/About'

import Description from '../src/Compoents/Description'
import Cart from '../src/Compoents/Cart'

const Allroutes = () => {
  return (
    <div>
    <Routes>

     <Route path='/description/:id' element={<Description/>}></Route>
    <Route path='Home/' element ={

       <Home/>
  
    
    }>Home</Route>
     <Route path='About/' element ={

<About/>


}>Home</Route>
     
    <Route path='Productdetails/' element ={


  
      <Product/>
    }>Product</Route>
    <Route path='Productlistings/' element ={
      
      
        <Allproduct/>
     
    }>Allproduct</Route>
    <Route path='Login/' element ={
       
        <Login/>
       
    }>Login</Route>

<Route path='Cart/' element ={
       
       <Cart/>
      
   }>Cart</Route>
      
    </Routes>
      
    </div>
  )
}

export default Allroutes