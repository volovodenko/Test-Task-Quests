import {Component, ReactNode} from 'react';

//type data
import {IMainInfoData} from 'src/store/reducers/main/actions';

//container
import MainPageContainer,
{IPropsMainPageController} from 'src/containers/MainPageContainer';


export default (View: (props: IPropsView) => ReactNode) => {


    class MainPageController extends Component<IPropsMainPageController> {

        constructor(props: IPropsMainPageController) {
            super(props);

            this.props.mainInfoLoaded || this.props.getMainInfo();
        }


        render() {
            const props: IPropsView = {
                mainInfoList: this.props.mainInfoList
            };

            return View(props);
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/

    }

    return MainPageContainer(MainPageController);

};


export interface IPropsView {
    mainInfoList: IMainInfoData[];
}
