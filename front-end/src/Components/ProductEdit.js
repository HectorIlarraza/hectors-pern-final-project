import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  RangeInput,
  TextArea,
  CheckBox,
  TextInput,
} from 'grommet';
import { grommet } from 'grommet/themes';

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
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setProduct({ ...product, featured: !product.featured });
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

  const handleReset = (e) => {
    setProduct({e})
  };

  return (
    <Grommet full theme={grommet} className="Edit">
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            onReset={handleReset} 
            onSubmit={handleSubmit}
          >
            <FormField label="Name" name="name" required>
              <TextInput 
                name="name" 
                value={product.name}
                onChange={handleTextChange}
              />
            </FormField>
            <FormField label="Image" name="image">
              <TextInput 
                name="image" 
                value={product.image}
                onChange={handleTextChange}
              />
            </FormField>
            <FormField label="Description" name="description" required>
              <TextArea 
                name="description" 
                value={product.description}
                onChange={handleTextChange}
              />
            </FormField>
            <FormField 
              label="Rating" 
              name="rating" 
              value={product.rating}
              component={RangeInput}
              pad
              min={0}
              max={5}
              required
            >
            </FormField>
            <FormField 
              label="Featured"
              name="featured"
              value={product.featured} 
              component={CheckBox} 
              onChange={handleCheckboxChange}
              required
            >
            </FormField>
            <Box direction="row" justify="between" margin={{ top: 'medium'}} >
              <Button label="Cancel" as={Link} to={`/products/${id}`}/>
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Update" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  )
}

export default ProductEdit;