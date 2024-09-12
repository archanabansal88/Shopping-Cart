import {useShoppingCart} from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import "./cart.css";
import Products from "../data/products.json";
import {useNavigate} from "react-router-dom"

const Cart = () =>{
    const {cartItems} = useShoppingCart();
    const navigate = useNavigate();

    const getTotalCartAmount = () =>{
      let totalAmount = 0;
      cartItems.map(({id,quantity})=>{
        if(quantity > 0){
            const item = Products.find((item)=> item.id === id);
            totalAmount += (item?.price || 0) * quantity
        }
      })
      return totalAmount;
    }
    const totalAmount = getTotalCartAmount()

    return (
        <div className="cart">
            <div>
                <h1>Your Cart items</h1>
            </div>
            <div className="cartItems">
                {cartItems.map((item)=>(
                    <CartItem key={item.id} {...item}/>
                ))}
            </div>
            {totalAmount >0 ? (
                <div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={()=> navigate("/")}>Continue Shopping</button>
                </div>
            ): "Your cart is empty"}
        </div>
    )
}
export default Cart;