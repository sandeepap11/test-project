import React, { Component } from 'react';
import serializeForm from 'form-serialize'
import '../styles/CreateOrg.css';

class CreateOrg extends Component {

    handleSubmit = (event)=> {

		event.preventDefault();
		const values = serializeForm(event.target, {hash:true});

		if(this.props.onCreateOrg)
			this.props.onCreateOrg(values);

	}

    render() {
        return (

            <div>
                <h1>Add Organisation</h1>
                <form onSubmit={this.handleSubmit} className="create-org-form">
                    <label className="create-org-label">Organisation Name:
                    <input className="create-org-input" type="text" name="orgname" />
                    </label>
                    <label className="create-org-label">Address Line 1:
                    <input className="create-org-input" type="text" name="address1" />
                    </label>
                    <label className="create-org-label">Address Line 2:
                    <input className="create-org-input" type="text" name="adrress2" />
                    </label>
                    <label className="create-org-label">Country:
                    <input className="create-org-input" type="text" name="country" />
                    </label>
                    <button className="create-org-submit">Add</button>
                </form>

            </div>

        );
    }
}

export default CreateOrg;