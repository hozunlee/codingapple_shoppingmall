import { configureStore } from "@reduxjs/toolkit";

import user from "../store/userStore";
import cart from "../store/cartStore";

// 2. 변경함수 export 하기
export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
});
