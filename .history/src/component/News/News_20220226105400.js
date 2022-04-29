import React from 'react';
import NewsAPI from './NewsAPI';
import YouTube from './Youtube';

function News() {
	return (
		<div className="News-Sec mt-2">
			<YouTube />
			<NewsAPI />
		</div>
	);
}

export default News;
