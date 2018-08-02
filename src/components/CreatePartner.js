import React, { Component } from 'react';
import CreateOrg from './CreateOrg';
import CreateBranch from './CreateBranch';

class CreatePartner extends Component {

    state = {
        orgCreated: false,
        branchCreated: false,
        userCreated: false
    };

    handleOrgCreate = (values) => {
        console.log(values);
        this.setState({ orgCreated: true });

    };

    handleBranchCreate = (values) => {
        console.log(values);
        this.setState({ branchCreated: true });

    };

    render() {

        const { orgCreated, branchCreated, userCreated } = this.state;

        return (
            <div>
                <div>
                    {!orgCreated && <CreateOrg onCreateOrg={this.handleOrgCreate} />}
                    {orgCreated && !branchCreated && <CreateBranch onCreateBranch={this.handleBranchCreate} />}
                </div>
                <div>
                    <h2>Create Org</h2><div>{orgCreated ? "YES" : "NO"}</div>
                    <h2>Create Branch</h2><div>{branchCreated ? "YES" : "NO"}</div>
                    <h2>Create User</h2><div>{userCreated ? "YES" : "NO"}</div>
                </div>
            </div>
        );
    }
}

export default CreatePartner;