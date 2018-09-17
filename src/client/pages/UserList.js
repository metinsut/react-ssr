import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from '../actions';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map((user, key) => {
            return <li key={key}>{user.name}</li>
        })
    }

    render() {
        return (
            <div>
                <Link to="/">HOME</Link>
                <h1>List of users:</h1>
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const loadData = (store) => {
    return store.dispatch(fetchUsers());
}

export { loadData };

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
} 