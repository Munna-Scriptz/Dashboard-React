import React from "react";

export const About = () => {
  return (
    <>
      <section className="flex justify-between pr-12">
        <div>
          <img
            className="w-[555px]"
            src="src\assets\AboutImage2.webp"
            alt="About image"
          />
          <div className="flex items-center justify-around mt-10">
            <div className="flex items-center gap-4">
              <img src="src/assets/AboutIcon1.png" alt="Png" />
              <div>
                <h2 className="text-[#6864ED] font-OpenSans font-bold text-3xl">
                  200+
                </h2>
                <p className=" font-Inter text-[14px]">Peoples</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="src/assets/AboutIcon2.png" alt="Png" />
              <div>
                <h2 className="text-[#6864ED] font-OpenSans font-bold text-3xl">
                  69+
                </h2>
                <p className=" font-Inter text-[14px]">Projects</p>
              </div>
            </div>
          </div>
        </div>
        {/* -------Right Part------ */}
        <div>
          <div>
            <h2 className="font-Inter text-[18px] font-bold text-[#2F57EF]">
              About Our Team
            </h2>
          </div>
          <h1 className=" font-Inter font-bold text-[44px] w-[440px] text-[#192335] my-2.5">
            Knowledge is power education is the key
          </h1>
          <p className="w-[408px] font-Inter text-[#192335]">
            Education is the process of acquiring knowledge, skills, values, and
            attitudes through various methods such as teaching, training
          </p>
        </div>
      </section>
    </>
  );
};
