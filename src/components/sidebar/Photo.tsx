import myProfile from "../../assets/my-profile2.jpg";

const Photo = () => {
  return (
    <div class="avatar mt-10">
      <div class="w-32 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
        <img src={myProfile} />
      </div>
    </div>
  );
};

export default Photo;
