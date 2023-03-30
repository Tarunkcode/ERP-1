import * as React from 'react';
import { store2 } from '../../Redux/config/config.reducer';

import useFetch from '../Hooks/useFetch';
interface IProps {
    location: any;
}
interface IState {
    defRoleMaster: any
}
export default function RoleMasterLoadDetails(Component: any) {
    let api = useFetch();
    class RoleDefault extends React.Component<IProps, IState> {
        constructor(props: any) {
            super(props);
            this.state = {
                defRoleMaster: {},

            }
        }

        routeObj = this.props.location.state;
        defInitStateObj = {}
        AlterLoadedData = (obj: object) => {
            this.defInitStateObj = { ...this.defInitStateObj, ...obj }
            var newObj = this.defInitStateObj;
            return newObj;
        }
        loadroleMaster = async () => {
            let url = `/api/RoleMasterModify?Code=${this.props.location.state.code}`;
            try {
                let { res, got } = await api(url, "GET", '');
                if (res.status == 200) {
                    this.setState({ defRoleMaster: got.data[0] });
                    this.defInitStateObj = { ...this.state.defRoleMaster }
                } else {

                }
            } catch (err) {
                alert(err);
            }
        }
        componentDidMount() {
            store2.getState().roleMaster = []
            if (!this.routeObj) { }
            else {

                this.loadroleMaster();
            }

        }
        render() {
            return (
                <Component api={api} defRoleMaster={this.state.defRoleMaster} AlterLoadedData={this.AlterLoadedData.bind(this)} gettingVirtualCode={(!this.routeObj) ? 0 : parseInt(this.routeObj.code)} {...this.props} />
            )
        }
    }
    return RoleDefault;
}