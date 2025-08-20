import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add()
{
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
  const [id, setID] = useState(0);
  let navigate = useNavigate();
    const formsubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:9000/products", {
          method: "POST",
          body: JSON.stringify({
            title,
              price,
            id
          })
        })
          .then((res) => res.json())
          .then((data) => navigate('/products'));
}
    return (
      <>
        <h1 className="p-2">Add Product</h1>
        <form
          className="w-75 p-2"
          onSubmit={(e) => {
            formsubmit(e);
          }}
        >
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              ID
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              onChange={(e) => {
                setID(e.target.value);
              }}
            />
          </div>
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
            Add
          </button>
        </form>
      </>
    );
}
export default Add;