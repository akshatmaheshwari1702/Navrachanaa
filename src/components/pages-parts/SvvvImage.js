import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const SvvvImage = () => {
	const [image] = useState('./images/svvv.png');
	return (
		<div className='page__image'>
			<LazyLoadImage src={image} alt='about image' />
		</div>
	);
};
export default SvvvImage;
