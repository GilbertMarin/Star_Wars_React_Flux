import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="dropdown pr-5">
			<a
				className="btn btn-primary dropdown-toggle"
				href="#"
				role="button"
				id="dropdownMenuLink"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Favorites <span className="badge badge-secondary">{store.favorites.length}</span>
			</a>

			<div className="dropdown-menu">
				{store.favorites.length == 0 ? (
					<a className="dropdown-item text-center">(empty)</a>
				) : (
					store.favorites.map((item, index) => {
						let itemID = store.home.map(item => item.name).indexOf(item);

						return (
							<a className="dropdown-item" key={index}>
								<Link to={itemID !== -1 ? "/people/" + itemID : "/planet/" + itemID} key={index}>
									{item}{" "}
								</Link>
								<span onClick={() => actions.removeFavorite(index)}>
									<i className="fas fa-trash-alt float-right" />
								</span>
							</a>
						);
					})
				)}
			</div>
		</div>
	);
};
export const FavoritesList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h3 className="text-danger">Favorites List</h3>
			{store.favorites.length === 0 ? (
				<p className="text-muted">No favorites selected</p>
			) : (
				<div className="bg-light">
					{store.favorites.map((item, index) => {
						let itemID = store.home.map(item => item.name).indexOf(item);

						return (
							<Link to={itemID !== -1 ? "/people/" + itemID : "/planet/" + itemID} key={index}>
								<button className="btn btn-outline-success m-2">{item}</button>
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
};
