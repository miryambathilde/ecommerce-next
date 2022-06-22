import React from 'react';
import Link from 'next/link';
import { urlFor } from "../lib/client";

const HeroBanner = ({ HeroBanner }) => {
	return (
		<div className="hero-banner-container">
			<div>
				<h2 className="beats-solo">{ HeroBanner.smallText }</h2>
				<h3>{ HeroBanner.midText }</h3>
				<h4>{ HeroBanner.largeText1 }</h4>
				<img className="hero-banner-image" src={ urlFor(HeroBanner.image) } alt="headphone"></img>
			</div>

			<div>
				<Link href={ `/product/${HeroBanner.product}` }>
					<button type="button">{ HeroBanner.buttonText }</button>
				</Link>

				<div className="desc">
					<h5>Designed to listen with total freedom</h5>
					<p>{ HeroBanner.desc }</p>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;