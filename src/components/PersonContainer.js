import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import Person from './Person'
import * as API from '../actions/person';

// API
import PersonAPI from '../assets/persons';

class PersonContainer extends Component {

    componentDidMount() {
        this.props.getAllPerson();
        // PersonAPI.all()
        //          .then(persons => 
        //             this.props.dispatch({
        //                 type: 'person/INIT',
        //                 payload: persons
        //             }))
    }

    createCard = personProps => (
        <Col key={`${Math.random()}-${Date.now()}`} xs={4}><Person {...personProps} /></Col>
    )

    createRow = rows => (
        <Row key={`${Math.random()}-${Date.now()}`}>
            {rows.map(i => this.createCard(Object.assign(i, { key: i.id })))}
        </Row>
    )

    render() {
        const { persons } = this.props;
        const contents = [];
        for(let i = 0; i < persons.length; i += 3) {
            contents.push(persons.slice(i, i + 3))
        }

        return <Container fluid className="p-4">{contents.map(i => this.createRow(i))}</Container>
    }
}

// const mapStateToProps = state => ({
//     data: state.persons
// })

// const mapDispatchToProps = {
//     getAllPerson: API.getAllPerson,
//     addPerson: API.addPerson
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer)
export default connect(
    state => state,
    API
)(PersonContainer)