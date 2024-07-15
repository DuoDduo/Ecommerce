
import Container from "../components/Container";
import CartClient from"../cart/CartClient"
const Cart = () => {
    return ( <div className="pt-8">
        <Container>
          <CartClient></CartClient>  
        </Container>
    </div> );
}
 
export default Cart;