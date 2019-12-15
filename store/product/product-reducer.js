import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

export const productState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    productList: [],
    page: 0,
    limit: 20,
    shorting: {
        keyType: 'ID',
        params: 'ASC'
    },
    filter: {
        id: '',
        name: ''
    }
}


const fetchingProduct = (state, action) => {

    const updatedState = {
        isLoading: true,
        productList: []
    }
    return { ...state, ...updatedState }
};

const fetchingProductSuccess = (state, action) => {
    let { data } = action
    let list = [];
    list = [...data];
    const updatedState = {
        isLoading: false,
        productList: list,
    }
    return { ...state, ...updatedState }

};

const fetchingProductFailure = (state, action) => {

    return {
        ...state,
        ...{
            isLoading: false,
            error: action.data.error
        }
    }
};
const setShortingProduct = (state, action) => {

    return {
        ...state,
        shorting: { ...action.data }

    }
};

const setSearchProduct = (state, action) => {

    return {
        ...state,
        filter: { ...action.data }

    }
};




const reducer = (state = productState, action) => {
    switch (action.type) {
        case 'PRODUCT/FETCH': return fetchingProduct(state, action);
        case 'PRODUCT/FETCH_SUCCESS': return fetchingProductSuccess(state, action);
        case 'PRODUCT/FETCH_FAILURE': return fetchingProductFailure(state, action);
        case 'PRODUCT/SET_SHORTING': return setShortingProduct(state, action);
        case 'PRODUCT/SET_SEARCH': return setSearchProduct(state, action);

        default: return state;
    }
};


export function initializeStore(initialState = productState) {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(thunkMiddleware)
    )
}