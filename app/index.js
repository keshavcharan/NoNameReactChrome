import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OptionMenu from './reactComponents/optionsMenu.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	render() {
		return(
				<Form id="nonameform" action="running.html" method="POST">
					<Form.Group controlId="inputarea">
						<Form.Label>NEXT, I wanna complete</Form.Label>
					</Form.Group>
					<Form.Group>
						<Form.Control as="textarea" rows="3"/>
					</Form.Group>
					<Form.Group>
						<Form.Label>in</Form.Label>
					</Form.Group>
					<Form.Group>
						<Form.Control id="hours_val" type="text" placeholder="1"/>
						<OptionMenu/>
					</Form.Group>
					<Form.Group sm={{ span: 10, offset: 2}}>
						<ButtonToolbar>
							<Button variant="success" type="submit" > Set </Button>
						</ButtonToolbar>
					</Form.Group>					
				</Form>
		) 
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))