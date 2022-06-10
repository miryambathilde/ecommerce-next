import React from 'react';
import Link from 'next/link';

const HeroBanner=() => {
	return (
		<div className="hero-banner-container">
			<div>
				<p className="beats-solo">SMALL TEXT</p>
				<h3>Mid Text</h3>
				<img className="hero-banner-image" src="" alt="headphone"></img>
			</div>

			<div>
				<Link href="/product/ID">
					<button type="button">BUTTON TEXT</button>
				</Link>

				<div className="desc">
					<h5>Description</h5>
					<p>Description</p>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;