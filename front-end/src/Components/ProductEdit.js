import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ProductEdit() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    rating: "",
    featured: false,
  });

  const updateProduct = (updatedProduct) => {
    axios.put(`${API}/products/${id}`, updatedProduct)
      .then((res) => navigate(`/products`))
      .catch((err) => console.log(err));
  }

  const handleTextChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setProduct({ ...product, is_favorite: !product.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/products/${id}`)
      .then((res) => setProduct(res.data.payload))
      .catch((err) => navigate(`/not-found`));
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(product, id);
  };

  return (
    <div className="Edit">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                value={product.name}
                type="text"
                required
                onChange={handleTextChange}
                placeholder="Name of Weapon"
            />
            <label htmlFor="image">Image:</label>
            <input
                id="image"
                type="text"
                value={product.image}
                onChange={handleTextChange}
            />
            <label htmlFor="description">Description:</label>
            <input
                id="description"
                type="text"
                name="description"
                value={product.description}
                placeholder="Weapons Lore"
                onChange={handleTextChange}
            />
            <label htmlFor="price">Price:</label>
            <input
                id="price"
                type="number"
                name="price"
                value={product.price}
                placeholder="price amount"
                onChange={handleTextChange}
            />
            <label htmlFor="rating">Rating:</label>
            <input
                id="rating"
                type="number"
                name="rating"
                value={product.rating}
                placeholder="Power Rating"
                onChange={handleTextChange}
            />
            <label htmlFor="featured">Featured:</label>
            <input
                id="featured"
                type="checkbox"
                value={product.rating}
                placeholder="Power Rating"
                onChange={handleCheckboxChange}
                checked={product.featured}
            />

            <br />

            <input type="submit" />
            <Link to={`/products/${id}`}>
                <button>Cancel</button>
            </Link>
        </form>
    </div>
  )
}

export default ProductEdit;