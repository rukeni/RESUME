import Photo from './Photo';

const Profile = () => {
	return (
		<div class='flex flex-col justify-center items-center'>
			<Photo />
			<h3 class='font-bold text-xl text-black mt-6'>Yang Seung Min(Anderson)</h3>
			<p
				class='my-2 mx-0 font-sans text-base font-light leading-4 text-center text-neutral-400'
				style='text-shadow: none;'>
				Frontend Developer
			</p>
		</div>
	);
};

export default Profile;
