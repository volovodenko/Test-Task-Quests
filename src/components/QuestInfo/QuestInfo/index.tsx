import React from 'react';

//styles
import styles from './styles.scss';

//types
import {IQuestInfoData} from 'src/store/reducers/questInfo/actions';


export const QuestInfo = ({questInfo}: IQuestInfoProps) => (
    <section className={styles.questInfo}>
        <ul>
            <li>
                <div>Build ID</div>
                <div>{questInfo.globalId}</div>
            </li>
            <li>
                <div>Platform</div>
                <div>{questInfo.platform}</div>
            </li>
            <li>
                <div>Quest Name</div>
                <div>{questInfo.name}</div>
            </li>
        </ul>
    </section>
);


export interface IQuestInfoProps {
    questInfo: IQuestInfoData;
}
