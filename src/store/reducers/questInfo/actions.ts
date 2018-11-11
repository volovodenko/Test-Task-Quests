import {actionType} from '../actionTypes';


/*************************************************************************
 * GET QUEST INFO ACTION CREATORS
 *************************************************************************/
export const questInfoFetchRequest = (): IQuestInfoFetchRequest => ({
    type: actionType.QUEST_INFO_FETCH_REQUEST
});

export const questInfoFetchSuccess = (data: IQuestInfoData): IQuestInfoFetchSuccess => ({
    type: actionType.QUEST_INFO_FETCH_SUCCESS,
    payload: data
});

export const questInfoFetchFail = (error: IQuestInfoError): IQuestInfoFetchFail => ({
    type: actionType.QUEST_INFO_FETCH_FAIL,
    payload: error
});

export const questInfoNotFound = (): IQuestInfoNotFound => ({
    type: actionType.QUEST_INFO_NOT_FOUND,
});

export const clearQuestInfo = (): IClearQuestInfo => ({
    type: actionType.CLEAR_QUEST_INFO,
});


/*************************************************************************
 * GET FINISHED LEAFS ACTION CREATORS
 *************************************************************************/
export const finishedLeafsFetchRequest = (): IFinishedLeafsFetchRequest => ({
    type: actionType.FINISHED_LEAFS_FETCH_REQUEST
});

export const finishedLeafsFetchSuccess = (data: IFinishedLeafsData[]): IFinishedLeafsFetchSuccess => ({
    type: actionType.FINISHED_LEAFS_FETCH_SUCCESS,
    payload: data
});

export const finishedLeafsFetchFail = (error: IFinishedLeafsError): IFinishedLeafsFetchFail => ({
    type: actionType.FINISHED_LEAFS_FETCH_FAIL,
    payload: error
});





/*************************************************************************
 * GET QUEST INFO ACTION CREATORS TYPE
 *************************************************************************/
/**
 * FETCH REQUEST
 */
export interface IQuestInfoFetchRequest {
    type: actionType.QUEST_INFO_FETCH_REQUEST;
}

/**
 * FETCH SUCCESS
 */
export interface IQuestInfoData{
    readonly id: number;
    readonly name: string;
    readonly alias: string;
    readonly globalId: number;
    readonly platform: string;
    readonly pathway: {
        readonly status: string;
        readonly name: string;
        readonly leafs: string[];
    };
}

export interface IQuestInfoFetchSuccess {
    type: actionType.QUEST_INFO_FETCH_SUCCESS;
    payload: IQuestInfoData;

}

/**
 * FETCH FAIL
 */
export interface IQuestInfoError {
    message: string;
}


export interface IQuestInfoFetchFail {
    type: actionType.QUEST_INFO_FETCH_FAIL;
    payload: IQuestInfoError;
}


/**
 * QUEST INFO NOT FOUND
 */
export interface IQuestInfoNotFound {
    type: actionType.QUEST_INFO_NOT_FOUND;
}


/**
 * CLEAR QUEST INFO
 */
export interface IClearQuestInfo {
    type: actionType.CLEAR_QUEST_INFO;
}


/*************************************************************************
 * GET FINISHED LEAFS ACTION CREATORS TYPE
 *************************************************************************/
/**
 * FETCH REQUEST
 */
export interface IFinishedLeafsFetchRequest {
    type: actionType.FINISHED_LEAFS_FETCH_REQUEST;
}

/**
 * FETCH SUCCESS
 */
export interface IFinishedLeafsData{
    readonly questId: number;
    readonly name: string;
}

export interface IFinishedLeafsFetchSuccess {
    type: actionType.FINISHED_LEAFS_FETCH_SUCCESS;
    payload: IFinishedLeafsData[];
}

/**
 * FETCH FAIL
 */
export interface IFinishedLeafsError {
    message: string;
}


export interface IFinishedLeafsFetchFail {
    type: actionType.FINISHED_LEAFS_FETCH_FAIL;
    payload: IFinishedLeafsError;
}


/**
 * EXPORT ACTIONS CREATORS
 */
export type Action =
    IQuestInfoFetchRequest |
    IQuestInfoFetchSuccess |
    IQuestInfoFetchFail |
    IQuestInfoNotFound |
    IClearQuestInfo |
    IFinishedLeafsFetchRequest |
    IFinishedLeafsFetchSuccess |
    IFinishedLeafsFetchFail;
