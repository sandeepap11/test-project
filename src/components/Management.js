import React, { Component } from 'react';
import TabNavigation from './TabNavigation';
import TPM from './TPM';

class Management extends Component {
    render() {

        const tabs = [{
            name: "Conservative Rants",
            tab: "Tab 1"
        },
        {
            name: "Trusted Partner Management",
            tab: <TPM/>
        }];

        return (

            <TabNavigation
                colors={{
                    bodyColor: "blue",
                    textColor: "white",
                    selectColor: "white"
                }} tabs={tabs} />

        );
    }
}

export default Management;