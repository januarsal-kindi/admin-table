import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import './tableComponent.scss'

export const tableComponent = (props) => {

    useEffect(() => {
    }, [props.productList]);
    return (
        <div className="main-content__table content-table">
            <div className="table-header">
                <div className="table-header__row">
                    <div onClick={() => props.onShortby('ID')} className="cell">Id</div>
                    <div onClick={() => props.onShortby('NAME')} className="cell">Name</div>
                    <div onClick={() => props.onShortby('PRICE')} className="cell">Price</div>
                    <div onClick={() => props.onShortby('BRAND')} className="cell">Description</div>
                </div>
            </div>
            <div className="table-body">
                {props.isLoading ?
                    (
                        <div className=" table-body__row  table-body__row--skeleton">
                            <div className="skeleton-row">
                                <div className="skeleton-cell cell skeleton">
                                    <div className=" line"></div>
                                </div>
                                <div className="skeleton-cell cell">
                                    <div className=" line"></div>

                                </div>
                                <div className="skeleton-cell cell">
                                    <div className=" line"></div>
                                </div>
                                <div className="skeleton-cell cell">
                                    <div className=" line"></div>

                                </div>
                            </div>
                            <div className="skeleton-row">
                                <div className="skeleton-cell cell skeleton">
                                    <div className=" line"></div>
                                </div>
                                <div className="skeleton-cell cell">
                                    <div className=" line"></div>

                                </div>
                                <div className="skeleton-cell cell">
                                    <div className=" line"></div>
                                </div>
                                <div className="skeleton-cell cell">
                                    <div className=" line"></div>

                                </div>
                            </div>

                        </div>
                    ) :
                    (
                        <Fragment>
                            {props.productList.length > 0 ? (
                                props.productList.map((product, index) => (
                                    <div key={index} className="table-body__row table-body__row--content" onClick={() => props.onClickRow(product.id)}>
                                        <div className="cell">{product.id}</div>
                                        <div className="cell">{product.name}</div>
                                        <div className="cell">{product.price}</div>
                                        <div className="cell">{product.brand}</div>
                                    </div>
                                ))
                            ) : (
                                    <div className="table-body__row table-body__row--empty" onClick={() => props.onClickRow(product.id)}>
                                        <div className="cell">Nothing to show it</div>
                                    </div>
                                )}
                        </Fragment>
                    )

                }
            </div>
        </div>

    )

}


tableComponent.propTypes = {
    isLoading: PropTypes.bool,
    productList: PropTypes.array,
    isLoading: PropTypes.bool,
    onClickRow: PropTypes.func,

};


export default tableComponent
