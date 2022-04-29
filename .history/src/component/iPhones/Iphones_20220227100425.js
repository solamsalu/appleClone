import React, { useState, useEffect } from 'react';

const Iphones = () => {
	const [ product, setProducts ] = useState([]);

	useEffect(() => {
		fetch('/iphones.json').then((response) => response.json()).then((data) => {
			setProducts(data.products);
		});
	}, []);
	console.log(product);
	let order = 1;
	return (
		<section className=" container-fluid bold pt-4 text-center ">
			<h1 className="font-weight-bold pt-4 pl-4 black ">IPhones</h1>
			<h2 className="pt-2 pl-4 black mb-5">The Best for the Brightest.</h2>

			{product.map((el) => {
				let order1 = 1;
				let order2 = 2;
				if (order !== 1) {
					order1 = 2;
					order2 = 1;
					order--;
				} else {
					order++;
				}
				return (
					<div className="row mb-2">
						{/*Contains everything*/}
						<div className={`col-sm-12 col-md-6 pr-2 pt-5 align-self-center black-reverse order-${order1}`}>
							<h3 className="font-weight-bold pt-4 pl-4 pt-5">{el.product_name}</h3>
							<h4 className="font-weight-bold ">{el.product_brief_description}</h4>
							<h6>Starting at {el.starting_price}</h6>
							<p>{el.price_range}</p>
							<div className="links-wrapper ">
								<ul>
									<li className="list-inline-item ">
										<a className="learn_link" href={el.product_id}>
											Learn more
										</a>
									</li>
								</ul>
							</div>
						</div>

						{/*left side*/}
						<div className={`col-sm-12 col-md-6  order-${order2}`}>
							{/*right side*/}
							<img src={el.product_img} alt="iphone" height="650px" width="650px" />
						</div>
					</div>
				);
			})}
			{/*end of map*/}
		</section>
	);
};

export default Iphones;
