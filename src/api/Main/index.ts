import {Dispatch} from 'redux';


import {httpRequest, checkResponse} from 'src/helpers';
import * as actions from 'src/store/reducers/main/actions';


export const getMainInfo = () => (dispatch: Dispatch) => {
    dispatch(actions.mainInfoFetchRequest());

    httpRequest('getMainPageInfo')
        .then((res) => {
            if (checkResponse(res) && res.data.success) {
                dispatch(actions.mainInfoFetchSuccess(res.data.data));
            } else {
                console.error(res.data.message);
            }
        })
        .catch((err) => {
            dispatch(actions.mainInfoFetchFail(err.response.data.error));
        });
};
