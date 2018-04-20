import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,
} from 'actions/user';

const initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: '',
};

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                isLoading: true,
                userInfo: {},
                errorMsg: '',
            };
        case GET_USER_INFO_SUCCESS:
            return {
                isLoading: false,
                userInfo: action.userInfo,
                errorMsg: '',
            };
        case GET_USER_INFO_FAIL:
            return {
                isLoading: false,
                userInfo: {},
                errorMsg: '请求错误',
            };
        default:
            return state;
    }
}
