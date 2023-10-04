import beans from "../../assets/AboutUs/beans.png";

function Beans() {
  return (
    <div>
      <div className="text-3xl font-bold pb-12 mb-4">Our Beans</div>
      <div className="about-us-box flex pb-4">
        <div className="about-us-picture w-1/2 object-contain mr-8 ml-4">
          <img
            src={beans}
            alt="mission-picture"
            className="rounded-lg shadow-md w-11/12 h-auto"
          />
        </div>
        <div className="about-us-text w-1/2 pr-6 text-left">
          <p className="text-lg">
            At Seed-To-Sip, we believe that coffee is a rich tapestry of flavors
            waiting to be explored. Our beans are the heart and soul of every
            cup, and we take pride in offering you a trio of exceptional coffee
            experiences.
          </p>
          <br />
          <p>
            <b className="underline text-md">Arabica:</b> Smooth, sophisticated,
            and oh-so-elegant, Arabica beans are the embodiment of coffee
            refinement. Known for their balanced flavors and aromatic charm,
            they offer a delightful sip every time. Explore our selection, find
            your perfect match, and toast to the diverse world of coffee, where
            every bean tells a story.
          </p>
          <br />
          <p>
            <b className="underline text-md">Robusta:</b> Bold and unapologetic,
            Robusta beans bring a punch of intensity to your brew. With a robust
            body and a hint of earthiness, it's the perfect choice for those who
            crave a coffee that stands tall.{" "}
          </p>
          <br />
          <p>
            <b className="underline text-md">Liberica:</b> For those seeking
            adventure in their coffee, Liberica offers a unique journey. Its
            rich, exotic notes dance on your palate, taking you on a flavorful
            expedition that's anything but ordinary.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Beans;
