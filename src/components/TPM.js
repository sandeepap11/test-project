import React, { Component } from 'react';
import Card from './Card';
import '../styles/TPM.css';
import CreatePartner from './CreatePartner';

class TPM extends Component {

    state = {
        selected: 100
    };

    onSelect = (selected) => this.setState({ selected });

    goBack = () => this.setState({ selected: 100 });

    render() {

        const cards = [
            { action: "Create", description: "Create a Partner", screen: <CreatePartner/> },
            { action: "Edit", description: "Edit a Partner", screen: "Edit" },
            { action: "View", description: "View all Partners", screen: "View" },
        ];

        const { selected } = this.state;

        return [
            <div key="1">
                {
                    (selected === 100) && <div className="tpm-main">
                        {
                            cards.map(
                                (card, index) => (
                                    <li className="tpm-card" key={index} onClick={() => this.onSelect(index)}>
                                        <Card action={card.action} description={card.description} />
                                    </li>
                                )
                            )
                        }

                    </div>
                }
            </div>,
            <div key="2">
            {selected !== 100 && <button onClick={this.goBack}>Back</button>}
                {selected !== 100 && cards[selected].screen}
            </div>
        ];
    }
}

export default TPM;