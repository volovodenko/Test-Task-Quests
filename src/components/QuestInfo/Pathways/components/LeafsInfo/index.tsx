import React from 'react';

//styles
import styles from './styles.scss';

//components
import {Check, Times, LongArrowRight} from 'src/components/SVG';


export const LeafsInfo = ({leafs, finishedLeafs}: ILeafsInfoProps) =>
    <ul className={styles.leafsInfo}>
        {
            leafs.map((item, index) =>
                <li key={item}>
                    {
                        index !== 0
                            ? <LongArrowRight/>
                            : null
                    }
                    {
                        finishedLeafs.includes(item)
                            ? <Check/>
                            : <Times/>

                    }
                </li>
            )
        }
    </ul>
;


interface ILeafsInfoProps {
    leafs: string[];
    finishedLeafs: string[];
}
