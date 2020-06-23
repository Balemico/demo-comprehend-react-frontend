import React, { useState, useEffect } from 'react';

import './Results.css';

const Results = (props) => {
	const { results, isLoading } = props;

	return (
		<div className='interface__results'>
			<div className="results__content">
				{isLoading && <h3>Loading results...</h3>}
				{results && (
					<div className="results__list">
						<div className="results__list__item lang">Language: {results.language}</div>
						<div className="results__list__item sentiment">Sentiment: {results.sentiment}</div>

						{results.entities.length > 0 &&
							<div className="results__list__item entities">
								<div className="results__entities">
									Entities:
									<ul className="results__entities__list">
										{results.entities.map((entity, i) =>
											<li className="results__entity" key={i}>
												<span className="results__entity__text">{entity.Text}</span>
												<span className="results__entity__type">{entity.Type}</span>
											</li>)
										}
									</ul>
								</div>
							</div>
						}



					</div>
				)}
			</div>
		</div>
	);
};

export default Results;
