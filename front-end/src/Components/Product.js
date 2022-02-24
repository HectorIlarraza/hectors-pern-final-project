import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Grommet,
  Paragraph,
} from 'grommet';
import { Add, ShareOption } from 'grommet-icons';
import { Theme } from '../styles/BodyTheme.js'

function Product({product}) {
  const [featured, setFeatured] = useState(false);

  const handleCheckboxChange = () => {
    setFeatured({ ...featured, featured: !product.featured });
  };

  let currencyFormat = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(product.price);

  return (
    <Grommet theme={Theme}>
      <Box pad="medium" align="start">
        <Card elevation="large" background="dark-1">
          <CardBody height="small">
            <img
              src={product.image}
              alt={product.name}
            />
          </CardBody>
          <Box pad={{ horizontal: 'small' }} responsive={false}>
            <Heading 
              level="4" 
              margin={{ vertical: 'medium' }} 
              as={Link} 
              to={`/products/${product.id}`} 
              color="brand"
            >
              {product.name}
            </Heading>
            <Paragraph color="#6FFFB0" margin={{ top: 'none' }}>
              Price: {currencyFormat}
            </Paragraph>
            <Paragraph color="#6FFFB0">
              Rating: {product.rating}
            </Paragraph>
          </Box>
          <CardFooter>
            <Box direction="row" align="center" gap="small">
              <Button
                icon={<Add color={featured ? '#6FFFB0' : undefined} />}
                hoverIndicator
                onClick={handleCheckboxChange}
                label="Add to Cart"
                color="brand"
              />
              <Button icon={<ShareOption color="#6FFFB0" />} hoverIndicator />
              <Anchor
                href="https://youtu.be/o-YBDTqX_ZU"
                label="Learn More"
                color="brand"
              />
            </Box>
          </CardFooter>
        </Card>
      </Box>
    </Grommet>
  );
};

export default Product;