interface Product {
  sale: boolean;
  quantity: number;
  name: string;
  image: string;
  numberSold: number;
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
