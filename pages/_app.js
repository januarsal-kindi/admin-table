import App from 'next/app'
import React, { Fragment } from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Header from '@components/header/header'

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Fragment>
                <Header></Header>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Fragment>
        )
    }
}

export default withReduxStore(MyApp)