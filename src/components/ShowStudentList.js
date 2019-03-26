import React, { Component } from 'react'
import axios from 'axios';
// import {Table} from 'reactstrap';

// const getAPI = 'http://localhost/restapi/student/getStudent';

class ShowStudentList extends Component {
    state = {
		error: null,
		isLoaded: false,
		items: []
	}
	
	componentDidMount() {
		axios.get(`http://localhost/restapi/student/getStudent`)
			.then(res => {
				// console.log(res);
				this.setState({
					isLoaded:true,
					items: res.data
				})
			})
		// fetch('http://localhost/restapi/student/getStudent')
		// 	.then(res => res.json())
		// 	.then(json => {
		// 		this.setState({
		// 			isLoaded: true,
		// 			items: json
		// 		})
		// 		console.log(json);
		// 	});
	}

    
	render() {
		var{isLoaded, items} = this.state;
		if (!isLoaded) {
			return <div> loading...</div>
		} else {
			return (
				<div>
					<ul>
						{items.map(item => (
							<li key= {item.student_id}>
								Name: {item.student_name} | Email: {item.student_address} | {'rabin'}
							</li>
						))}
					</ul>
				</div>
		    )
		}
	}
}

export default ShowStudentList
