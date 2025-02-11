import React from 'react'
import Side_header from './components/Side&header'

const App = () => {
  return (
    <>
  <Side_header/>

  {/* main */}

  
  <main class=" w-full  mt-30 md:w-[82%] md:ml-[18%]  md:mt-20">
        

        {/* <!-- content --> */}

        <h1 class="ml-10 text-white  mt-10 capitalize font-bold text-2xl mb-4">admin dashboard</h1>

        <div class="topboxes grid grid-cols-2 md:grid-cols-4  gap-4 py-2 px-10">
            
            <div class="box bg-[#45dcbe] flex flex-col md:flex-row  justify-between py-6  md:px-4 rounded-md text-white items-center">
                <i class="fa fa-user-graduate bg-[#32af97]  text-3xl rounded-full px-5 py-4"></i>
                <div class="text">
                    <h2 class="text-xl mb-2">Total Students</h2>
                    <h3 class="text-xl mb-2">450</h3>
                    <p class="text-xl">45% Increase ..</p>
                    
                </div>
            </div>
            <div class="box bg-[#ffc166] flex  flex-col md:flex-row justify-between py-6 px-4 rounded-md text-white items-center">
                <i class="fa fa-user-graduate bg-[#cc974c]  text-3xl rounded-full px-5 py-4"></i>
                <div class="text">
                    <h2 class="text-xl mb-2">New Students</h2>
                    <h3 class="text-xl mb-2">155</h3>
                    <p class="text-xl">40% Increase ..</p>
                    
                </div>
            </div>
            <div class="box bg-[#57a5ff] flex  flex-col md:flex-row justify-between py-6 px-4 rounded-md text-white items-center">
                <i class="fa fa-book bg-[#4283cc]  text-3xl rounded-full px-5 py-4"></i>
                <div class="text">
                    <h2 class="text-xl mb-2">Total Course</h2>
                    <h3 class="text-xl mb-2">150</h3>
                    <p class="text-xl">45% Increase ..</p>

                </div>
            </div>
            <div class="box bg-[#ff6680] flex  flex-col md:flex-row justify-between py-6 px-4 rounded-md text-white items-center">
                <i class="fa fa-dollar-sign bg-[#cc5266]  text-3xl rounded-full px-5 py-4"></i>
                <div class="text">
                    <h2 class="text-xl mb-2">Fees Collection</h2>
                    <h3 class="text-xl mb-2">13,921$</h3>
                    <p class="text-xl">50% Increase</p>
                    
                </div>
            </div>


        </div>


        {/* <!-- charts --> */}

         <div class="charts mt-20 mx-6 grid grid-cols-2 space-x-3">
            {/* <img src="../assets/rightsideimage.png" alt=""/>
            <img src="images/rightsideimage.png" alt=""/> */}

         </div>


         {/* <!-- tables --> */}

         <div class="tables w-f  mx-2 mt-10 mb-10 grid gap-4  md:mx-6   md:grid-cols-3 ">
            {/* <img src="images/ch3.png" alt="" class="h-45"> */}
         
            <div class="table-box bg-[#272738] py-8 pl-5 col-span-2 ">
                <table class="border-collapse border border-gray-700 w-[90%]  capitalize ">
                   <h1 class="mb-5 text-white text-2xl font-medium capitalize">teachers list</h1>
                   
                    <thead>
                      <tr class="text-white text-xl ">
                        <th class="border border-gray-700  p-3 ">name</th>
                        <th class="border border-gray-700  p-3 ">email</th>
                        <th class="border border-gray-700  p-3 ">course</th>
                        <th class="border border-gray-700   p-3">salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">eng ali farah</td>
                        <td class="border border-gray-700  p-3">eng ali@gmail.com</td>
                        <td class="border border-gray-700  p-3">react master</td>
                        <td class="border border-gray-700  p-3">3000$</td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700  p-3">eng liban ahmed</td>
                        <td class="border border-gray-700  p-3">eng liban@gmail.com</td>
                        <td class="border border-gray-700  p-3">fullstack</td>
                        <td class="border border-gray-700  p-3">3000$</td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">eng husein omar</td>
                        <td class="border border-gray-700  p-3">husein@gmail.com</td>
                        <td class="border border-gray-700  p-3">fullstack</td>
                        <td class="border border-gray-700  p-3">3050$</td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">eng aisha omar</td>
                        <td class="border border-gray-700  p-3">aisha@gmail.com</td>
                        <td class="border border-gray-700  p-3">java </td>
                        <td class="border border-gray-700  p-3">1000$</td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">eng ali farah</td>
                        <td class="border border-gray-700  p-3">eng ali@gmail.com</td>
                        <td class="border border-gray-700  p-3">react master</td>
                        <td class="border border-gray-700  p-3">3000$</td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700  p-3">eng liban ahmed</td>
                        <td class="border border-gray-700  p-3">eng liban@gmail.com</td>
                        <td class="border border-gray-700  p-3">fullstack</td>
                        <td class="border border-gray-700  p-3">3000$</td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">eng husein omar</td>
                        <td class="border border-gray-700  p-3">husein@gmail.com</td>
                        <td class="border border-gray-700  p-3">fullstack</td>
                        <td class="border border-gray-700  p-3">3050$</td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="border border-gray-700 p-3">eng aisha omar</td>
                        <td class="border border-gray-700  p-3">aisha@gmail.com</td>
                        <td class="border border-gray-700  p-3">java </td>
                        <td class="border border-gray-700  p-3">1000$</td>
                        
                      
                    </tr>
                     


                    </tbody>
                  </table>
            </div>
        </div>

         {/* <!-- student tables --> */}

         <div class="tables w-[100%]  md:w-[85%] mx-3  mt-10 mb-10 md:mx-6  ">
         
            <div class=" w-[100%] table-box bg-[#272738] py-8 px-5 col-span-2 ">
              <h1 className='text-white mb-3 text-2xl capitalize  '>student table</h1>
                <table class=" w-[100%]  capitalize ">
                  
                    <thead class="bg-gray-900 w-[100%]">
                      <tr class="text-white text-sm  md:text-md ">
                        <th class=" p-3 ">name</th>
                        <th class=" p-3 ">id</th>
                        <th class=" p-3 ">date</th>
                        <th class=" p-3">parentName</th>
                        <th class=" p-3">city</th>
                        <th class=" p-3">contact</th>
                        <th class=" p-3">course</th>
                        <th class=" p-3">action</th>
                      </tr>
                    </thead>
                    <tbody class="">
                      <tr class="text-gray-400 hover:bg-gray-800  text-sm text-md ">
                        <td class="  p-3">asli hassan omar</td>
                        <td class="  p-3">133454</td>
                        <td class="  p-3">2025-01-28</td>
                        <td class="  p-3">hassan ali</td>
                        <td class="  p-3">baidhawo</td>
                        <td class="  p-3">252612310909</td>
                        <td class="  p-3">fullstack</td>
                        <td class="flex items-center py-3 space-x-3 pl-5">
                             <i class="fa fa-trash text-red-500"></i>
                             <i class="fa fa-pen text-blue-500"></i>
                        </td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="  p-3"> hassan adan</td>
                        <td class="  p-3">133454</td>
                        <td class="  p-3">2025-01-28</td>
                        <td class="  p-3">omar mohamed</td>
                        <td class="  p-3">mogadisho</td>
                        <td class="  p-3">252612310909</td>
                        <td class="  p-3">java</td>
                        <td class="flex items-center py-3 space-x-3 pl-5">
                             <i class="fa fa-trash text-red-500"></i>
                             <i class="fa fa-pen text-blue-500"></i>
                        </td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="  p-3"> salma abdi</td>
                        <td class="  p-3">133454</td>
                        <td class="  p-3">2025-01-28</td>
                        <td class="  p-3">abdi ali </td>
                        <td class="  p-3">kismayo</td>
                        <td class="  p-3">252612310909</td>
                        <td class="  p-3">react</td>
                        <td class="flex items-center py-3 space-x-3 pl-5">
                             <i class="fa fa-trash text-red-500"></i>
                             <i class="fa fa-pen text-blue-500"></i>
                        </td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="  p-3">asli hassan omar</td>
                        <td class="  p-3">133454</td>
                        <td class="  p-3">2025-01-28</td>
                        <td class="  p-3">hassan ali</td>
                        <td class="  p-3">boorame</td>
                        <td class="  p-3">252612310909</td>
                        <td class="  p-3">fullstack</td>
                        <td class="flex items-center py-3 space-x-3 pl-5">
                             <i class="fa fa-trash text-red-500"></i>
                             <i class="fa fa-pen text-blue-500"></i>
                        </td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="  p-3"> hassan adan</td>
                        <td class="  p-3">133454</td>
                        <td class="  p-3">2025-01-28</td>
                        <td class="  p-3">omar mohamed</td>
                        <td class="  p-3">mogadisho</td>
                        <td class="  p-3">252612310909</td>
                        <td class="  p-3">java</td>
                        <td class="flex items-center py-3 space-x-3 pl-5">
                             <i class="fa fa-trash text-red-500"></i>
                             <i class="fa fa-pen text-blue-500"></i>
                        </td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="  p-3"> salma abdi</td>
                        <td class="  p-3">133454</td>
                        <td class="  p-3">2025-01-28</td>
                        <td class="  p-3">abdi ali </td>
                        <td class="  p-3">kismayo</td>
                        <td class="  p-3">252612310909</td>
                        <td class="  p-3">react</td>
                        <td class="flex items-center py-3 space-x-3 pl-5">
                             <i class="fa fa-trash text-red-500"></i>
                             <i class="fa fa-pen text-blue-500"></i>
                        </td>
                        
                      
                    </tr>
                      <tr class="text-gray-400 hover:bg-gray-800 ">
                        <td class="  p-3">asli hassan omar</td>
                        <td class="  p-3">133454</td>
                        <td class="  p-3">2025-01-28</td>
                        <td class="  p-3">hassan ali</td>
                        <td class="  p-3">boorame</td>
                        <td class="  p-3">252612310909</td>
                        <td class="  p-3">fullstack</td>
                        <td class="flex items-center py-3 space-x-3 pl-5">
                             <i class="fa fa-trash text-red-500"></i>
                             <i class="fa fa-pen text-blue-500"></i>
                        </td>
                        
                      
                    </tr>
                    
                     
                     


                    </tbody>
                  </table>
            </div>
        </div>


       
                       
                        

    
        <footer class=" bg- text-center text-white bg-gray-900  p-3 mt-10">
         All copyright &copy qoranCodes
        </footer>
    </main>




  
   
    
    
    </>
  )
}

export default App