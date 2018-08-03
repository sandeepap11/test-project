import React, { Component } from 'react';
import CreateOrg from './CreateOrg';
import CreateBranch from './CreateBranch';
import CreateIndividual from './CreateIndividual';
import '../styles/CreatePartner.css';

class CreatePartner extends Component {

    state = {
        orgCreated: false,
        branchCreated: false,
        individualCreated: false
    };

    handleOrgCreate = (values) => {
        console.log(values);
        this.setState({ orgCreated: true });

    };

    handleBranchCreate = (values) => {
        console.log(values);
        this.setState({ branchCreated: true });

    };

    handleIndividualCreate = (values) => {
        console.log(values);
        this.setState({ individualCreated: true });

    };

    render() {

        const { orgCreated, branchCreated, individualCreated } = this.state;

        return (
            <div className="create-partner-main">
                <div className="create-partner-forms">
                    {
                        !orgCreated &&
                        <CreateOrg onCreateOrg={this.handleOrgCreate} />
                    }
                    {
                        orgCreated && !branchCreated &&
                        <CreateBranch onCreateBranch={this.handleBranchCreate} />
                    }
                    {
                        orgCreated && branchCreated && !individualCreated &&
                        <CreateIndividual onCreateIndividual={this.handleIndividualCreate} />
                    }
                    {
                        orgCreated && branchCreated && individualCreated &&
                        "All Details added. Here's your ID: A1S0-93ER-ED92-CS5P"
                    }
                </div>
                <div className="create-partner-status">
                    <h2>Create Org</h2><div>{orgCreated ? "YES" : "NO"}</div>
                    <h2>Create Branch</h2><div>{branchCreated ? "YES" : "NO"}</div>
                    <h2>Create Individual</h2><div>{individualCreated ? "YES" : "NO"}</div>
                </div>
            </div>
        );
    }
}

export default CreatePartner;