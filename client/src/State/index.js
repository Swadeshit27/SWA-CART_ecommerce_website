import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    user: null,
    token: null,
    Items: [],
    totalPrice: 0,
    originalPrice: 0,
    LaterItems: [],
    Order: {
        address: null,
        finalPrice: 0,
        orderItems: null,
    }
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.Items = []
            state.totalPrice = 0;
            state.originalPrice = 0;
            state.Order.address = null;
            state.Order.finalPrice = null;
            state.Order.orderItems = null;
            state.user = null;
            state.token = null;
        },
        AddToCart: (state, action) => {
            const index = state.Items.findIndex(
                product => product.id === action.payload.id,
            );
            if (index != -1) {
                state.Items[index].qty += 1;
            }
            else {
                const tempData = { ...action.payload, qty: 1 }
                state.Items.push(tempData);
            }
            state.totalPrice += action.payload.price;
            state.originalPrice += action.payload.originalPrice;
        },
        RemoveItems: (state, action) => {
            state.totalPrice -= (action.payload.price * action.payload.qty);
            state.originalPrice -= (action.payload.originalPrice * action.payload.qty);
            const updateItems = state.Items.filter(val => val.id !== action.payload.id);
            state.Items = updateItems;
        },
        saveForLater: (state, action) => {
            state.totalPrice -= action.payload.price;
            state.originalPrice -= action.payload.originalPrice;
            const updateItems = state.Items.filter(val => val.id !== action.payload.id);
            state.Items = updateItems;
            state.LaterItems.push(action.payload);
        },
        MoveToCart: (state, action) => {
            state.Items.push(action.payload);
            state.totalPrice += action.payload.price;
            state.originalPrice += action.payload.originalPrice;
            const updateItems = state.LaterItems.filter(val => val.id !== action.payload.id);
            state.LaterItems = updateItems;
        },
        RemoveFromLater: (state, action) => {
            const updateItems = state.LaterItems.filter(val => val.id !== action.payload.id);
            state.LaterItems = updateItems;
        },
        AddAddress: (state, action) => {
            state.user = action.payload;
        },
        IncreaseCnt: (state, action) => {
            const index = state.Items.findIndex(
                product => product.id === action.payload.id,
            );
            if (state.Items[index].qty < 10) {
                state.Items[index].qty += 1;
                state.totalPrice += action.payload.price;
                state.originalPrice += action.payload.originalPrice;
            }
        },
        DecreaseCnt: (state, action) => {
            const index = state.Items.findIndex(
                product => product.id === action.payload.id,
            );
            if (state.Items[index].qty > 1) {
                state.Items[index].qty -= 1;
                state.totalPrice -= action.payload.price;
                state.originalPrice -= action.payload.originalPrice;
            }
        },
        EmptyCart: (state, action) => {
            state.Items = []
            state.totalPrice = 0;
            state.originalPrice = 0;
            state.Order.address = null;
            state.Order.finalPrice = null;
            state.Order.orderItems = null;
        },
        PlaceOrder: (state, action) => {
            state.Order.finalPrice = action.payload.totalPrice;
            state.Order.orderItems = action.payload.Items;
            state.Order.address = action.payload.orderAddress;
        }
    }
})

export const { setMode, setLogout, setLogin, AddToCart, RemoveItems, saveForLater, MoveToCart, RemoveFromLater, IncreaseCnt, DecreaseCnt, AddAddress,
    EmptyCart, PlaceOrder } = authSlice.actions;
export default authSlice.reducer;