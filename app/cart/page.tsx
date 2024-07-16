
import Container from "../components/container";
import CartClient from"../cart/CartClient"
const Cart = () => {
    return ( <div className="pt-8">
        <Container>
          <CartClient></CartClient>  
        </Container>
    </div> );
}
 
export default Cart;