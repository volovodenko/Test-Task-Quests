import {Dispatch} from 'redux';


import {httpRequest, checkResponse} from 'src/helpers';
import * as actions from 'src/store/reducers/questInfo/actions';


/*************************************************************************
 * GET QUEST INFO
 *************************************************************************/
export const getQuestInfo = (alias: string) => (dispatch: Dispatch) => {
    dispatch(actions.questInfoFetchRequest());

    httpRequest(`getGeneralQuestsInfo/${alias}`)
        .then((res) => {
            checkResponse(res) && res.data.success
                ? dispatch(actions.questInfoFetchSuccess(res.data.data))
                : dispatch((actions.questInfoNotFound()));
        })
        .catch((err) => {
            dispatch(actions.questInfoFetchFail(err.response.data.error));
        });
};


export const clearQuestInfo = () => (dispatch: Dispatch) => {
    dispatch(actions.clearQuestInfo());
};


/*************************************************************************
 * GET FINISHED LEAFS
 *************************************************************************/
export const getFinishedLeafs = (questId: number) => (dispatch: Dispatch) => {
    dispatch(actions.finishedLeafsFetchRequest());

    httpRequest(`getFinishedQuestsLeafs/${questId}`)
        .then((res) => {
            checkResponse(res) && res.data.success
                ? dispatch(actions.finishedLeafsFetchSuccess(res.data.data))
                : console.error(res.data.message);
        })
        .catch((err) => {
            dispatch(actions.finishedLeafsFetchFail(err.response.data.error));
        });
};
