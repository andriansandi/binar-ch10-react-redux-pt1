import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../redux/actions'

class Person extends Component {

    componentDidMount() {
        // this.props.addPerson();
        console.log('Data dari Redux Store')
        console.log('Data: ', this.props.data)
    }

    render() {
        const { children } = this.props;
        return (
            <div className="container">{children}</div>
        )
    }

}

const mapStateToProps = state => ({
    data: state.persons
})

export default connect(
    mapStateToProps, 
    actions
)(Person)