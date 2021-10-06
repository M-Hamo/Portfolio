export interface Category {
  name?: string;
  icon?: string;
  id: string;
  myProducts:[]
}

export interface Product {
  id: string;
  imgUrl?: string;
  detail?: string;
  price?: number;
  afterDiscount?: number;
}


export interface Offer {
  imgUrl: string;
}

export interface DataJson {
  categories?: any[];
  cards?: [];
  secondCards?: [];
  myFooter?: [];
  secondCard?: [];
  thirdCard?: [];
  fourthCard?: [];
  options?: [];
  offers?: [];
}
