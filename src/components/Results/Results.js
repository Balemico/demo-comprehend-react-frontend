import React, { useState, useEffect } from 'react';

import './Results.css';

const Results = (props) => {
	const { results, isLoading } = props;

	return (
		<div className='results'>
			<div className="results__content">
				{isLoading && <h3>Loading results...</h3>}
				{results && (
					<div className="results__list">
						<div className="results__list__item lang">Language: {results.language}</div>
						<div className="results__list__item sentiment">Sentiment: {results.sentiment}</div>
						<div className="results__list__item entities">
							{results.entities.length &&
								<div className="result__entities__wrap">
									Entities:
									<ul className="result__entities__list">
										{results.entities.map((entity, i) =>
											<li className="result__entities__entry" key={i}>{entity.Text}: {entity.Type}</li>)
										}
									</ul>
								</div>
							}
						</div>



					</div>
				)}
			</div>
		</div>
	);
};

export default Results;
