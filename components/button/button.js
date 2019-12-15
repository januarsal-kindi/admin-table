import React from 'react';
import './button.scss'
import PropTypes from 'prop-types';

const button = (props) => {
    return (
        <button className="btn-orange" onClick={() => props.onClickHnadler()}>{props.label}</button>
    );
}

button.propTypes = {
    label: PropTypes.string,
    onClickHnadler: PropTypes.func,

};

export default button

