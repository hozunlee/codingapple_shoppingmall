import React, { useState } from "react";
import { useEffect } from "react";
import Items from "../components/Items";
import shoesData from "../data/shoes";
import useStore from "../store/store";

const Main = () => {
    const [data] = useState(shoesData);
    const [loading, setLoading] = useState(true);

    const { shoesData1, setShoesData1 } = useStore();

    useEffect(() => {
        setShoesData1(shoesData);
        setLoading((prev) => !prev);
    }, []);

    useEffect(() => {
        console.log("shoesData1 :>> ", shoesData1);
    }, [shoesData1]);

    return (
        <>
            {!loading ? (
                <div>로딩 중</div>
            ) : (
                <>
                    <div className="main-bg"></div>
                    <Items data={data} />
                </>
            )}
        </>
    );
};

export default Main;
