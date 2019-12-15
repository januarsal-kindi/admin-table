import React from 'react';
import './formInnput.scss'
import PropTypes from 'prop-types';

const inputForm = (props) => {
    return (
        <div className="input-group">
            <label htmlFor={props.name}>
                <span>{props.label}</span>
                <input type="text" className="input-field" name={props.name} onChange={(e) => props.onChangeHandler(props.name, e.target.value)} />
            </label>
        </div>
    );
}

inputForm.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChangeHandler: PropTypes.func,
}

export default inputForm;
