import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Items = ({ data }) => {
    const navigate = useNavigate();
    return (
        <Container>
            <Row>
                {data?.map((item, idx) => {
                    return (
                        <Col key={item.id}>
                            <div
                                onClick={() => {
                                    navigate(`/detail/${item.id}`);
                                }}
                            >
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
