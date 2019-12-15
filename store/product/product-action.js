
import { getProduct, getProductwithSerachAndShort } from '../services/product-services'


export const fetchingProductLoading = () => {
    return {
        type: 'PRODUCT/FETCH'
    }
}

export const fetchingProductSuccess = (data) => {
    return {
        type: 'PRODUCT/FETCH_SUCCESS',
        data,
    }
}

export const fetchingProductFailure = (data) => {
    return {
        type: 'PRODUCT/FETCH_FAILURE',
        data
    }
}
export const setShortProductAction = (data) => {
    return {
        type: 'PRODUCT/SET_SHORTING',
        data
    }
}
export const setSearchProductAction = (data) => {
    return {
        type: 'PRODUCT/SET_SEARCH',
        data
    }
}

export const fetchingDataProduct = () => {
    return (dispatch, getState) => {
        dispatch(fetchingProductLoading());
        let state = getState()
        return getProduct({ limit: state.limit, page: state.page }).then((response) => {
            dispatch(fetchingProductSuccess(response.data))
        }, (err) => {
            dispatch(fetchingProductFailure(err))

        })

    }
}

export const fetchingDataProductShorting = (key) => {
    return (dispatch, getState) => {
        let state = getState()
        let shorting = {};

        if (state.shorting.keyType == key) {
            shorting = { keyType: key, params: state.shorting.params == 'ASC' ? 'DESC' : 'ASC' }
        } else {
            shorting = { keyType: key, params: 'ASC' }
        }

        dispatch(setShortProductAction(shorting))
        dispatch(fetchingProductLoading());
        console.log(state)

        let params = {
            key: shorting.keyType.toLowerCase(),
            params: shorting.params.toLowerCase(),
            limit: state.limit,
            page: state.page,
            id_filter: state.filter.id,
            name_filter: state.filter.name
        }

        console.log(params)

        return getProductwithSerachAndShort(params).then((response) => {
            dispatch(fetchingProductSuccess(response.data))
        }, (err) => {
            dispatch(fetchingProductFailure(err))
        })

    }
}


export const fetchingSearchProduct = ({ id, name }) => {
    return (dispatch, getState) => {

        let state = getState();
        dispatch(setSearchProductAction({ id: id, name: name }));
        dispatch(fetchingProductLoading());

        let params = {
            key: state.shorting.keyType.toLowerCase(),
            params: state.shorting.params.toLowerCase(),
            limit: state.limit,
            page: state.page,
            id_filter: id,
            name_filter: name
        }

        return getProductwithSerachAndShort(params).then((response) => {
            dispatch(fetchingProductSuccess(response.data))
        }, (err) => {
            dispatch(fetchingProductFailure(err))
        })


    }


}
