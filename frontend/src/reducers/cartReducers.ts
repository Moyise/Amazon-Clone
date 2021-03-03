import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_CLEAR_ITEMS,
} from "../constants/cartConstants";
import { IAction } from "../types";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  { type, payload }: IAction
) => {
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
      const existItem: any = state.cartItems.find((x: any) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x: any) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x: any) => x.product !== payload),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: payload,
      };

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload,
      };

    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
