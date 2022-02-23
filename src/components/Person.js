import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import actions from '../redux/actions'

// UI 
import { Button, Card, Row, Col } from 'react-bootstrap'

const Person = ({ name, address, phoneNumber, photo }) => (
    <Card className="container-fluid p-4 text-center">
        <Card.Img varian="top" src={photo} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
                <Row className="my-2">
                    <Col>{address},{phoneNumber}</Col>
                </Row>
            <Button variant="danger">Remove</Button>
        </Card.Body>
    </Card>
)

export default Person