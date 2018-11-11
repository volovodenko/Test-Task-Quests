import {IMainInfoData} from './actions';


const initialState: IStoreMain = {
    mainInfoList: [],
    mainInfoIsLoading: false,
    mainInfoLoaded: false,
};

export default initialState;


export interface IStoreMain {
    readonly mainInfoList: IMainInfoData[];
    readonly mainInfoIsLoading: boolean;
    readonly mainInfoLoaded: boolean;
}
