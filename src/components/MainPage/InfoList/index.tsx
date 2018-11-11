import React from 'react';
import {Link} from 'react-router-dom';


//types
import {IMainInfoData} from 'src/store/reducers/main/actions';

//styles
import styles from './styles.scss';

//components
import {Status} from './components/Status';


export const InfoList = ({mainInfoList}: IPropsInfoList) => (
    <ul className={styles.infoList}>
        {
            mainInfoList.map(item => (
                <li key={item.alias}>
                    <div className={styles.alias}>
                        <span>{item.alias}</span>
                    </div>
                    <div className={styles.status}>
                        <Link to={`/quest-info/${item.alias}`}>
                            <span><Status status={item.status}/></span>
                        </Link>
                    </div>
                </li>
            ))
        }
    </ul>
);

interface IPropsInfoList {
    mainInfoList: IMainInfoData[];
}
