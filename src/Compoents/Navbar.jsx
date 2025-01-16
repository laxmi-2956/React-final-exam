import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div style={{display : 'flex' , justifyContent : 'space-around' , fontSize : '25px'}}>
<Link  style={{textDecoration : 'none'}} to ='/'>Home</Link>
<Link  style={{textDecoration : 'none'}} to ='/about'>About</Link>
<Link  style={{textDecoration : 'none'}} to ='/Productdetails'>Productdetails</Link>

<Link  style={{textDecoration : 'none'}} to ='/Productlistings'>Productlistings</Link>
<Link  style={{textDecoration : 'none'}} to ='/Login'>Login</Link>
<Link  style={{textDecoration : 'none'}} to ='/Cart'>Cart</Link>
</div>
  )
}

export default Navbar
