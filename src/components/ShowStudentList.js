import React, { Component } from 'react'
import axios from 'axios';
import {Table} from 'reactstrap';

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
					<Table>
						<thead>
							<tr>
								<th>S.N</th>
								<th>Student Name</th>
								<th>Student Address</th>
							</tr>
						</thead>
						<tbody>
							{items.map(item => (
								<tr key= {item.student_id}>
									<td>{item.student_id}</td>
									<td>{item.student_name}</td>
									<td>{item.student_address}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
		    )
		}
	}
}

export default ShowStudentList
