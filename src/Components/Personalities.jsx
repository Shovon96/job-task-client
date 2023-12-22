// import '../../Components/Styles/card.css';
// import '../../Components/Styles/buttons2.css';

const Personalities = () => {
  return (
    <div className="">
      <div className="flex pt-10 bg-blue-600 justify-center mx-auto">
        <h1 className="lg:text-3xl md:text-2xl text-white font-bold">
          Our WebSite Visitors
        </h1>
      </div>
      <div className="bg-blue-600 pb-10 pt-10 flex lg:flex-row md:flex-col flex-col">
        <div className="card">
          <figure className="px-10 pt-10">
            <img
              src="https://media.discordapp.net/attachments/1177886803424976896/1187726760473808916/software-developer-6521720_640.png?ex=6597efbe&is=65857abe&hm=761549e4eb9fe04279d987f94b81319265cff8191e7228342a64e4266aedcb82&=&format=webp&quality=lossless&width=625&height=417"
              alt="Shoes"
              className="rounded-xl w-[900px] h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">
              <button className="text-lg font-bold mt-4 shadow-xl shadow-gray-600 px-3 py-1 rounded-full">Developers</button>
            </h2>
          </div>
        </div>
        <div className="card">
          <figure className="px-10 pt-10">
            <img
              src="https://media.discordapp.net/attachments/1177886803424976896/1187730961992007721/pngtree-corporate-business-professional-team-png-image_2620011.png?ex=6597f3a8&is=65857ea8&hm=1b1afcc271143333ff0024259cc3778d3b9ac2884ebc2f7304d3c8971d0a8049&=&format=webp&quality=lossless&width=417&height=417"
              alt="Shoes"
              className="rounded-xl w-[900px] h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">
              <button className="text-lg font-bold mt-4 shadow-xl shadow-gray-600 px-3 py-1 rounded-full">Corporate Professionals</button>
            </h2>
          </div>
        </div>
        <div className="card">
          <figure className="px-10 pt-10">
            <img
              src="https://media.discordapp.net/attachments/1177886803424976896/1187732040641159189/handsome-male-client-signing-document-on-a-meeting-with-real-estate-agent.png?ex=6597f4a9&is=65857fa9&hm=7382d763eeecd11141de5e295033a5ba4e36e62e8b1a860da26e75ddd260593f&=&format=webp&quality=lossless"
              alt="Shoes"
              className="rounded-xl w-[900px] h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">
              <button className="text-lg font-bold mt-4 shadow-xl shadow-gray-600 px-3 py-1 rounded-full">Bankers</button>
            </h2>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Personalities;