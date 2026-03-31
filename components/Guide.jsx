import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/icons/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Your Trail Companion
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Navigate Any Trail with Confidence
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            With Hilink, you will never lose your way again. Our fully offline
            maps keep you on track even in areas with no internet coverage.
            Invite friends, plan group expeditions, and explore everything from
            valley floors to mountain summits together.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/images/boat.png"
          alt="scenic landscape"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/icons/meter.svg"
            alt="progress indicator"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Machu Picchu</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Starting Point</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Cusco Basecamp
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
