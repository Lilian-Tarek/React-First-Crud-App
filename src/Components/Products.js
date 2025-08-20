import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function Products()
{
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getfn();
  }, []);
  const getfn = () => {
     fetch("http://localhost:9000/products")
       .then((res) => res.json())
       .then((data) => setProducts(data));
  }
  const deletefn = (chosen) => {
    Swal.fire({
      title: `You are going to delete ${chosen.title}`,
      showCancelButton:true
}).then((data)=>{if(data.isConfirmed){    fetch(`http://localhost:9000/products/${chosen.id}`, { method: "DELETE" })
  .then((res) => res.json())
  .then((data) => getfn());
}})

}

    return (
      <>
        <h1>Products</h1>
        <Link className="btn btn-success mt-3" to="/products/add">
          Add Product
        </Link>
        <div className="overflow-x-auto w-100">
          <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Opearations</th>
              </tr>
            </thead>
            <tbody>
              {products.map((el) => {
                return (
                  <tr key={el.id}>
                    <th scope="row">{el.id}</th>
                    <td className="table-title">{el.title}</td>
                    <td className="table-desc">{el.description}</td>
                    <td>{el.price}</td>
                    <td>
                      <button className="btn btn-danger me-2" onClick={()=>{deletefn(el)}}>Delete</button>
                      <Link to={`/products/${el.id}`} className="btn btn-info me-2">
                        View
                      </Link>
                      <Link className="btn btn-primary" to={`/products/edit/${el.id}`}>Edit</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
}
export default Products;