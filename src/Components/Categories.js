import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Categories()
{
    const [cat, setCat] = useState([]);
    const getallcat=()=>{        fetch("http://localhost:9000/categories").then((res)=>res.json()).then((data)=>setCat(data));
    }
    const delcat = (chosenid) => {
        fetch(`http://localhost:9000/categories/${chosenid}`,{method:"DELETE"}).then((res)=>res.json()).then((data)=>getallcat());

    }
    useEffect(() => {
        getallcat();
    },[])

    return (
      <>
        <h1>All Categories</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {cat.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => {
                        delcat(el.id);
                      }}
                    >
                      Delete
                    </button>
                    <Link
                      className="btn btn-info me-2"
                      to={`/categories/${el.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-primary"
                      to={`/categories/edit/${el.id}`}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );


}
export default Categories;