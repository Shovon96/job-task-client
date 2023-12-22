// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import 'react-awesome-slider/dist/styles.css';
// import { Button } from "@nextui-org/react";

// const AutoplaySlider = withAutoplay(AwesomeSlider);

// const Banner = () => {
//     return (
//         <AutoplaySlider
//             play={true}
//             cancelOnInteraction={false} // should stop playing on user interaction
//             interval={3000}
//         >
//             <div className='absolute' data-src="https://media.discordapp.net/attachments/1163919577130999870/1177590689429729351/R.png?ex=658ebf4a&is=657c4a4a&hm=43e44e7e54f0bafe545963c11364d5ef18fca5c6c18f7e1e2852b7903a996fee&=&format=webp&quality=lossless&width=741&height=417">
//                 <Button className='reletive' color="primary">
//                     Let's Explore
//                 </Button>
//             </div>
//             <div data-src="https://media.discordapp.net/attachments/1163919577130999870/1177585828596289607/R.png?ex=658ebac4&is=657c45c4&hm=d124fdc887f62591b16209a873cfc2ad49900c23c5b45b5c1a368a4c1e2285c4&=&format=webp&quality=lossless&width=899&height=417">
//                 <Button className='reletive' color="primary">
//                     Let's Explore
//                 </Button>
//             </div>
//             <div data-src="https://media.discordapp.net/attachments/1163919577130999870/1177593067478458429/TipstoMakeaCareerasaGameDeveloper-660x347.png?ex=658ec181&is=657c4c81&hm=99e00ef3eea287255293a1e45ccd35efd167171d5d068b3ea7bf5d9a77324fd7&=&format=webp&quality=lossless">
//                 <Button className='reletive' color="primary">
//                     Let's Explore
//                 </Button>
//             </div>
//         </AutoplaySlider>
//     );
// };

// export default Banner;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="relative top-0">
      <img className="h-[90vh] w-full" src='https://media.discordapp.net/attachments/1177886803424976896/1187705575916703764/422a378b65f64cb49771167fa2d611d4.png?ex=6597dc03&is=65856703&hm=ce7ff3c16c24e4b5a04bda96421f4a109c199c51e8af2762e47501e3c8d669e5&=&format=webp&quality=lossless&width=1025&height=342' alt="banner image" />
      <div className=" flex flex-col justify-center text-black font-bold absolute lg:bottom-1/3 bottom-3 md:bottom-1/4 left-3 lg:left-12 md:left-5 w-1/3 ">
        <h3 className="text-center lg:text-3xl flex ">
          Effortless Productivity with TechnoVision Your Ultimate Task Management
          Solution
        </h3>
        {user ? (
          <button className="py-[6px] px-3 rounded-md text-base md:text-xl bg-blue-600 mt-3 text-white">
            <Link to={"/dashboard"}>Let's Explore</Link>
          </button>
        ) : (
          <button className="py-[6px] px-3 rounded-md text-base md:text-xl bg-blue-600 mt-3 text-white">
            <Link to={"/login"}>Let's Explore</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;