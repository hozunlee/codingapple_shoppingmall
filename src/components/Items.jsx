import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Items = ({ data }) => {
    const navigate = useNavigate();

    let recentViewItem = new Set();

    const onClickDetail = (item) => {
        const sess = JSON.parse(localStorage.getItem("watched"));
        if (sess.length >= 1) sess.map((item) => recentViewItem.add(item));

        recentViewItem.add(item.id);

        localStorage.setItem("watched", JSON.stringify([...recentViewItem]));
        navigate(`/detail/${item.id}`);
    };

    return (
        <Container>
            <Row>
                {data?.map((item, idx) => {
                    return (
                        <Col key={item.id}>
                            <div onClick={() => onClickDetail(item)}>
                                <img src={item.url} alt="img1" width="80%" />
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </div>
                            <p>{item.price}원</p>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Items;
