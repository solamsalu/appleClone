import React, { useState, useEffect } from 'react';

const Iphones = () => {
	const [ product, setProducts ] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/iPhones').then((response) => response.json()).then((data) => {
			setProducts(data.products);
		});
	}, []);
	console.log(product);

	return (
		<section className=" container-fluid white bold ppt-4 ">
			<div className="row ">
				{product.map((el) => {
					return <div className="col-sm-12 col-md-6"> </div>;
				})}{' '}
				{/*end of map*/}
			</div>
		</section>
	);
};

export default Iphones;
