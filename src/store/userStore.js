import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: { name: "Lee", age: 20 },
    // state 수정함수
    reducers: {
        // 1. 매개변수 state는 기존 state를 뜻함 : Lee
        changeName(state) {
            state.name = "park";
        },
        increaseAge(state) {
            console.log("state :>> ", state);
            state.age += 1;
        },

        //매개변수로 받앗 바꾸는 방법
        // payload는 짐을 뜻함
        increaseStock(state, action) {
            state.age += action.payload;
        },
    },
});

export let { changeName, increaseAge } = user.actions;

export default user;
