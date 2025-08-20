import React from "react";
import { Link } from "react-router-dom";
function Sidebar()
{
    return (
      <>
        <ul className="list-unstyled p-3 text-center">
          <li className="my-4">
            <Link to="/products" className="text-decoration-none">
              Get all Products
            </Link>
          </li>
          <li className="my-4">
            <Link to="/categories" className="text-decoration-none">
              Get all Categories
            </Link>
          </li>
        </ul>
      </>
    );
}
export default Sidebar;