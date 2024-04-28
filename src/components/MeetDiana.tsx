// import React from "react";
// import img from "next/img";
import book from "../../public/book.png";
import person from "../../public/person.png";

const MeetDiana = () => (
  <div className="meet-diana" id="bio">
    <div className="meet-diana__inner-container">
      <div className="meet-diana__half-top">
        <div className="meet-diana__description">
          <h1 className="meet-diana__header">Meet Diana Webb</h1>
          <p className="meet-diana__text">
            Diana Webb, a Five-Time National Award-Winning Author, is the
            daughter of a child survivor of Nazi Germany. She has a J.D. degree
            and a B.A. in Psychology. After unjustly serving 12.5 years in
            federal prison for a crime she didn&apos;t commit, and, also,
            experiencing a medical miracle in 2002, she decided to write The
            Butterfly Cometh sharing intense thought-provoking queries and
            realities about life.
          </p>
        </div>
        <img className="meet-diana__photo--top" src={book} alt="woman 1" />
      </div>
      <div className="meet-diana__half-bottom">
        <div className="meet-diana__photo-container">
          <img
            className="meet-diana__photo--bottom"
            src={person}
            alt="woman 2"
          />
          <div className="meet-diana__green-rectangle"></div>
        </div>
        <div className="meet-diana__description">
          <p className="meet-diana__text">
            A motivational speaker and freelance writer, delight in a spiritual
            voyage through the intricate workings of the heart and mind with
            Diana&apos;s Digital Devotions, E-Prayers, and I-Inspirationals. Truth
            tells us a bullet never trumps a principle, be it a nuclear warhead
            or pulling a Judas. Seeing the world through rose-colored glasses is
            no longer in Vogue. Until the soul stands naked and free, we can
            only see the world in shades of gray. When we rid ourselves of the
            garbage that we have accumulated, crushing our life force, glory
            shines in Technicolor.
          </p>
          <p className="meet-diana__text">
            Make today your first step in the dance of strengthening character,
            enhancing friendships, experiencing wisdom, and facing reality.
            Carry on!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default MeetDiana;
