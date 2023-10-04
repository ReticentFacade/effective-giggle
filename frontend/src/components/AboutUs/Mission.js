import mission from "../../assets/AboutUs/mission.png";

function Mission() {
  return (
    <div>
      <div className="text-3xl font-bold pb-12 mb-4">Our Mission</div>
      <div className="about-us-box flex pb-2">
        <div className="about-us-picture w-1/2 object-contain mr-8 ml-4">
          <img
            src={mission}
            alt="mission-picture"
            className="rounded-lg shadow-md w-11/12 h-auto"
          />
        </div>
        <div className="about-us-text text-lg w-1/2 pr-6 text-left">
          Our mission is to shorten the gap between coffee connoisseurs and the
          dedicated farmers who cultivate the coffee beans. We're on a quest to
          ensure that every drop of coffee you enjoy carries with it a sprinkle
          of appreciation. By tipping our farmers directly, you become a vital
          part of a movement that acknowledges their unwavering commitment and
          expertise. Let's raise our mugs high in a toast to the flavors and
          faces that enrich our coffee journey.
        </div>
      </div>
    </div>
  );
}

export default Mission;
