import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import ShowStudentList from './components/ShowStudentList';

class App extends Component {
	render() {
    	return (
      		<div>
				<AppNavbar />
				<Container>
					<ShowStudentList />
				</Container>
      		</div>
    	);
  	}
}

export default App;
