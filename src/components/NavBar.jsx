import React, { useState } from 'react'
import{FaBars,FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

const NavBar = () => {
    const [nav,setNav]=useState(false);

const links=[
    {
    id:1,
    link:'home'
},

{
    id:2,
    link:'about'
},

{
    id:3,
    link:'Technologies'
},

{
    id:4,
    link:'Project'
},

{
    id:5,
    link:'contact'
},

]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
<div>
 <h1 className ="text-5xl font-signature ml-2">  Akash Anpat </h1>


</div>

{/* same meaning with simple array  */}
{/* <ul className="flex">

    {links.map(link=>(
        <li  key={link.id}className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150">{link.link}</li>

   ) )}
    
    


</ul> */}
{/* array using de structuring */}
<ul className="hidden md:flex">    
{/* tailwind is for mobile first it for medium then it not shows menu if we minimize screen it disapperar*/}

    {links.map(({id,link})=>(
        <li  key={id}className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150">
            <Link to={link} smooth duration={400}>

            {link}
            </Link>
            
           </li>

   ) )}
    
    

</ul>
<div onClick={()=>setNav(!nav)} 
className='cursor-pointer pr-4 z-10 text-grey-500 md:hidden'>
    {nav ?<FaTimes size={30}/>:<FaBars size={30}/>}
    
</div>

{nav &&(
<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b
from-black to-gray-800 text-gray-500'>

{links.map(({id,link})=>(
        <li  key={id}className="px-4 cursor-pointer capitalize py-6 text-4xl">
            
            <Link onClick={()=>setNav(!nav)} to={link} smooth duration={400}>

{link}
</Link>
            
            </li>

   ) )}
    
    

    
</ul>)}


    </div>
  )
}

export default NavBar;