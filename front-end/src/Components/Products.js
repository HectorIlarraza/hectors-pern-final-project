import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product.js";
import { Grommet, Box, Grid } from "grommet";

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
    <Grommet full className="Products">
      <Box>
        <Grid gap="large" rows="large" columns={{ count: 'fit', size: ['small', 'medium'] }} className="Product">
          {products.map((product) => {
            return (
              <Product product={product} key={product.id}/>
              );
            })}
        </Grid>
      </Box>
    </Grommet>
  )
}

export default Products;