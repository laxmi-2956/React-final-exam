import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link, useParams } from 'react-router';
import axios from 'axios';


  const Product = () => {
    const [data,setdata]= useState([ ]);
    const [page,setpage]= useState(1)
    const [search , setsearch] = useState ("")
    const [order , setorder] = useState ("")
    const [category , setcategory] = useState(null)


   const fetchdata = () =>{
    axios.get("http://localhost:3000/Products",
      {
              params :  
              {

                _page  :page,
                _limit : 7,
                category : category ,
                sort : 'price',
                _order : order || null     
              } 
      })
     .then((res)=>setdata(res.data))
     .catch ((err) => console.log(err));
   } ; 
    
  useEffect(()=>
  {
    fetchdata();

  }
  ,[data , category , search , order])
  const Handelete=(id) =>
  {

  fetch(`http://localhost:3000/products/${id}`,{
    method:"Delete"
    })
  .then(res=>res.json())
  .then(data=>alert('delete successs..'))
  }
    
      return (
      <div>
 <select  onChange={(e)=>setcategory(e.target.value)}>
      <option>jewelery</option>
      <option>electronics</option>
      <option>women's clothing</option>
      <option>men's clothing</option>
      <option></option>
     
    </select>

    <input  type="text" onChange={(e) => setsearch(e.target.value)}/>
    
    <div>
      <button onClick={() => setorder("desc")}>High to Low</button>
      <button onClick={()=> setorder ("asc")}>Low to High</button>
    </div>


      <h1>
          product
      </h1>
      <div className='product'>
       {data.map((el)=>(
        
        
       
    <div key={el.id}>
    <Link to={`/description/${el.id}`}>

    <div>{el.id}</div>

   

    <img src={el.image} alt="" style={{height:200,width:200}}/>
    <h2>{el.title}</h2>
    <h4>{el.description}</h4>
    <h5>{el.category}</h5>
    </Link>
    <h2>{el.price}</h2>
    <button  onClick={()=>Handelete(el.id)}>delete</button><br />
    <Link to={`/edit/${el.id}`}>
    <button>update</button></Link>
    </div>  
  ) 
  
  )}</div>
  <br /><br/><br />
  <button onClick={()=>setpage(page+1)}>next</button>
  {page}
  <button onClick={()=>setpage(page-1)}>prev</button>
        
      </div>
    )
  }

export default Product