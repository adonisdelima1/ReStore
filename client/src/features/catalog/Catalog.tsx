import { Product } from "../../app/models/Product"

interface CatalogProps {
    products: Product[]
    addProduct: () => void
}

export default function Catalog(props: CatalogProps) {
    return (
        <>
            <ul>
                {props.products.map((product: any) => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
            <button onClick={props.addProduct}>Add product</button>
        </>
    )
}