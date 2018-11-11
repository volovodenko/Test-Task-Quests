import {combineReducers} from 'redux';


import {main, questInfo} from './reducers';
import {IStoreMain} from './reducers/main/initialState';
import {IStoreQuestInfo} from './reducers/questInfo/initialState';



export default combineReducers<IGlobalStore>(
    {
        main,
        questInfo
    }
);

export interface IGlobalStore {
    main: IStoreMain;
    questInfo: IStoreQuestInfo;
}

