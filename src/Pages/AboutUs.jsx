import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className=" body-font  bg-gradient-to-t   ">
        <div className=" px-5 py-24 mx-auto xs:px-4" data-aos="fade-up">
          <div className="xl:w-9/12 lg:w-full w-full xs:w-full mx-auto text-center">
            <h1 className="text-4xl   xs:mb-2  xs:text-3xl xs:mt-14 antialiased text-center mb-8 font-semibold">
              About Us
            </h1>

            <p className="leading-relaxed text-lg  w-full	xs:text-sm text-left text-center">
              Complete MEP Solutions LLP is experienced HVAC Service contractor
              in Nashik. Supplying and installing HVAC systems in Pune. Complete
              MEP Solutions LLP is an expert in Air Conditioning, Ventilation
              Solutions such as installation, testing, commissioning, supply,
              service, maintenance and design also. It is for all industrial and
              domestic clean room environments. The Clean room HVAC system is a
              blend of many elements that are to be carefully chosen to deliver
              required environmental conditions. Assured all these elements
              include Filtration levels. Blower and Assembling a Motor,
              ductwork, coils of heating Cooling, filters, supply and return
              modules. Grills, diffusers and dampers witch distribute controlled
              and conditioned air to the required space. A Clean room HVAC
              system includes: High Quality and efficiency air handling units,
              air distribution and diffusion system with automatic regulation,
              air exhaust system, heating, cooling, dehumidifying equipment to
              control temperature etc.
            </p>
            <span className="inline-block h-1 w-1/2 rounded bg-blue-500 mt-8 xs:mt-4 xs:mb-2 mb-6"></span>
            {/* <p className=" "> DIRECTOR</p> */}
            <div className="flex w-[40%] gap-14 m-auto  justify-between">
            <div>
              <h2 className=" font-bold title-font text-blue-400 tracking-wider  text-md  ">
                 SHUBHAM DESHMUKH
              </h2>
              <p className=" ">Genral Manager</p>
              <p className="text-[12px] "> Ventech Solution</p>
            </div>
            <div>
              <h2 className=" font-bold title-font text-blue-400 tracking-wider  text-md  ">
              DEVENDRA VARMA
              </h2>
              <p className=" "> MEPF Designer</p>
            
              <p className="text-[12px] "> Ventech Solution</p>
            </div>
            </div>
         
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
