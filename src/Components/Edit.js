import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Edit()
{            const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    let navigate = useNavigate();
    const params = useParams();
    const formsubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9000/products/${params.productId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            price
          })
        })
          .then((res) => res.json())
          .then((data) => navigate("/products"));
}
    return (
        <>
            <h1>Edit Products</h1>
        <form
          className="w-75 p-2"
          onSubmit={(e) => {
            formsubmit(e);
          }}
        >
       
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </form>
      
        </>
    )
}
export default Edit;