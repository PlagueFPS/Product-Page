import React from "react";
import { BuyableProduct } from "./BuyableProduct";

export interface CartContextInterface {
  showCart: boolean,
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>,
  product: BuyableProduct,
  cartItems: BuyableProduct[],
  setCartItems: React.Dispatch<React.SetStateAction<BuyableProduct[]>>,
  addItemToCart: (item: BuyableProduct, amount?: number) => void,
  totalAmount: number,
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>,
  totalPrice: number,
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>,
}