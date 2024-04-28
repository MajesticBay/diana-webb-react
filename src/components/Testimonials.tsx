// import React from "react";

const Testimonials = () => (
  <div className="testimonials">
    <h1 className="testimonials__header">What People Are Saying</h1>
    <div className="testimonials__rows">
      <div className="testimonials__row">
        <div className="testimonials__testimonial">
          <h3 className="testimonials__name-header">
            <p>Lillian Polus Gerstner,</p>
            <p>Director of Special Projects,</p>
            <p>Illinois Holocaust Museum,</p>
          </h3>
          <p className="testimonials__text">
            is thankful that it will be made available to educators, students
            and members of the community seeking information regarding the
            impact of the Holocaust and genocide.
          </p>
        </div>
        <div className="testimonials__testimonial">
          <h3 className="testimonials__name-header">
            <p>Agustin Torres,</p>
            <p>Jr., Director of Positive</p>
            <p>Solutions for Life,</p>
          </h3>
          <p className="testimonials__text">
            affirms that it is an earth-shattering reality check for we each may
            be the wiser to extend a listening ear.
          </p>
        </div>
      </div>

      <div className="testimonials__row">
        <div className="testimonials__testimonial">
          <h3 className="testimonials__name-header">
            <p>Father</p>
            <p>John Neiman</p>
          </h3>
          <p className="testimonials__text">
            enlightens that the hand of God is certainly present and will bring
            all who read closer to the light of Our Lord.
          </p>
        </div>
        <div className="testimonials__testimonial">
          <h3 className="testimonials__name-header">
            <p>Cliff Johnsen,</p>
            <p>President of EcoAdvantageRE, Inc.,</p>
          </h3>
          <p className="testimonials__text">
            {/* calls it a dynamic read which will change one's life forever. */}
            calls it a dynamic read which will change one&apos;s life forever.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
