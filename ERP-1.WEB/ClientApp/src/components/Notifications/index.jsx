import React, { Component } from 'react';

//import Switch from '@material-ui/core/Switch';
//import { MuiThemeProvider } from '@material-ui/core/styles';

import WebPush from './WebPush'
import { payloadFromSubscription } from './utility'

// TODO: chanee this application Server Public Key to yours
// and also PROTECT your secret key carefully.
const applicationServerPublicKey = "BP7FgSDH5nU1pGAmgWl9aB0yReRaA_lLA-asJdZlEwpEUBkQl5h047QDe7Kr8lgWh2HsyIEf3J3pPbAczkY2Fks"



class Notify extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subscriveUserEnabled: false,
            subscription: { endpoint: '' },
        }

        this.onWebPushToggle = this.onWebPushToggle.bind(this)
        this.onUpdateSubscriptionOnServer = this.onUpdateSubscriptionOnServer.bind(this)
        this.onSubscriptionFailed = this.onSubscriptionFailed.bind(this)
    }

    onWebPushToggle() {
        this.setState({
            subscriveUserEnabled: !this.state.subscriveUserEnabled,
        })
    }

    onUpdateSubscriptionOnServer(subscription) {
        console.log("onUpdateSubscriptionOnServer:", subscription)
        var payload = payloadFromSubscription(subscription)
        console.log("payload:", JSON.stringify(payload))
        this.setState({ subscription: subscription })
    }

    onSubscriptionFailed(error) {
        console.log("onSubscriptionFailed:", error)
    }

    render() {
        return (
            //<MuiThemeProvider theme={theme}>
            //    <div >
            //        <Switch
            //            checked={this.state.subscriveUserEnabled}
            //            onChange={() => this.onWebPushToggle()}
            //            name="Enable WebPush Notification"
            //            inputProps={{ 'aria-label': 'secondary checkbox' }}
            //        />
            //        <div> {this.state.subscription.endpoint} </div>
            //        <WebPush
            //            subscriveUserEnabled={this.state.subscriveUserEnabled}
            //            applicationServerPublicKey={applicationServerPublicKey}
            //            onSubscriptionFailed={this.onSubscriptionFailed}
            //            onUpdateSubscriptionOnServer={this.onUpdateSubscriptionOnServer}
            //        />
            //    </div>
            //</MuiThemeProvider>
            <>
            <div className="custom-control custom-switch m-0 p-0  col-5">
                <input type="checkbox" checked={this.state.subscriveUserEnabled} onChange={() => this.onWebPushToggle()} className="custom-control-input col-3" id="customSwitch5" name="Enable WebPush Notification"/>
                <label className="custom-control-label col-8" htmlFor="customSwitch5">is blocked</label>
                </div>
                <div> {this.state.subscription.endpoint} </div>
               <WebPush
                       subscriveUserEnabled={this.state.subscriveUserEnabled}
                       applicationServerPublicKey={applicationServerPublicKey}
                       onSubscriptionFailed={this.onSubscriptionFailed}
                       onUpdateSubscriptionOnServer={this.onUpdateSubscriptionOnServer}
                   />
            </>
        );
    }
}

export default Notify;
