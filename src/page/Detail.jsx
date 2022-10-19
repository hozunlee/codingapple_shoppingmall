import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = ({ data }) => {
    const [showing, setShowing] = useState(true);
    const [input, setInput] = useState("");
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

    let { id } = useParams(); // 유저가 URL파라미터에 입력한 거 가져오기

    const newid = +id;
    // console.log("id :>> ", typeof newid);
    // console.log("data :>> ", data[id].title);

    const result = data.filter((item) => item.id == id); // filter는 대괄호까지 return해서 벗겨줘야함.
    const newArr = { ...result[0] }; // 이친구로 벗겨서 사용했었음

    const result1 = data.find((item) => item.id == id); // find는 결조건식에 맞는 자료만 남겨줌 그래서 바로사용가능함
    // console.log("🚀 ~ file: detail.jsx ~ line 13 ~ Detail ~ result1", result1);

    const discountHTML = (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
    );

    const onChangeInput = (e) => {
        setInput(e.target.value);
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
                            <h4 className="pt-5">{newArr.title}</h4>
                            <p>{newArr.content}</p>
                            <p>{newArr.price}</p>
                            <button className="btn btn-danger">주문하기</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Detail;
