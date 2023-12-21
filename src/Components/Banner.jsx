import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Button } from "@nextui-org/react";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
        >
            <div className='absolute' data-src="https://media.discordapp.net/attachments/1163919577130999870/1177590689429729351/R.png?ex=658ebf4a&is=657c4a4a&hm=43e44e7e54f0bafe545963c11364d5ef18fca5c6c18f7e1e2852b7903a996fee&=&format=webp&quality=lossless&width=741&height=417">
                <Button className='reletive' color="primary">
                    Let's Explore
                </Button>
            </div>
            <div data-src="https://media.discordapp.net/attachments/1163919577130999870/1177585828596289607/R.png?ex=658ebac4&is=657c45c4&hm=d124fdc887f62591b16209a873cfc2ad49900c23c5b45b5c1a368a4c1e2285c4&=&format=webp&quality=lossless&width=899&height=417">
                <Button className='reletive' color="primary">
                    Let's Explore
                </Button>
            </div>
            <div data-src="https://media.discordapp.net/attachments/1163919577130999870/1177593067478458429/TipstoMakeaCareerasaGameDeveloper-660x347.png?ex=658ec181&is=657c4c81&hm=99e00ef3eea287255293a1e45ccd35efd167171d5d068b3ea7bf5d9a77324fd7&=&format=webp&quality=lossless">
                <Button className='reletive' color="primary">
                    Let's Explore
                </Button>
            </div>
        </AutoplaySlider>
    );
};

export default Banner;