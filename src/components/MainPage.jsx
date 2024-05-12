import React from 'react'
import axios from 'axios';
import {useState} from 'react'

const MainPage = () => {
    const [word,setWord]=useState("");
    console.log(word);

    const [list,setList]=useState([]);
    console.log(list);




    const HandleSubmit= async(e)=>{
        e.preventDefault();

        const options = {
            method: 'GET',
            url: 'https://urban-dictionary7.p.rapidapi.com/v0/define',
            params: {term: word},
            headers: {
              'X-RapidAPI-Key': '725fb5b942msh802001ec5ca8863p134943jsnec754daad71f',
              'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
            
              setList(response.data);
          } catch (error) {
              console.error(error);
          }
  
          
          
    

    }



  return (
    <div>

<form class="max-w-md mx-auto" onSubmit={HandleSubmit}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." value={word} onChange={(e)=>setWord(e.target.value)} required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>





<div className="w-full h-full bg-red-600">
    
    {  list.length !== 0 ? list.map((item)=>(
        <ul>
            <li>{item.author}</li>
        </ul>
    )) : <h1>Bad network</h1>}




</div>



      
    </div>
  )
}

export default MainPage
