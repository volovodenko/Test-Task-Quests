import {Component, ReactNode} from 'react';

//types
import {IQuestInfoData} from 'src/store/reducers/questInfo/actions';

//container
import QuestInfoPageContainer,
{IPropsQuestInfoPageController} from 'src/containers/QuestInfoPageContainer';

//components
import {NotFound} from 'src/components/QuestInfo';


export default (View: (props: IPropsView) => ReactNode) => {


    class QuestInfoPageController extends Component<IPropsQuestInfoPageController> {

        constructor(props: IPropsQuestInfoPageController) {
            super(props);

            const alias = this.props.match.params.alias;
            this.props.getQuestInfo(alias);
        }


        componentWillUnmount() {
            this.props.clearQuestInfo();
        }


        componentDidUpdate(){
            if (this.props.questInfoLoaded && !this.props.finishedLeafsLoaded) {
                this.props.getFinishedLeafs(this.props.questInfo.id);
            }
        }


        render() {
            if (this.props.questInfoNotFound) {
                return NotFound();
            }

            const props: IPropsView = {
                questInfo: this.props.questInfo,

                finishedLeafsLoaded: this.props.finishedLeafsLoaded,
                finishedLeafs: this.props.finishedLeafsLoaded
                    ? this.props.finishedLeafs.map(item => item.name)
                    : []
            };

            return this.props.questInfoLoaded ? View(props) : null;
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/

    }

    return QuestInfoPageContainer(QuestInfoPageController);

};


export interface IPropsView {
    questInfo: IQuestInfoData;

    finishedLeafsLoaded: boolean;
    finishedLeafs: string[];
}
