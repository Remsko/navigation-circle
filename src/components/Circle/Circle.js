import React from 'react';

import './Circle.css';

const itemList = [
	{ title: 'Numero #1', description: 'Absolument !' },
	{ title: 'Numero #2', description: 'Certainment !' },
	{ title: 'Numero #3', description: 'Pas du tout !' },
	{ title: 'Numero #4', description: 'Sans doute !' },
	{ title: 'Numero #5', description: 'Evidemment !' },
	{ title: 'Numero #6', description: 'Parfaitement !' }
];

const Circle = props => {
	return (
		<div className='main'>
			<div className='navigation-circle'>
				{/* circle */}
				<ul className='navigation-circle__list'>
					{itemList.map((item, idx) => {
						const angle = (360 / itemList.length) * idx;
						return (
							<li
								key={idx}
								className='navigation-circle-list-item'
								style={{
									transform: `rotateZ(${angle}deg)`
								}}
							>
								<a
									href='/'
									className='navigation-circle-list-item__point'
								>
									<div
										className='navigation-circle-list-item__meta'
										style={{
											transform: `rotateZ(${90 -
												angle}deg)`
										}}
									>
										<h1 className='navigation-circle-list-item__title'>
											{item.title}
										</h1>
										<span className='navigation-circle-list-item__description'>
											{item.description}
										</span>
									</div>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Circle;
