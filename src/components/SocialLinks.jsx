import React from "react"
import { FaGem, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    return (
        <div className="   hidden lg:flex  top-[36%]  left-0 fixed  rounded-md  
        
         ">

            <ul>
                <li className="flex justify-between items-center  w-25 rounded-md  h-14 px-10 ml-[-100px] hover:ml-[-10px] 
                hover:rounded-md duration-300 bg-gray-500">
                    {/* word linkden upper code */}

                    <a href='https://twitter.com/' className="flex justify between items-center w-full  hover:rounded-md  text-white  ">
                    <>
          LinkedIn </><FaLinkedin size={50} />
        
                    </a>
                    </li>
<li>
                    <a href='' className=" hidden lg:flex  top-[43%]  left-0 fixed  rounded-md flex justify-between items-center  w-15  h-14 px-12 ml-[-100px] hover:ml-[-10px] 
                hover:rounded-md duration-300 bg-gray-500      text-white">
                    <>
          github </><FaGithub size={50} />
        
                    </a>
</li>
<li>
                    <a href=''className=" hidden lg:flex  top-[50.5%]  left-0 fixed  rounded-md flex justify-between items-center  w-17 h-14 px-12 ml-[-80px] hover:ml-[-10px] 
                hover:rounded-md duration-300 bg-gray-500  text-white">
                    <>
          Mail </><HiOutlineMail size={50} />
        
                    </a>

                    <a href='/resume.pdf'  className="   flex  top-[57.5%]  left-0 fixed  rounded-md flex justify-between items-center  w-17 h-14 px-12 ml-[-109px] hover:ml-[-10px] 
                hover:rounded-md duration-300 bg-gray-500  text-white ">
                    <>
          Resume </><BsFillPersonLinesFill size={50}  />
        
                    </a>


                </li>

                
            </ul>

        </div>











    )
}

export default SocialLinks