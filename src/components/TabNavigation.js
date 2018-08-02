import React, { Component } from 'react';
import '../styles/TabNavigation.css';

class TabNavigation extends Component {

    state = {
        selected: 0
    };

    selectTab = (selected) => this.setState({ selected });

    render() {

        const { tabs, colors } = this.props;
        const { selected } = this.state;
        const navStyle = { backgroundColor: colors.bodyColor, color: colors.textColor };
        const selectStyle = {borderBottom: "2px white solid"};

        return [
            <nav key="1" style={navStyle}>
                <ul>
                    {tabs.map(
                        (tab, index) =>
                            <li key={index} style={index === selected ?  selectStyle : {}} onClick={() => this.selectTab(index)}>{tab.name}</li>
                    )}

                </ul>

            </nav>,
            <div key="2">
                {
                    tabs[selected].tab
                }
            </div>
        ];
    }
}

export default TabNavigation;