import Photo from "./Photo";

const Profile = () => {
  return (
    <div class="flex flex-col items-center justify-center">
      <Photo />
      <h3 class="mt-6 text-xl font-bold text-black">
        Yang Seung Min(Anderson)
      </h3>
      <p
        class="text-neutral-400 my-2 mx-0 text-center font-sans text-base font-light leading-4"
        style="text-shadow: none;"
      >
        Frontend Developer
      </p>
    </div>
  );
};

export default Profile;
