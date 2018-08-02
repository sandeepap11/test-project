import React, { Component } from 'react';
import serializeForm from 'form-serialize'
import '../styles/CreateBranch.css';

class CreateBranch extends Component {

    handleSubmit = (event)=> {

		event.preventDefault();
		const values = serializeForm(event.target, {hash:true});

		if(this.props.onCreateBranch)
			this.props.onCreateBranch(values);

	}

    render() {
        return (

            <div>
                <h1>Add Branch</h1>
                <form onSubmit={this.handleSubmit} className="create-branch-form">
                    <label className="create-branch-label">Branch Name:
                    <input className="create-branch-input" type="text" name="orgname" />
                    </label>
                    <label className="create-branch-label">Address Line 1:
                    <input className="create-branch-input" type="text" name="address1" />
                    </label>
                    <label className="create-branch-label">Address Line 2:
                    <input className="create-branch-input" type="text" name="adrress2" />
                    </label>
                    <label className="create-branch-label">Country:
                    <input className="create-branch-input" type="text" name="country" />
                    </label>
                    <button className="create-branch-submit">Add</button>
                </form>

            </div>

        );
    }
}

export default CreateBranch;