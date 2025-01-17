import Container from "@/app/components/container";
import ProductDetails from "./ProductDetails";

import { products } from "@/app/utils/products";
import ListRating from "../ListRating";

interface IPrams{
    productId? : string;

}
const Product = ({params}: {params:IPrams}) => {
    console.log("params", params)
    
const product = products.find((item)=> item.id=== params.productId)
    return ( <div><Container>
        <ProductDetails product={product}/>
        <div className="flex flex-col mt-20 gap-4">
            <div>Add Rating</div>
            <ListRating product={product}/>
        </div>
        </Container>
        </div> );
}
 
export default Product;