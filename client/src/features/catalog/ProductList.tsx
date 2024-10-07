import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/Product";

interface Props {
    products: Product[]   
}

export default function ProductList({products}: Props) {
    return(
        <List>
            {products.map((product: any) => (
                <ListItem key={product.id}>
                    <ListItemAvatar>
                        <Avatar src={product.pictureUrl} />
                    </ListItemAvatar>
                    <ListItemText>{product.name} - {product.price}</ListItemText>
                </ListItem>
            ))}
        </List>
    )
}