import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import { Container, Card, Col, Row, Button } from "react-bootstrap";

import "../../styles/demo.scss";

export const Generic = () => {
	let { value } = useParams();

	console.log(value);
	const { store, actions } = useContext(Context);
	console.log(store);
	useEffect(() => {
		actions.getAllData(value);
	}, []);
	return (
		<Container className="border border-dark">
			<Row>
				<div className="carousel slide" data-ride="carousel">
					{store[value] && store[value].length > 0 ? (
						store[value].map((
							element,
							index //console.log("elemento: ", element)
						) => (
							<Card key={index}>
								<div className="card-body col-sm bg-dark">
									<div>
										<img
											className="card-img-top w-25 col-sm"
											src="https://as.com/meristation/imagenes/2019/12/19/noticias/1576748977_381724_1576749029_noticia_normal.jpg"
										/>
									</div>
									<h2>{value == "films" ? element.properties.title : element.name}</h2>
									<div>
										<Button>Details</Button>
									</div>
								</div>
							</Card>
						))
					) : (
						<h1>Loading...</h1>
					)}
				</div>
			</Row>
		</Container>
	);
};
