import {IQuestInfoData, IFinishedLeafsData} from './actions';


const initialState: IStoreQuestInfo = {
    questInfo: {
        id: 0,
        name: '',
        alias: '',
        globalId: 0,
        platform: '',
        pathway: {
            status: '',
            name: '',
            leafs: []
        }
    },
    questInfoIsLoading: false,
    questInfoLoaded: false,
    questInfoNotFound: false,


    finishedLeafs: [],
    finishedLeafsIsLoading: false,
    finishedLeafsLoaded: false,

};

export default initialState;


export interface IStoreQuestInfo {
    readonly questInfo: IQuestInfoData;
    readonly questInfoIsLoading: boolean;
    readonly questInfoLoaded: boolean;
    readonly questInfoNotFound: boolean;

    readonly finishedLeafs: IFinishedLeafsData[];
    readonly finishedLeafsIsLoading: boolean;
    readonly finishedLeafsLoaded: boolean;
}
