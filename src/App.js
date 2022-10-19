import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import useStore from "./store/store";
import { Routes, Route, Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./page/Main";
import Detail from "./page/Detail";

function App() {
    const { shoesData1 } = useStore(); // 광역 상태관리
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="*" element={<Main />} />
                <Route path="/" element={<Main />} />
                <Route
                    path="/detail/:id"
                    element={<Detail data={shoesData1} />}
                />
            </Routes>
        </div>
    );
}

export default App;
