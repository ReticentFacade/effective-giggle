import aboutUsMug from "../../assets/AboutUs/aboutUsMug.png";

function AboutUs() {
  return (
    <div>
      {/* <div className="text-3xl font-bold pb-12 mb-4">About Us</div> */}
      <div className="text-3xl font-bold pb-12 mb-4 overflow-y-auto min-h-full">About Us</div>
      {/* <div className="about-us-box flex pb-6"> */}
      <div className="about-us-box flex flex-col-reverse md:flex-row pb-4">
        {/* <div className="about-us-picture w-1/2 object-contain mr-8 ml-4"> */}
        <div className="about-us-picture w-full md:w-1/2 object-contain mx-auto">
          <img
            src={aboutUsMug}
            alt="about-us-picture"
            className="rounded-lg shadow-md w-11/12"
          />
        </div>
        {/* <div className="about-us-text text-lg w-1/2 pr-6 text-left"> */}
        <div className="about-us-text w-full md:w-1/2 pr-6 text-left sm:mb-20">
          Welcome to Seed-To-Sip, where the journey from bean to brew is as
          remarkable as the coffee itself. Our story is simple yet heartfelt -
          we connect coffee lovers directly with the passionate farmers who sow
          the seeds that fuel your morning ritual. Dive into the narrative that
          transforms your cup of coffee into an experience worth savoring. Join
          us in celebrating the roots and flavors that make every sip special.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
