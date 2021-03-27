import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { element } from "prop-types";
import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";

export const Details = () => {
	let { value, id } = useParams();
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllDetails(value, id);
	}, []);

	const goBack = () => {
		history.goBack();
	};

	console.log(store);
	return (
		<Container>
			<Row>
				{store.detail && store.detail.length > 0 ? (
					store.detail.map((element, index) => (
						<Col key={index}>
							<br />
							<Card style={{ width: "18rem" }}>
								<Image
									src="https://i.pinimg.com/originals/30/6f/f9/306ff98466757b3a21f34283c4217eeb.jpg"
									rounded
									className="card-img-top"
								/>
								<Card.Body>
									<Card.Title>{element.properties.director || element.description}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					))
				) : (
					<h1>Loading... </h1>
				)}
				<br />
			</Row>
			<br />
			<Link to="/">
				<Button variant="primary" onClick={() => goBack()}>
					Go back
				</Button>
			</Link>
		</Container>
	);
};
