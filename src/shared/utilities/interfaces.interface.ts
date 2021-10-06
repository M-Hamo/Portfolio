export interface Product {
  _id?: any;
  name?: string;
  // by default false
  state?: boolean;
  desc?: string;
  category?: string;
  subCategory?: string;
  sellingNum?: number;
  rateNum?: number;
  photos?: any[];
  productAmount?: number;
  price?: number;
  sale?: number;
  ProductCreator?: string;
  Favorite?: number;
  ToCart?: number;
}

export interface Category {
  _id?: string;
  name?: string;
  __v?: number;
  subcategories?: any[];
}

export interface Image {
  id: number;
  file: File;
  type: string;
  name: string;
  imageShow: any;
}
export interface Order {
  id?: any;
  clientName?: string;
  address?: string;
  phone?: string;
  orderDetails?: string;
  __v?: 0;
}

