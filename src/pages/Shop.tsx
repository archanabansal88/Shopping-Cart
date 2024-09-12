import Products from "../data/products.json";
import Product from "./Product";
import "./Shop.css";

const Shop = () =>{
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Store</h1>
            </div>
            <div className="products">
                {Products.map((item)=> <div key={item.id}>
                    <Product {...item}/> 
                </div>)}
            </div>
        </div>
    )
}
export default Shop;