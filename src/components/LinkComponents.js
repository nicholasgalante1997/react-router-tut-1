import React from 'react';
import {Container, Row, Col, Card, CardTitle} from 'reactstrap'
import {Link} from 'react-router-dom'


const LinkContainer = (props) => {
    return ( 
        <Container className='link-div'>
            <Row>
            <Col md={3}>
                {/* About Example Link */}
                <Link 
                to='/about'
                className='link'>
                    About
                </Link>
            </Col>
            <Col md={3}>
                <Link 
                to='/profile'
                className='link'>
                    Profile
                </Link>
            </Col>
            <Col md={3}>
                <Link 
                to='/store'
                className='link'>
                    Store
                </Link>
            </Col>
            <Col md={3}>
                <Link 
                to='/'
                className='link'>
                    Home
                </Link>
            </Col>
            </Row>
        </Container>
     );
}
 
export default LinkContainer;