import { CartItem, Order, Product, ShippingInfo, User } from "./types";

export type CustomError = {
  status: number;
  data: {
    message: string;
  };
};

export type MessageResponse = {
  message: string;
};

export type AllUsersResponse = {
  users: User[];
};

export type UserResponse = {
  user: User;
};

export type AllProductsResponse = {
  products: Product[];
};
export type CategoriesResponse = {
  categories: string[];
};

export type SearchProductsResponse = AllProductsResponse;

export type SearchProductsRequest = {
  // price: number;
  // page: number;
  // category: string;
  search: string;
  // sort: string;
};
export type ProductResponse = {
  product: Product;
};

export type AllOrdersResponse = {
  orders: Order[];
};
export type OrderDetailsResponse = {
  order: Order;
};

// export type StatsResponse = {
//   stats: Stats;
// };

// export type PieResponse = {
//   success: boolean;
//   charts: Pie;
// };

// export type BarResponse = {
//   success: boolean;
//   charts: Bar;
// };

// export type LineResponse = {
//   success: boolean;
//   charts: Line;
// };

export type NewProductRequest = {
  id: string;
  formData: FormData;
};
export type UpdateProductRequest = {
  userId: string;
  productId: string;
  formData: FormData;
};
export type DeleteProductRequest = {
  userId: string;
  productId: string;
};

export type NewOrderRequest = {
  shippingInfo: ShippingInfo;
  orderItems: CartItem[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  user: string;
};

export type UpdateOrderRequest = {
  userId: string;
  orderId: string;
};

export type DeleteUserRequest = {
  userId: string;
  adminUserId: string;
};
