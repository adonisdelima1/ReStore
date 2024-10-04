import { Product } from "../../app/models/Product"

interface CatalogProps {
    products: Product[]
    addProduct: () => void
}

export default function Catalog({products, addProduct}: CatalogProps) {
    return (
        <>
            <ul>
                {products.map((product: any) => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
            <button onClick={addProduct}>Add product</button>
        </>
    )
}