import React from "react";

const WhyYoga = () => {
  return (
    <section className="mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[40px] font-extrabold tracking-tight text-gray-900">
            Why <span className="text-[#f86454]">YogaYatra</span>?
          </h2>
          <p className="max-w-2xl mx-auto font-poppins text-gray-500">
            Discover the many benefits of practicing yoga.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 text-center">
            <div className="flex flex-col items-center">
              <img src="/assets/reduce-stress.svg" alt="reduce-stress" />
              <dt className="text-[22px] leading-6 font-medium mt-4">
                Reduce Stress and Anxiety
              </dt>
              <dd className="mt-4 text-[14px] font-poppins text-gray-500">
                Practicing yoga can help reduce stress and anxiety by promoting
                relaxation and reducing tension in the body and mind.
              </dd>
            </div>

            <div className="flex flex-col items-center">
              <img src="/assets/flexibility.svg" alt="flexibility" />
              <dt className="text-[22px] leading-6 font-medium mt-4">
                Increase Flexibility and Strength
              </dt>
              <dd className="mt-4 text-[14px] font-poppins text-gray-500">
                Yoga helps increase flexibility and strength by working on
                different muscle groups and improving joint mobility.
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/peace.svg" alt="peace" />
              <dt className="text-[22px] leading-6 font-medium mt-4">
                Improve Heart Health
              </dt>
              <dd className="mt-4 text-[14px] font-poppins text-gray-500">
                Yoga can help lower blood pressure and reduce the risk of heart
                disease by improving circulation and promoting relaxation.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WhyYoga;
