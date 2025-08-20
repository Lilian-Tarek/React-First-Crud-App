import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewCat()
{const[catdetails,setCatdetails]=useState([]);
    const params = useParams();
useEffect(()=>{
  fetch(`http://localhost:9000/categories/${params.CatId}`)
    .then((res) => res.json())
    .then((data) => setCatdetails(data));
},[])
    return (
        <>
            <h1>Category {params.CatId} </h1>
<h2>{catdetails.name}</h2>
        </>
    )
}
export default ViewCat;