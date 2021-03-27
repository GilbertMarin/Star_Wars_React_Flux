import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("store", store);
	return (
		<Container className="container-fluid">
			{store.home.map(([key, value], index) => {
				console.log(key, value);
				return (
					<div key={index} className=" text-center mt-5">
						<Col className="col-3 border border-dark">
							<h1>Go to {key}</h1>
							<p key={index}>{key}</p>
							<Link to={`/generic/${key}`}>
								<button className="btn btn-primary">GO {key}</button>
							</Link>
						</Col>
					</div>
				);
			})}
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</Container>
	);
};
