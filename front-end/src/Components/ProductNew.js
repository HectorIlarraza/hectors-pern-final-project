import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Grommet,
  TextArea,
  TextInput,
} from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import { customTheme } from "../styles/NewFormTheme.js";

const API = process.env.REACT_APP_API_URL;

function ProductNew() {
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    image: "",
    description: "",
    price: 0,
    rating: 0,
    featured: false,
  });

  const addProduct = (newProduct) => {
    axios.post(`${API}/products`, newProduct)
      .then((res) => navigate(`/products`))
      .catch((err) => console.log(err));
  }

  const handleTextChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setProduct({ ...product, featured: !product.featured });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
  };

  const handleReset = (e) => {
    setProduct({e})
  };

  return (
    <Grommet full theme={deepMerge(grommet, customTheme)}>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            onReset={handleReset}
            onSubmit={handleSubmit}
          >
          <FormField label="Name" name="name" required>
            <TextInput 
              name="name" 
              placeholder="Name of Weapon"
              onChange={handleTextChange}
              required
            />
          </FormField>
          <FormField label="Image" name="image" >
            <TextInput name="image" value={product.image} onChange={handleTextChange} />
          </FormField>
          <FormField label="Description" name="description" required>
            <TextArea name="description" placeholder="Weapon Lore" onChange={handleTextChange} />
          </FormField>
          <FormField label="Price" name="price" required>
            <TextInput
              type="number" 
              name="price" 
              onChange={handleTextChange}
            />
          </FormField>
          <FormField label="Rating" name="rating" required>
            <TextInput
              type="number" 
              name="rating" 
              onChange={handleTextChange}
              min={0}
              max={5}
              required
            />
          </FormField>
          <FormField 
            label="Featured"
            name="featured" 
            component={CheckBox} 
            onChange={handleCheckboxChange}
          >
          </FormField>
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Cancel" as={Link} to={`/products`} />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Submit" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  </Grommet>
  )
}

export default ProductNew;