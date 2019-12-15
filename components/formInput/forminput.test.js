
import React from 'react';
import FormInput from './formInput.js'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('sets to label and name ', () => {
    const { getByText, getByLabelText } = render(<FormInput label="name" />)
    expect(getByLabelText('name')).toBeInTheDocument()
})

test('check onClick button props ', () => {
    const handleChange = jest.fn()
    const wraperr = render(<FormInput label="name" onChangeHandler={handleChange} />);
    const input = wraperr.getByLabelText('name')
    fireEvent.change(input, { target: { value: '23' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
})