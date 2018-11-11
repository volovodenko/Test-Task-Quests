import initialState, {IStoreMain} from './initialState';
import {actionType} from '../actionTypes';
import {Action} from './actions';


export const main = (stateStore: IStoreMain = initialState, action: Action): IStoreMain => {

    switch (action.type) {

        case actionType.MAIN_INFO_FETCH_REQUEST:
            return {
                ...stateStore,
                mainInfoIsLoading: true
            };


        case actionType.MAIN_INFO_FETCH_SUCCESS:
            return {
                ...stateStore,
                mainInfoList: action.payload,
                mainInfoIsLoading: false,
                mainInfoLoaded: true
            };


        case actionType.MAIN_INFO_FETCH_FAIL:
            return {
                ...stateStore,
                mainInfoIsLoading: false
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

};
