import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { TabContent } from "../components/TabContent";

import { addCartItem } from "../store/cartStore";

const Detail = ({ data }) => {
    const [showing, setShowing] = useState(true);
    const [탭, 탭변경] = useState(0);
    const [input, setInput] = useState("");

    let { id } = useParams(); // 유저가 URL파라미터에 입력한 거 가져오기
    const dispatch = useDispatch();

    const newid = +id;
    // console.log("id :>> ", typeof newid);
    // console.log("data :>> ", data[id].title);

    const result = data.filter((item) => item.id == id); // filter는 대괄호까지 return해서 벗겨줘야함.
    const newArr = { ...result[0] }; // 이친구로 벗겨서 사용했었음

    const result1 = data.find((item) => item.id == id); // find는 결조건식에 맞는 자료만 남겨줌 그래서 바로사용가능함

    const discountHTML = (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
    );

    const onChangeInput = (e) => {
        setInput(e.target.value);
    };

    //useEffect zone
    useEffect(() => {
        setTimeout(() => {
            setShowing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        if (isNaN(input)) {
            setInput("");
            alert("숫자만넣어라?");
        }
    }, [input]);

    const addCart = {
        id: result1.id,
        name: result1.title,
        count: 1,
    };

    return (
        <>
            {id && typeof newid !== "number" ? (
                <>잘못된접근</>
            ) : (
                <div className="container">
                    {showing ? discountHTML : null}
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={result1.url}
                                width="100%"
                                alt="detailPic"
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                value={input}
                                onChange={onChangeInput}
                            />
                            <h4 className="pt-5">{result1.title}</h4>
                            <p>{result1.content}</p>
                            <p>{result1.price}</p>
                            <button
                                className="btn btn-danger"
                                onClick={() => dispatch(addCartItem(addCart))}
                            >
                                주문하기
                            </button>
                        </div>
                    </div>

                    <Nav fill variant="tabs" defaultActiveKey="link0">
                        <Nav.Item onClick={() => 탭변경(0)}>
                            <Nav.Link eventKey="link-0">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => 탭변경(1)}>
                            <Nav.Link eventKey="link-1">
                                Loooonger NavLink
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => 탭변경(2)}>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <TabContent 탭={탭} data={data} />
                </div>
            )}
        </>
    );
};

export default Detail;
