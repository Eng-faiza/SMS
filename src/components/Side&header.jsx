import React from 'react'
import   { useState } from "react";
import { Link } from "react-router-dom";


const Side_header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (

    <>
    
    <div className="container w-screen fixed  left-0   top-0   flex justify-between  ">

    {/* <!-- side header --> */}

    <aside className={`bg-[#25245F] w-[50%] md:w-[250px] fixed md:static text-white pl-3 pr-2 pb-3 pt-7 transform ${ isOpen ? "translate-x-0" : "-translate-x-full "
          } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 h-screen md:h-auto`}
       >

        {/* <!-- profile --> */}

        <div class="profile flex border-b-[1px] border-gray-400 pb-3">
            {/* <img src="images/rightsideimage.png" alt="" class="w-[50px] h-[50px] rounded-full mr-3"> */}
            <div class="info ">
                <span class="text-gray-400 font-medium">admin</span>
                <h2 class="font-bold">faiza mahdi</h2>
            </div>
        </div>

        {/* <!-- menus --> */}

        <div class="menus">
            <h1 class="mt-5 text-2xl capitalize mb-6  ">menus</h1>
            <ul class="text-md capitalize pl-3 flex-col space-y-6">
                <li class="mb-6">
                    <Link to="/"><i class="fa fa-home text-[--AccedentColor] mr-4 " ></i><a href="index.html" class=" text-[--AccedentColor] hover:text-[--AccedentColor]">home</a></Link>
                 </li>

                 <li class="mb-6">
                    <Link to="/teachers"><i class="fa fa-user t mr-4" ></i><a href="teachers.html" class="hover:text-[--AccedentColor]">teachers</a></Link>
                 </li>
                 <li class="mb-6">
                    <Link to="/student"><i class="fa fa-user-graduate  mr-4" ></i><a href="student.html"  class="hover:text-[--AccedentColor]">students</a></Link>
                 </li>



               
                
                <li class="mb-6"><i class="fa fa-clipboard  mr-4" ></i><a href="courses.html"  class="hover:text-[--AccedentColor]">courses</a></li>
                <li class="mb-6"><i class="fa fa-dollar-sign  mr-4" ></i><a href="fees.html"  class="hover:text-[--AccedentColor]">fees</a></li>
                <li class="mb-6"><i class="fa fa-calendar-check  mr-4" ></i><a href="#"  class="hover:text-[--AccedentColor]">calender</a></li>
                <li class="mb-6"><i class="fa fa-chart-simple  mr-4" ></i><a href="#"  class="hover:text-[--AccedentColor]">charts</a></li>
                <li class="mb-6"><i class="fa fa-file  mr-4" ></i><a href="#"  class="hover:text-[--AccedentColor]">file  manager</a></li>
                <li class="mb-6"><i class="fa fa-user  mr-4" ></i><a href="#"  class="hover:text-[--AccedentColor]">login</a></li>
                <li class="mb-6"><i class="fa fa-gear  mr-4" ></i><a href="#"  class="hover:text-[--AccedentColor]">settings</a></li>
            </ul>
        </div>


    </aside>

    {/* top header */}

    <header class="  bg-[#25245F] w-full fixed right-0  md:w-[82%] absolute   md:left-[18%] py-7 px-8  flex justify-between items-center">

           {/* Menu Toggle Button */}
           <button
            className="text-white md:hidden "
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa fa-bars text-2xl  ml-95"></i>
          </button>
            <div class="left relative  hidden md:inline">
                <i class="fa fa-search absolute top-1  text-gray-200  text-2xl  left-2 "></i>
                {/* <input type="text"  placeholder="search..." class="py-2 px-10 border-[1px] border-[white] rounded-md outline-none bg-transparent " > */}
            </div>

            <div class="right flex items-center relative  hidden md:inline">
                <i class="fa-solid fa-moon text-[--AccedentColor] mr-4 text-2xl"> <sup class="text-xs text-blue-500 absolute botton-20 left-10">49</sup></i>
                <i class="fa-solid fa-bell text-[--AccedentColor] mr-4 text-2xl"> <sup class="text-xs text-white absolute top-[2px] right-[43%]">2</sup></i>
                <i class="fa-solid fa-envelope text-[--AccedentColor] mr-4 text-2xl"> <sup class="text-xs text-white absolute top-[2px] right-[43%]">2</sup></i>
                {/* <img src="images/rightsideimage.png" alt="" class="w-[40px] h-[40px] rounded-full mr-3"> */}
            </div>


        </header>


      </div>


    </>
    
  )
}

export default Side_header