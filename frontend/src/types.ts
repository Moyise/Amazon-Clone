export interface IUserLogin {
  userInfo?: {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    image: string;
  };
  loading?: boolean;
  error?: any;
}

export interface IUserRegister {
  userInfo?: {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    image: string;
  };
  loading?: boolean;
  error?: any;
}

export interface IUserDetails {
  user?: {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    image: string;
    createdAt: string;
    updatedAt: string;
  };
  loading?: boolean;
  error?: any;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IProductData {
  products: [
    {
      _id: string;
      name: string;
      image: string;
      images: string[];
      brand: string;
      category: string;
      description: string;
      reviews: [
        {
          _id: string;
          name: string;
          image: string;
          title: string;
          rating: number;
          comment: string;
          createdAt: string;
          updatedAt: string;
        }
      ];
      rating: number;
      numReviews: number;
      countInStock: number;
      price: number;
    }
  ];
  error: any;
  loading: boolean;
}

export interface IProduct {
  product: {
    _id: string;
    name: string;
    image: string;
    images: string[];
    brand: string;
    category: string;
    description: string;
    reviews: [
      {
        _id: string;
        name: string;
        image: string;
        title: string;
        rating: number;
        comment: string;
        createdAt: string;
        updatedAt: string;
      }
    ];
    rating: number;
    numReviews: number;
    countInStock: number;
    price: number;
  };
}

export interface IMyOrders {
  orders: [
    {
      orderItems: [
        {
          _id: string;
          name: string;
          image: string;
          price: number;
          qty: number;
          countInStock: number;
        }
      ];
      _id: string;
      isPaid: boolean;
      isDelivered: boolean;
      paidAt: string;
      deliveredAt: string;
      taxPrice: number;
      shippingPrice: number;
      totalPrice: number;
      itemsPrice: number;
      TBC: number;
    }
  ];
  error: any;
  loading: boolean;
}

export interface ICartAll {
  cartItems: [
    {
      product: string;
      name: string;
      image: string;
      price: number;
      qty: number;
      countInStock: number;
    }
  ];
  _id: string;
  isPaid: boolean;
  isDelivered: boolean;
  paidAt: string;
  deliveredAt: string;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  itemsPrice: number;
  TBC: number;
  paymentMethod: string;
  shippingAddress: {
    country: string;
    name: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    phone: string;
  };
}

export interface ICart {
  qty: number;
}

export interface IOrders {
  order?: {
    _id: string;
    isPaid: boolean;
    isDelivered: boolean;
    paidAt: string;
    deliveredAt: string;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    itemsPrice: number;
    TBC: number;
    user: string;
    shippingAddress: {
      country: string;
      name: string;
      address: string;
      city: string;
      province: string;
      postalCode: string;
      phone: string;
    };
    paymentMethod: string;
    orderItems: [
      {
        name: string;
        image: string;
        qty: number;
        price: number;
        product: string;
      }
    ];
  };
  error?: any;
  success?: boolean;
  loading?: boolean;
}

export interface IData {
  product: {
    _id: string;
    name: string;
    image: string;
    images: string[];
    brand: string;
    category: string;
    description: string;
    reviews: [
      {
        _id: string;
        name: string;
        title: string;
        rating: number;
        comment: string;
        image: string;
        createdAt: string;
      }
    ];
    rating: number;
    numReviews: number;
    countInStock: number;
    price: number;
  };
  error?: any;
  loading?: boolean;
}

export interface IReviews {
  error?: any;
  success?: boolean;
}

export interface IPay {
  loading?: boolean;
  success?: boolean;
}

export interface IDeliver {
  loading?: boolean;
  success?: boolean;
}

export interface IUpdateProfile {
  success?: boolean;
}
