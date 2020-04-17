import React from 'react';

const UserDescription = (props) => {

	return (
		<div className="user-description">
			{props.userDescriptionData.map((item) => (
				<div>
					<div>User Name: {item.name}</div>
					<div>Date of Birth: {item.birthDay}</div>
					<div>City: {item.education}</div>
					<div>Education: {item.city}</div>
					<div>Web site: {item.webSite}</div>
				</div>
			))}
		</div>
	);
};

export default UserDescription;