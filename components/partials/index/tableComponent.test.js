
import React from 'react';
import TableComponent from './tableComponent'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('check table is loading ', () => {
    const { container } = render(<TableComponent isLoading={true} productList={[]} />)

    //check not empty
    const tableBodyEmpty = container.querySelector('.table-body__row--empty')
    expect(tableBodyEmpty).not.toBeInTheDocument()

    //check table content
    const tableBodyContent = container.querySelector('.table-body__row--content')
    expect(tableBodyContent).not.toBeInTheDocument()


    //check table isloading
    const tableBodySkeleton = container.querySelector('.table-body__row--skeleton')
    expect(tableBodySkeleton).toBeInTheDocument()
});


test('check table is not empty & length ', () => {
    const { container } = render(<TableComponent isLoading={false} productList={[{ id: '3123123', name: 'adsasdasd' }]} />)

    //check not empty
    const tableBodyEmpty = container.querySelector('.table-body__row--empty')
    expect(tableBodyEmpty).not.toBeInTheDocument();

    //check table content
    const tableBodyContent = container.querySelectorAll('.table-body__row--content')
    expect(tableBodyContent[0]).toBeInTheDocument()
    expect(tableBodyContent.length).toBe(1)

    //check table isloading
    const tableBodySkeleton = container.querySelector('.table-body__row--skeleton')
    expect(tableBodySkeleton).not.toBeInTheDocument();
})


test('check table is empty ', () => {
    const { container } = render(<TableComponent isLoading={false} productList={[]} />)

    //check not empty
    const tableBodyEmpty = container.querySelector('.table-body__row--empty')
    expect(tableBodyEmpty).toBeInTheDocument();

    //check table content & length
    const tableBodyContent = container.querySelector('.table-body__row--content')
    expect(tableBodyContent).not.toBeInTheDocument()

    //check table isloading
    const tableBodySkeleton = container.querySelector('.table-body__row--skeleton')
    expect(tableBodySkeleton).not.toBeInTheDocument();
})


test('onCLick sort by table', () => {

    const handlClickShort = jest.fn()

    const { container, getByText } = render(<TableComponent isLoading={false} productList={[{ id: '3123123', name: 'adsasdasd' }]} onShortby={handlClickShort} />)

    //sort by id
    fireEvent.click(getByText('Id'))
    expect(handlClickShort).toHaveBeenCalledWith('ID')

    //sort by Name
    fireEvent.click(getByText('Name'))
    expect(handlClickShort).toHaveBeenCalledWith('NAME')

    //sort by price
    fireEvent.click(getByText('Price'))
    expect(handlClickShort).toHaveBeenCalledWith('PRICE')

    //sort by Description
    fireEvent.click(getByText('Description'))
    expect(handlClickShort).toHaveBeenCalledWith('BRAND')

})
// test('check on change props ', () => {
//     const handleChange = jest.fn()
//     const wraperr = render(<FormInput label="name" onChangeHandler={handleChange} />);
//     const input = wraperr.getByLabelText('name')
//     fireEvent.change(input, { target: { value: '23' } })
//     expect(handleChange).toHaveBeenCalledTimes(1)
// })