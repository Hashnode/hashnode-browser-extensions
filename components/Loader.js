import React, { Component } from 'react'

const Loader = () => {
	return (
		<div className="loading-wrapper">
			<div className="loading-card">
				<div className="rect big"></div>
				<div className="rect"></div>
				{/* <div className="rect"></div>
				<div className="rect"></div> */}
			</div>
			<div className="loading-card">
				<div className="rect big"></div>
				<div className="rect"></div>
				{/* <div className="rect"></div>
				<div className="rect"></div> */}
			</div>
			<div className="loading-card">
				<div className="rect big"></div>
				<div className="rect"></div>
				{/* <div className="rect"></div>
				<div className="rect"></div> */}
			</div>
		</div>
	)
}

export default Loader;