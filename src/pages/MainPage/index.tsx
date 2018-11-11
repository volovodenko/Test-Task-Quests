import React, {Fragment} from 'react';

//controller
import MainPageController, {IPropsView} from 'src/controllers/MainPageController';

//components
import {InfoList} from 'src/components/MainPage';

//styles
import styles from './styles.scss';


const Component = ({mainInfoList}: IPropsView) => (
    <Fragment>
        <main className={styles.mainPage}>
            <h1>Main Page</h1>
            <InfoList mainInfoList={mainInfoList}/>
        </main>
    </Fragment>
);


export const MainPage = MainPageController(Component);
