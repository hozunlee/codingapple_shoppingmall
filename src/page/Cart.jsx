import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { increaseAge } from "../store/userStore";
import { increaseStock } from "../store/cartStore";

const Cart = () => {
    let {
        cart,
        user: { name, age },
    } = useSelector((state) => {
        return state;
    });

    // redixStore.js 에 요청보내주는 함수
    const dispatch = useDispatch();

    const title = Object.keys(...cart);

    return (
        <div>
            <div>{name}의 장바구니</div>
            <p>{age}</p>
            <button
                onClick={() => {
                    dispatch(increaseAge());
                }}
            >
                +
            </button>
            <Table>
                <thead>
                    <tr>
                        {title.map((item) => (
                            <th key={item}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {cart?.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>{item.count}</th>
                                <th>
                                    <button
                                        onClick={() => {
                                            dispatch(increaseStock(item.id));
                                        }}
                                    >
                                        +
                                    </button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default Cart;
