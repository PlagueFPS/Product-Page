export interface BuyableProduct {
    _id: string,
    name: string,
    img: string,
    price: number,
    discount?: number,
    amount: number
  }