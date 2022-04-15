import myProfile from '../../assets/my-profile.jpeg';

const Photo = () => {
	return (
		<div class='avatar mt-10'>
			<div class='w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
				<img src={myProfile} />
			</div>
		</div>
	);
};

export default Photo;
