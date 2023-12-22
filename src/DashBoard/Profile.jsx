
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-200 flex-1">
      {/* <Helmet>
        <title>Profile | Dashboard</title>
      </Helmet> */}
      <div className="bg-white shadow-lg rounded-2xl md:w-3/5 w-3/4">
        <img
          alt="profile"
          src="https://media.discordapp.net/attachments/1177886803424976896/1187648488352268398/pngtree-gradient-blue-tech-banner-background-picture-image_1135120.png?ex=6597a6d9&is=658531d9&hm=bcfeea2bfbbdd4fadf5795d136e8fc94bffb622c67c5350b59102f419ce46449&=&format=webp&quality=lossless&width=1025&height=374"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="mt-2 text-base md:text-xl font-medium text-gray-800 ">
            User Id: {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-blue-500 ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-blue-500 ">
                  {user?.email}
                </span>
              </p>

              <div>
                <button className="bg-blue-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-blue-200 hover:text-blue-500 block mb-1">
                  Update Profile
                </button>
                <button className="bg-blue-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-blue-200 hover:text-blue-500">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;