import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
export const ItemsList = ({ itemdata }) => {
    return (


        <Row className='d-block'>
            {itemdata.length >= 1 ? (itemdata.map((item) => {
                return (
                    <Col  key={item.id}>
                        <Card className="d-flex flex-row  mx-3 my-3" style={{ backgroundColor: '#F8F8F8' }}>
                            <Card.Img className="img-item" variant="top"  src= {item.img} />
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-between">
                                    <div className="item-title">{item.title}</div>
                                    <div className="item-price">{item.price}</div>
                                </Card.Title>
                                <Card.Text className="py-2">
                                    <div className="item-description">{item.description}</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })) : <h3>not fiund</h3>}

        </Row>
    )
}
