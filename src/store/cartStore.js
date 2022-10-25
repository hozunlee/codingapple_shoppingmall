import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
        { id: 3, name: "김치왕", count: 1 },
    ],

    reducers: {
        // 1. 매개변수 state는 기존 state를 뜻함 : Lee
        //매개변수로 받아서 바꾸는 방법
        // payload는 짐을 뜻함

        increaseStock(state, action) {
            state.filter((item) => {
                if (item.id === action.payload) {
                    return (item.count += 1);
                }
                return item;
            });
        },

        addCartItem(state, action) {
            console.log("action.payload :>> ", action.payload);
        },
    },
});

export let { increaseStock, addCartItem } = cart.actions;
export default cart;
