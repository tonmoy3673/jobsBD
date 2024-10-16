import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {
    const [categories,setCategories]=useState();
    useEffect(()=>{
        fetch('/data/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
console.log(categories)
    return (
        <div className="py-8 lg:py-12 text-center">
            <h2 className="text-xl lg:text-3xl font-semibold text-center py-3">Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className=" grid grid-cols-2 lg:grid-cols-4 py-6 lg:py-12 gap-10 ">
                {
                    categories && categories.length>0?(
                        categories.map((category)=><Category category={category} key={category.id}></Category>)
                    ): 
                    (
                        <p>No Categories Available </p>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;