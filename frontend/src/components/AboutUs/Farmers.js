import farmers from "../../assets/AboutUs/farmers.png";

function Farmers() {
  return (
    <div>
      <div className="text-3xl font-bold pb-12 mb-4">The Farmers</div>
      <div className="about-us-box flex">
        <div className="about-us-picture w-1/2 object-contain mr-8 ml-4">
          <img
            src={farmers}
            alt="mission-picture"
            className="rounded-lg shadow-md w-11/12 h-auto"
          />
        </div>
        <div className="about-us-text text-lg w-1/2 pr-6 text-left">
          Get acquainted with the true heroes behind your daily dose of caffeine
          magic! At Seed-To-Sip, our farmers pour their heart and soul into
          nurturing the finest coffee beans. With relentless dedication, they
          ensure that each bean reaches its zenith, all while wearing a smile.
          Your tips go straight into the hands of these industrious individuals,
          making every sip a tribute to their dedication and passion. Here's to
          our remarkable coffee-growing community - the shining stars of the
          show.
        </div>
      </div>
    </div>
  );
}

export default Farmers;
