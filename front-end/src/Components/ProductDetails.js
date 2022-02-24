import axios from "axios";
import { useState, useEffect} from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { Box, Card, CardBody, CardHeader, Button } from 'grommet';

const API = process.env.REACT_APP_API_URL;

function ProductDetails({ addToCart }) {
    const [product, setProduct ] = useState([]);
    // const [amount, setAmount] = useState(1);
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

    // const handleAmount = (type) => {
    //     if(type === "dec"){
    //         amount > 1 && setAmount(amount - 1);
    //     }else if(type === "inc"){
    //         setAmount(amount + 1);
    //     }
    // };

    let currencyFormat = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      }).format(product.price);

  return (
    <Box pad="large" gap="medium" width="large">
        <Card className="product" pad="small" background="dark-1" >
            <CardHeader>{product.name}</CardHeader>
            <img src={product.image} alt={product.name} />
            <CardHeader>Price: {currencyFormat}</CardHeader>
            <CardHeader>Rating: {product.rating}</CardHeader>
            <CardBody>Description: {product.description}</CardBody>
        </Card>
        <Box className="showNavigation" direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Back" primary as={Link} to={"/products"} />
            <Button onClick={handleDelete} label="Delete" />
            <Button label="Edit" primary as={Link} to={`/products/${id}/edit`} />
        </Box>
    </Box>
  )
}

export default ProductDetails;