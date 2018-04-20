export const GET_USER_INFO_REQUESR = 'user/GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'user/GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'user/GET_USER_INFO_FAIL';

function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST,
    };
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo,
    };
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL,
    };
}

export function getUserInfo() {
    return function (dispatch) {
        console.log(dispatch)
        return fetch('http://localhost:9000/api/user.json')
            .then(response => {
                return response.json();
            })
            .then(res => {
                console.log(res)
                setInterval(function () {
                    dispatch(getUserInfoSuccess(res));
                }, 2000)
            })
            .catch(() => {
                dispatch(getUserInfoFail());
            });
    };
}
