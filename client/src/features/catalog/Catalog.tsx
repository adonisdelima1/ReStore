import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { Product } from "../../app/models/Product"
import ProductList from "./ProductList"

interface CatalogProps {
    products: Product[]
    addProduct: () => void
}

export default function Catalog({products, addProduct}: CatalogProps) {
    return (
        <>
            <ProductList products={products}></ProductList>
            <Button variant="contained" onClick={addProduct}>Add product</Button>
        </>
    )
}