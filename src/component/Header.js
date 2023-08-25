import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'

export const Header = () => {
  return (
    <div>
       <Container  >
        <Row>
            <Col sm="12" className='justify-content-center text-center'> 
            <p className='namemnue  '>قائمة طعام</p>
            <div className='justify-content-center d-flex'> 
            <p className='underline '></p>
            </div>
        </Col>
        </Row>
        </Container>
    </div>
  )
}
