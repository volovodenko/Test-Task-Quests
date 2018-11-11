import React from 'react';


//svg
import {Check, Times, Minus} from 'src/components/SVG';


export const Status = ({status}: IPropsStatus) => {
    switch (status) {
        case 'SUCCESS':
            return <Check/>;
        case 'CRASH':
            return <Times/>;
        case 'NO_DATA':
            return <Minus/>;
        default:
            return <Minus/>;
    }

};

interface IPropsStatus {
    status: string;
}
