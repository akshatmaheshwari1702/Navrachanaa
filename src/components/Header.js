import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router-dom';
const Header = ({ heading, paragraph, children, image, subparagraph }) => {
	const [state] = useState({
		video: '/images/video.mp4',
		poster: '/images/poster.jpg',
		logo: '/images/navarachnaa.png',
	});
	const { push } = useHistory();
	const goToHome = () => {
		push('/');
	};
	return (
		<div className='header'>
			<div className='container pr'>
				<div className='header__logo'>
					<LazyLoadImage src={state.logo} alt='logo' onClick={goToHome} />
				</div>
			</div>
			<div className='header__video'>
				{image ? (
					<LazyLoadImage src={image} alt={image} />
				) : (
					<video
						src={state.video}
						autoPlay
						loop
						muted
						poster={state.poster}></video>
				)}
			</div>
			<div className='header__contents'>
				<div className='container'>
					<div className='header__contents__text'>
						<div className='header__contents__text__child'>
							<h1 className='header__contents__text__child__h1'>{heading}</h1>
							<p className='header__contents__text__child__p'>{paragraph}</p>
							<p className='header__contents__text__child__p'>{subparagraph}</p>
							<div className='header__contents__text__child__link'>
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
