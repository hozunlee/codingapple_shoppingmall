import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./page/Main";

import { Routes, Route, Outlet } from "react-router-dom";
import Detail from "./page/Detail";

import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="*" element={<Main />} />
                <Route path="/" element={<Main />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>멤버정보임</div>} />
                    <Route path="location" element={<div>화사주소임</div>} />
                </Route>
                <Route path="/event" element={<Event />}>
                    <Route
                        path="one"
                        element={<div>첫 주문시 양배추즙 서비스</div>}
                    />
                    <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
                </Route>
            </Routes>
        </div>
    );
}

const About = (params) => {
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet></Outlet>
        </div>
    );
};

const Event = () => {
    return (
        <div>
            <h1>오늘의 이벤트</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default App;
