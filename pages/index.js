import React, { Fragment } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '@stylePages/index.scss'
import { fetchingDataProduct, fetchingDataProductShorting, fetchingSearchProduct } from '@store/product/product-action.js'
import { connect } from 'react-redux'
import Sidebar from '@components/sidebar/sidebar'
import FormInput from '@components/formInput/formInput'
import Button from '@components/button/button'
import Popup from '@components/popup/popup'
import TableComponent from '@components/partials/index/tableComponent'



class Index extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    await reduxStore.dispatch(fetchingDataProduct())
    return {
      ...reduxStore
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      filter: {
        id: '',
        name: ''
      },
      showPopUp: false,
      detailProduct: {}
    }

    this.onChangeHandlerIput = this.onChangeHandlerIput.bind(this)
    this.searchFilter = this.searchFilter.bind(this)
    this.resetFilter = this.resetFilter.bind(this)
    this.onClickShortBy = this.onClickShortBy.bind(this);
    this.showHidePopup = this.showHidePopup.bind(this)
    this.onClicRow = this.onClicRow.bind(this)
  }



  onChangeHandlerIput(key, value) {
    this.setState((state, props) => ({
      filter: { ...state.filter, [key]: value }
    }))
  }

  searchFilter() {
    this.props.fetchingSearchProduct(this.state.filter)

  }
  resetFilter() {

    this.setState((state, props) => ({
      filter: { ...state.filter, id: '', name: '' }
    }), () => {
      this.props.fetchingSearchProduct(this.state.filter)
    })

  }
  onClickShortBy(type) {
    this.props.fetchingDataProductShorting(type)
  }

  onClicRow(id) {
    let { productList } = this.props.product
    let detailProduct = productList.find((product) => product.id == id)
    this.setState(() => ({
      detailProduct: detailProduct
    }), () => {
      this.showHidePopup()
    })

  }
  showHidePopup() {
    this.setState((state, props) => ({
      showPopUp: !state.showPopUp
    }))

  }

  render() {
    const { productList, isLoading } = this.props.product
    const { showPopUp, detailProduct } = this.state

    return (
      <div className="main">
        <Sidebar></Sidebar>
        <div className="main-content">
          <div className="main-content__filter">
            <FormInput
              onChangeHandler={this.onChangeHandlerIput}
              label="id"
              name="id"
            ></FormInput>
            <FormInput
              onChangeHandler={this.onChangeHandlerIput}
              label="name"
              name="name"
            ></FormInput>
            <Button
              label="Filter"
              onClickHnadler={this.searchFilter}

            />
            <Button
              label="Reset"
              onClickHnadler={this.resetFilter}

            />
          </div>
          <TableComponent onClickRow={this.onClicRow} isLoading={isLoading} productList={productList} onShortby={this.onClickShortBy} />
        </div>

        {showPopUp ? (
          <Popup title="Detail Product" closePopup={this.showHidePopup}>
            <div className="product-detail">
              <div className="product-detail__row">
                <div className="key">id :</div>
                <div className="value">{detailProduct.id}</div>
              </div>
              <div className="product-detail__row">
                <div className="key">name :</div>
                <div className="value">{detailProduct.name}</div>
              </div> <div className="product-detail__row">
                <div className="key">price :</div>
                <div className="value">{detailProduct.price}</div>
              </div> <div className="product-detail__row">
                <div className="key">brand :</div>
                <div className="value">{detailProduct.brand}</div>
              </div>
            </div>
          </Popup>
        ) : ('')}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state

  }
};

const mapDispatchToProps = dispatch => ({
  fetchingProduct: () => dispatch(fetchingProduct()),
  fetchingDataProductShorting: (key, params) => dispatch(fetchingDataProductShorting(key, params)),
  fetchingSearchProduct: (filter) => dispatch(fetchingSearchProduct(filter))

});


export default connect(mapStateToProps, mapDispatchToProps)(Index)

