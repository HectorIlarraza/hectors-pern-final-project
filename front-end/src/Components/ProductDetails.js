import axios from "axios";
import { useState, useEffect} from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ProductDetails() {
    const [product, setProduct ] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/products/${id}`)
        .then((res)=>{
            setProduct(res.data.payload)
        }).catch((err)=>{
            console.log(err)
        })
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${API}/products/${id}`)
            .then((res) => navigate(`/products`))
            .catch((err) => console.log(err));
    };

  return (
    <article>
        <div className="product">
            <h5>{product.name}</h5>
            <img src={product.image} alt={product.name} />
            <h6>Price: {product.price}</h6>
            <h6>Rating: {product.rating}</h6>
            <h6>Description: {product.description}</h6>
        </div>
        <div className="showNavigation">
            <div>
                <Link to="/products">
                    <button>Back</button>
                </Link>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div>
                <Link to={`/products/${id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    </article>
  )
}

export default ProductDetails