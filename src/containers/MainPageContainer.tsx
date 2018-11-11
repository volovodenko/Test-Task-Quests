import React from 'react';
import {connect} from 'react-redux';


import {IMainInfoData} from 'src/store/reducers/main/actions';
import {IGlobalStore} from 'src/store/rootReducer';
import {getMainInfo} from 'src/api';


export default (Controller: typeof React.Component) => {

    const mapStateToProps = (state: IGlobalStore) => ({
        mainInfoLoaded: state.main.mainInfoLoaded,
        mainInfoList: state.main.mainInfoList
    });

    const mapDispatchToProps = {
        getMainInfo
    };



    const MainPageContainer = (props: IPropsMainPageController) => <Controller {...props}/>;

    return connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
};


export interface IPropsMainPageController {
    getMainInfo: () => () => void;
    mainInfoList: IMainInfoData[];
    mainInfoLoaded: boolean;
}
