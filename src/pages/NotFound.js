import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export function NotFound() {

    function goBack() {

        window.history.back()
        
        }

    return (
        <div style={{ backgroundColor: '#d3d3d3', minHeight: '100vh', margin: 0, padding: 0 }}>
        <Container >
            <Row>
            <Col md={{ span: 6, offset: 3 }} className="text-center">
                <h1 className="mt-5">404</h1>
                <figure>
                    <blockquote class="blockquote" className="pt-2 ">
                        <p>"These aren't the droids you are looking for..."</p>
                    </blockquote>
                    <figcaption class="blockquote-footer" >
                        Ben Kenobi in <cite title="Source Title">Star Wars: Episode IV - A New Hope (1977)</cite>
                    </figcaption>
                </figure>
                <Link to="/">
                <button type="button" class="btn btn-primary btn-lg" onClick={goBack}>Go Back, Player</button>
                </Link>
            </Col>
            </Row>
        </Container>
        </div>
    );
}