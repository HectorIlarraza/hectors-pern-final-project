import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product.js";

const API = process.env.REACT_APP_API_URL;

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${API}/products`)
          .then((res) => {
            setProducts(res.data.payload);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);

  return (
    <div className="Products">
        <article>
        {products.map((product) => {
            return (
            <div className="Product" key={product.id}>
                <Link to={`/products/${product.id}`}>
                    <h4>{product.name}</h4>
                    <Product product={product} />
                </Link>
            </div>
            );
        })}
        </article>
    </div>
  )
}

export default Products;