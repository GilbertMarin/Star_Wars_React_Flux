import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { element } from "prop-types";
import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";
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
			<Row>
				{store.home && store.home.length > 0 ? (
					store.home.map((element, index) => (
						<Col key={index}>
							<br />
							<Card style={{ width: "18rem" }}>
								<Image
									src="https://i.pinimg.com/originals/30/6f/f9/306ff98466757b3a21f34283c4217eeb.jpg"
									rounded
									className="card-img-top"
								/>
								<Card.Body>
									<Card.Title>{element.properties} </Card.Title>
								</Card.Body>
							</Card>
						</Col>
					))
				) : (
					<h1>details loading... </h1>
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
