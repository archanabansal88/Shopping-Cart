import {useShoppingCart} from "../context/ShoppingCartContext";

type ProductProps={
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

const Product = ({id,name,price,imgUrl}:ProductProps) =>{
    const {getItemQuantity,addToCart} = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (
        <div className="product">
            <img src={imgUrl}/>
            <div className="description">
                <p>{name}</p>
                <p>${price}</p>
            </div>
            <button className="addToCartBttn" onClick = {()=>addToCart(id)}>
                Add to cart{quantity > 0 && <>({quantity})</>}
            </button>
        </div>
    )
}
export default Product;