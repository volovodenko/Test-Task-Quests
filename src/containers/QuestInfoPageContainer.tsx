import React from 'react';
import {connect} from 'react-redux';


import {IQuestInfoData, IFinishedLeafsData} from 'src/store/reducers/questInfo/actions';
import {IGlobalStore} from 'src/store/rootReducer';
import {getQuestInfo, clearQuestInfo, getFinishedLeafs} from 'src/api';


export default (Controller: typeof React.Component) => {

    const mapStateToProps = (state: IGlobalStore) => ({
        questInfoLoaded: state.questInfo.questInfoLoaded,
        questInfo: state.questInfo.questInfo,
        questInfoNotFound: state.questInfo.questInfoNotFound,

        finishedLeafs: state.questInfo.finishedLeafs,
        finishedLeafsLoaded: state.questInfo.finishedLeafsLoaded,
    });

    const mapDispatchToProps = {
        getQuestInfo, clearQuestInfo, getFinishedLeafs
    };


    const QuestInfoPageContainer = (props: IPropsQuestInfoPageController) => <Controller {...props}/>;

    return connect(mapStateToProps, mapDispatchToProps)(QuestInfoPageContainer);
};


export interface IPropsQuestInfoPageController {
    getQuestInfo: (alias: string) => () => void;
    clearQuestInfo: () => () => void;
    getFinishedLeafs: (questId: number) => () => void;

    questInfo: IQuestInfoData;
    questInfoLoaded: boolean;
    questInfoNotFound: boolean;

    finishedLeafs: IFinishedLeafsData[];
    finishedLeafsLoaded: boolean;

    match: {
        params: {
            alias: string;
        }
    };
}
