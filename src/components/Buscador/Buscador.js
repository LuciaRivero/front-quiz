import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { refreshFilter } from '../../services/filters/actions'
import './Buscador.css';

const onChangeHandler = (props) => (ev) => {
    const term = ev.target.value;

    props.refreshFilter(term)
}

const Buscador = (props) => (
    <form className="buscador">
        <input type="text" placeholder="Búsqueda" onChange={onChangeHandler(props)}/>
    </form>
);

Buscador.propTypes = {
    refreshFilter: PropTypes.func.isRequired
};

export default connect(null, { refreshFilter })(Buscador);