import * as React from 'react';
interface IState {
    defaultConf : object
}


export default function DefaultConf(Component: any) {
    class ConfSettings extends React.Component<{}, IState> {
        constructor(props: any) {
            super(props);
            this.state = {
                defaultConf : {}
            }
        }
        componentDidMount() {
            
        }

        render() {
            return <Component defaultConfSettings={this.state.defaultConf} {...this.props} />
        }
    }
        return ConfSettings;
}