const Sidebar = ({ product }) => {
    if(product.featured){
        return <img src={product.image} alt={product.name} />
    }
}

export default Sidebar;