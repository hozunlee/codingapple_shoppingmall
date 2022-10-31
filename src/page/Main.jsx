import React, { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

import Items from "../components/Items";
import shoesData from "../data/shoes";
import useStore from "../store/store";

const Main = () => {
    const [loading, setLoading] = useState(true);
    const { shoesData1, setShoesData1 } = useStore(); // 광역 상태관리
    const [count, setCount] = useState(0);

    useEffect(() => {
        setShoesData1(shoesData);
        setLoading(false);
    }, []);

    const updateItem = async () => {
        setCount((prev) => prev + 1);
        try {
            if (count === 0) {
                setLoading(true);
                const { data } = await axios.get(
                    "https://codingapple1.github.io/shop/data2.json"
                );
                setShoesData1([...shoesData1, ...data]);
            } else if (count === 1) {
                setLoading(true);
                const { data } = await axios.get(
                    "https://codingapple1.github.io/shop/data3.json"
                );
                setShoesData1([...shoesData1, ...data]);
            } else {
                alert("이제없음");
            }
            setLoading(false);
        } catch (error) {
            console.error("에러남", error);
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <div>로딩 중</div>
            ) : (
                <>
                    <div className="main-bg"></div>
                    <Items data={shoesData1} />
                    <button onClick={updateItem}>요청</button>
                </>
            )}
        </>
    );
};

export default Main;
