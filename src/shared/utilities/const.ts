import { environment } from "src/environments/environment";

export const Const = {
  PhoneNumber: {
    Pattern: /^01[0125][0-9]{8}$/,
    MinLength: 5,
    MaxLength: 24,
  },
  Password: {
    MinLength: 8,
    MaxLength: 100,
  },
  Name: {
    TitleMaxLength: 4,
    MinLength: 3,
    MaxLength: 32,
  },
  favProducts: "favoriteProducts",
  cartProducts: "cartProducts",
  img_url: `${environment.api_url}productImages/`,
};

export const Paths = {
  shop: "/shop",
};
