import React, { Component } from 'react';
import TabNavigation from './TabNavigation';
import Management from './Management';

class MainLayout extends Component {
    render() {

        const tabs = [{
            name: "Exhibit Items",
            tab: "Tab 1"
        },
        {
            name: "Validate Items",
            tab: "Tab 2"
        },
        {
            name: "Manage",
            tab: <Management/>
        },
        {
            name: "Bread Basket",
            tab: "Tab 3"
        },
       
        {
            name: "Admin Page",
            tab: "Tab 5"
        }];

        return (

            <TabNavigation
                colors={{
                    bodyColor: "purple",
                    textColor: "white",
                    selectColor: "white"
                }} tabs={tabs} />

        );
    }
}

export default MainLayout;