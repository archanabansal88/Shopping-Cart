import {createContext, ReactNode, useContext, useState} from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContextProps = {
    getItemQuantity: (id:number) => number,
    addToCart: (id:number) => void,
    removeFromCart: (id:number) => void,
    deleteItem: (id:number) => void,
    cartItems:CartItem[],
    cartQuantity:number
}
type CartItem = {
    id: number,
    quantity:number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export const useShoppingCart = () =>{
    return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({children}:ShoppingCartProviderProps)=>{
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const getItemQuantity = (id:number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const cartQuantity = cartItems.reduce((quantity,item)=>
       quantity + item.quantity, 0)

    const addToCart = (id: number) => {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
              } else {
                return item
              }
            })
          }
        })
      }

      const deleteItem = (id:number)=>{
        setCartItems(currItems =>{
            return currItems.filter((item)=> id !== item.id)
        })
      }

    const removeFromCart = (id: number) => {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
              } else {
                return item
              }
            })
          }
        })
      }

    return (<ShoppingCartContext.Provider value={{cartItems,cartQuantity,deleteItem,getItemQuantity, addToCart, removeFromCart}}>
        {children}
    </ShoppingCartContext.Provider>)
}