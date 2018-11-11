import {actionType} from '../actionTypes';


/*************************************************************************
 * GET MAIN INFO ACTION CREATORS
 *************************************************************************/
export const mainInfoFetchRequest = (): IMainInfoFetchRequest => ({
    type: actionType.MAIN_INFO_FETCH_REQUEST
});

export const mainInfoFetchSuccess = (data: IMainInfoData[]): IMainInfoFetchSuccess => ({
    type: actionType.MAIN_INFO_FETCH_SUCCESS,
    payload: data
});

export const mainInfoFetchFail = (error: IMainInfoError): IMainInfoFetchFail => ({
    type: actionType.MAIN_INFO_FETCH_FAIL,
    payload: error
});


/*************************************************************************
 * ACTION CREATORS TYPE
 *************************************************************************/
/**
 * FETCH REQUEST
 */
export interface IMainInfoFetchRequest {
    type: actionType.MAIN_INFO_FETCH_REQUEST;
}

/**
 * FETCH SUCCESS
 */
export interface IMainInfoData{
    alias: string;
    status: string;
    globalId: number;
}

export interface IMainInfoFetchSuccess {
    type: actionType.MAIN_INFO_FETCH_SUCCESS;
    payload: IMainInfoData[];

}

/**
 * FETCH FAIL
 */
export interface IMainInfoError {
    message: string;
}


export interface IMainInfoFetchFail {
    type: actionType.MAIN_INFO_FETCH_FAIL;
    payload: IMainInfoError;
}

export type Action =
    IMainInfoFetchRequest |
    IMainInfoFetchSuccess |
    IMainInfoFetchFail;
