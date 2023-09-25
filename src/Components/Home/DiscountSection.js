import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import slider5 from '../../images/slider5.svg'
const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
                <Col sm="6">
                    <div className="discount-title">
                    اهتم بالاطفال بعناية واهتمام دائم، فهم تاج الحياة يستحقون الحنان والتوجيه في كل خطوة على طريق نموهم.
                    </div>
                </Col>
                <Col sm="6">
                    <img className="dicount-img" src={slider5} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection
