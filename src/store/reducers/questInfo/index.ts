import initialState, {IStoreQuestInfo} from './initialState';
import {actionType} from '../actionTypes';
import {Action} from './actions';


export const questInfo = (stateStore: IStoreQuestInfo = initialState, action: Action): IStoreQuestInfo => {

    switch (action.type) {

        /*************************************************************************
         * GET QUEST INFO
         *************************************************************************/
        case actionType.QUEST_INFO_FETCH_REQUEST:
            return {
                ...stateStore,
                questInfoIsLoading: true,
            };


        case actionType.QUEST_INFO_FETCH_SUCCESS:
            return {
                ...stateStore,
                questInfo: action.payload,
                questInfoIsLoading: false,
                questInfoLoaded: true
            };


        case actionType.QUEST_INFO_FETCH_FAIL:
            return {
                ...stateStore,
                questInfoIsLoading: false
            };


        case actionType.QUEST_INFO_NOT_FOUND:
            return {
                ...stateStore,
                questInfoIsLoading: false,
                questInfoNotFound: true
            };





        /*************************************************************************
         * GET FINISHED LEAFS
         *************************************************************************/
        case actionType.FINISHED_LEAFS_FETCH_REQUEST:
            return {
                ...stateStore,
                finishedLeafsIsLoading: true,
            };


        case actionType.FINISHED_LEAFS_FETCH_SUCCESS:
            return {
                ...stateStore,
                finishedLeafs: action.payload,
                finishedLeafsIsLoading: false,
                finishedLeafsLoaded: true
            };


        case actionType.FINISHED_LEAFS_FETCH_FAIL:
            return {
                ...stateStore,
                finishedLeafsIsLoading: false
            };


        /*************************************************************************
         * CLEAR QUEST INFO
         *************************************************************************/
        case actionType.CLEAR_QUEST_INFO:
            return {
                ...stateStore,
                questInfo: initialState.questInfo,
                questInfoLoaded: false,
                questInfoNotFound: false,

                finishedLeafs: [],
                finishedLeafsLoaded: false
            };


        /****************************************************************************/

        default:
            return stateStore;
    }

};
