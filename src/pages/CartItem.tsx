import Products from "../data/products.json";
import {useShoppingCart} from "../context/ShoppingCartContext";


type CartItemProps = {
    id: number,
    quantity:number
}
const CartItem = ({id,quantity}:CartItemProps) =>{
    const {addToCart,removeFromCart,deleteItem} = useShoppingCart();

    const item = Products.find((item)=> item.id === id);
    if (item === null) return null;

    return(
        <div className="cartItem">
            <img src={item?.imgUrl}/>
            <div className="description">
                <p>{item?.name}</p>
                <p>${item?.price}</p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}>-</button>
                        <div>{quantity}</div> in cart
                    <button onClick={()=>addToCart(id)}>+</button>
                    <button onClick={()=>deleteItem(id)}>Delete</button>
                </div>
            </div>
        </div>

    )
}

export default CartItem;