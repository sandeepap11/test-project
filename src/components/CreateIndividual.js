import React, { Component } from 'react';
import serializeForm from 'form-serialize'
import '../styles/CreateIndividual.css';

class CreateIndividual extends Component {

    handleSubmit = (event)=> {

		event.preventDefault();
		const values = serializeForm(event.target, {hash:true});

		if(this.props.onCreateIndividual)
			this.props.onCreateIndividual(values);

	}

    render() {
        return (

            <div>
                <h1>Add Individual</h1>
                <form onSubmit={this.handleSubmit} className="create-individual-form">
                    <label className="create-individual-label">User Name:
                    <input className="create-individual-input" type="text" name="orgname" />
                    </label>
                    <label className="create-individual-label">Email Address:
                    <input className="create-individual-input" type="email" name="email" />
                    </label>
                    <label className="create-individual-label">Address Line 1:
                    <input className="create-individual-input" type="text" name="address1" />
                    </label>
                    <label className="create-individual-label">Address Line 2:
                    <input className="create-individual-input" type="text" name="adrress2" />
                    </label>
                    <label className="create-individual-label">Country:
                    <input className="create-individual-input" type="text" name="country" />
                    </label>
                    <button className="create-individual-submit">Add</button>
                </form>

            </div>

        );
    }
}

export default CreateIndividual;