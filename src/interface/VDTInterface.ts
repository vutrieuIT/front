interface Product {
  sale: boolean;
  name: string;
  image: string;
  numberSold: number;
  price: number;
  discount: number;
  rating: number;
}

interface ProductList {
  [key: string]: Product;
}

interface Cart {
  [key: string]: number;
}

interface Order {
  [key: string]: number;
}

interface OrderList {
  [key: string]: Order;
}

export { Product, ProductList, Cart, Order, OrderList };
