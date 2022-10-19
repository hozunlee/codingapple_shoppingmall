import React, { useContext } from "react";

import context1 from "../store/context";

export const TabContent = ({ 탭, data }) => {
    const { 재고 } = useContext(context1);
    console.log("data :>> ", data);
    // if (탭 == 0) {
    //     return <div>내용0</div>;
    // }
    // if (탭 == 1) {
    //     return <div>내용1</div>;
    // }
    // if (탭 == 2) {
    //     return <div>내용2</div>;
    // }
    return (
        <div className="transition-opacity">
            {재고}
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
        </div>
    );
};
