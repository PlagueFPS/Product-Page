import { createContext } from "react";
import { CartContextInterface } from "../../interfaces/CartContextInterface";


export const CartContext = createContext<CartContextInterface | null>(null)
 
