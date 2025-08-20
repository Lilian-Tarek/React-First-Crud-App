import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Details()
{
    const [details, setDetails] = useState({});
    const params = useParams();
    //    console.log(params.productId);
    useEffect(() => {
        fetch(`http://localhost:9000/products/${params.productId}`).then((res)=>res.json()).then((data)=>{setDetails(data)})

    }, []);
    return (
        <>
            <h1>Product Details for product { params.productId}</h1>
            <h2>{details.title}</h2>
            <img src={details.image}/>
        </>
    )
}
export default Details;