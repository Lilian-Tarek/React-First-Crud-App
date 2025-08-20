import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
 ;
function EditCat()
{
    const [name, setName] = useState("");
    const params = useParams();
       let navigate = useNavigate();
    const formsubmit = (e) => {
        e.preventDefault();
           fetch(`http://localhost:9000/categories/${params.CatId}`, {
             method: "PUT",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({
               name
             })
           })
             .then((res) => res.json())
             .then((data) => navigate("/categories"));
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
                setName(e.target.value);
              }}
            />
          </div>
 

          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </form>
      </>
    );
}
export default EditCat;