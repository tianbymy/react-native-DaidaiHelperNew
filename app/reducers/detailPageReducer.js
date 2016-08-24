
import * as types from '../actions/actionTypes';

const initialState = {
    ClassDate: [],
    isLoading: true,
    isLoadMore: false,
    isRefreshing: false,
    isNoData: false,
};

let detailPageReducer = (state = initialState, action) => {
    // console.log(action)

    switch (action.type) {
        case types.FETCH_DETAILPAGE_LIST:
            return Object.assign({}, state, {
                isLoadMore: action.isLoadMore,
                isRefreshing: action.isRefreshing,
                isLoading: action.isLoading,
                isNoData: action.isNoData,
            })

        case types.RECEIVE_DETAILPAGE_LIST:
            // console.log(action);
            return Object.assign({}, state, {
                ClassDate: state.isLoadMore ? state.ClassDate.concat(action.classList) : action.classList,
                isLoading: false,
                isRefreshing: false,
                isNoData: action.isNoData,
            })

        default:
            return state;
    }
}

export default detailPageReducer;