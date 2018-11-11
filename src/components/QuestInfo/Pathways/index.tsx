import React from 'react';

//styles
import styles from './styles.scss';

//types
import {IQuestInfoData} from 'src/store/reducers/questInfo/actions';
import {LeafsInfo} from './components/LeafsInfo';


export const Pathways = ({questInfo, finishedLeafs, finishedLeafsLoaded}: IQuestInfoProps) => (
    <section className={styles.pathways}>
        <h1>Pathways</h1>
        <ul>
            <li>
                <div>Status</div>
                <div><span>{questInfo.pathway.status}</span></div>
            </li>
            <li>
                <div>Path name</div>
                <div><span>{questInfo.pathway.name}</span></div>
            </li>
            <li>
                <div>LeafsInfo</div>
                <div>
                    {
                        finishedLeafsLoaded
                            ?
                            LeafsInfo({
                                leafs: questInfo.pathway.leafs,
                                finishedLeafs
                            })
                            : <span>&nbsp;</span>
                    }
                </div>
            </li>
        </ul>
    </section>
);


export interface IQuestInfoProps {
    questInfo: IQuestInfoData;

    finishedLeafsLoaded: boolean;
    finishedLeafs: string[];
}
