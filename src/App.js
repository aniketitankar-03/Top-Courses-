import React, { useEffect, useState } from "react";
import {apiUrl , filterData} from "./Data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";

function App() {

  const [courses , setCourses] = useState([]);
  const [loading , setloading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title);

  const fetchData = async() => {
    setloading(true);
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();

      // save data into a variable
      setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong")
    }
    setloading(false);
  }

  useEffect( () => {
    fetchData();
  } , []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div >
        <div>
          <Filter filterData = {filterData} category={category} setCategory={setCategory}/>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"> 
          {
            loading ? (<Spinner />) : (<Cards courses = {courses} category={category} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
