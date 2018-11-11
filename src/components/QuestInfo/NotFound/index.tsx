import React from 'react';


//styles
import styles from './styles.scss';

//components
import {CalendarTimes} from 'src/components/SVG';


export const NotFound = () => (
    <div className={styles.notFound}>
        <div>
            <CalendarTimes/>
        </div>
        <h1>Quest info not found</h1>
        <p>For more information, please contact the developers.</p>
    </div>
);
