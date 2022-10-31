import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import useStore from "./store/store";
import { Routes, Route, Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./page/Main";
import Detail from "./page/Detail";

import context1 from "./store/context";
import { useState } from "react";
import Cart from "./page/Cart";
import { useEffect } from "react";

function App() {
    const [재고, 재고변경] = useState([10, 20, 30]);
    const { shoesData1 } = useStore(); // 광역 상태관리

    useEffect(() => {
        if (!localStorage.getItem("watched"))
            localStorage.setItem("watched", JSON.stringify([]));
    }, []);
    return (
        <div className="App">
            <NavBar />
            <context1.Provider value={{ 재고 }}>
                <Routes>
                    <Route path="*" element={<Main />} />
                    <Route path="/" element={<Main />} />
                    <Route
                        path="/detail/:id"
                        element={<Detail data={shoesData1} />}
                    />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </context1.Provider>
        </div>
    );
}

export default App;
