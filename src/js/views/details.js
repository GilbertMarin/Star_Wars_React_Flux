import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { element } from "prop-types";
import { Container, Button, Card, Row, Col, Image, Jumbotron } from "react-bootstrap";
import { getAllDetails } from "../component/functGetDetails";

export const Details = () => {
	let { value, uid } = useParams();
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllDetails(value, uid);
	}, []);

	const goBack = () => {
		history.goBack();
	};

	console.log(store);
	return (
		<Container>
			<Jumbotron>
				<h1>Tomela con Leche</h1>

				<ul>
					{store.home.map((element, index) => {
						return (
							<li key={index}>
								<span>{element} </span>
							</li>
						);
					})}
				</ul>
			</Jumbotron>
			<br />
			<Link to="/">
				<Button variant="primary" onClick={() => goBack()}>
					Go back
				</Button>
			</Link>
		</Container>
	);
};
