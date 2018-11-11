import React, {Fragment} from 'react';


//controller
import QuestInfoPageController, {IPropsView} from 'src/controllers/QuestInfoPageController';

//styles
import styles from './styles.scss';

//components
import {QuestInfo, Pathways} from 'src/components/QuestInfo';


const Component = ({questInfo, finishedLeafs, finishedLeafsLoaded}: IPropsView) => {
    return (
        <Fragment>
            <main className={styles.questInfoPage}>
                <h1>QuestInfo Page</h1>
                <QuestInfo questInfo={questInfo}/>
                <Pathways
                    questInfo={questInfo}
                    finishedLeafs={finishedLeafs}
                    finishedLeafsLoaded={finishedLeafsLoaded}
                />
            </main>
        </Fragment>
    );
};

export const QuestInfoPage = QuestInfoPageController(Component);
