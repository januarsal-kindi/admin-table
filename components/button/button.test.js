
import React from 'react';
import Button from './button.js'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('sets to label Button ', () => {
    const { getByText } = render(<Button label="asdas" />)
    expect(getByText('asdas')).toBeInTheDocument()
})

test('check onClick button props ', () => {
    const handleClick = jest.fn()
    const { rerender, container } = render(<Button onClickHnadler={handleClick} label="asdas" />);
    const button = container.firstChild;
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
})