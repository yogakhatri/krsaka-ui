export interface LoginDetails {
  username: string;
  password: string;
}

export interface BearerToken {
  accessToken: string;
  tokenType: string;
}

export interface Address {
  street: string;
  city: string;
  country: string;
}

export interface User {
  role: 'seller' | 'user';
  username: string;
  password: string;
  firstName: string;
  lastName?: string;
  primaryEmail: string;
  secondaryEmail?: string;
  primaryNumber: number;
  secondaryNumber?: number;
  addresses: Address[];
  wishlist: string[];
  listOfOrders: string[];
  listOfProductsInCart: string[];
  profileImage?: string;
  registrationDate?: Date;
  lastLogin?: Date;
  shippingAddresses: Address[];
  paymentMethods: string[];
  socialMediaLinks: string[];
  preferences: {
    language: string;
    currency: string;
  };
  reviews: string[];
  ratings: number[];
  savedSearches: string[];
  savedCoupons: string[];
  referralCode?: string;
  referralHistory: string[];
}
