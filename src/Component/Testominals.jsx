import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section
        className="section-padding-md-4 bg-Primary bg-common"
        data-bg-image="img/figure/bg-shape.png"
      >
        <div className="container">
          <div className="heading-layout2 mg-b-30">
            <h2 className="text-white">
              What Clients Say<span>About Us</span>
            </h2>
          </div>
          <div className="row">
            {/* Testimonial 1 */}
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="testimonial-box-layout1 bg-white p-4 rounded shadow h-100 d-flex flex-column">
                <p className="mt-10 pt-5">
                  Wilshine Cleaning Services is fantastic! Always reliable,
                  thorough, and professional. Highly recommend!
                </p>

                <div className="mt-auto">
                  <h3 className="item-title mb-1">Jason Windows</h3>
                  {/* <div className="item-subtitle mb-2">CEO, RT</div> */}
                  <ul className="item-rating list-inline mb-0">
                    {[...Array(5)].map((_, i) => (
                      <li key={i} className="list-inline-item">
                        <i className="fas fa-star" />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="item-quote mt-3">
                  <i className="fas fa-quote-right" />
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="testimonial-box-layout1 bg-white p-4 rounded shadow h-100 d-flex flex-column">
                <p className="mt-10 pt-5">
                  I’m extremely happy with the pressure washing service from
                  Wilshine Cleaning Services. They arrived on time, worked
                  efficiently, and made my driveway and exterior look brand new.
                  Great results, fair pricing, and excellent customer service.
                  Highly recommend!
                </p>

                <div className="mt-auto">
                  <h3 className="item-title mb-1">Tanya Regan</h3>
                  {/* <div className="item-subtitle mb-2">CEO, RT</div> */}
                  <ul className="item-rating list-inline mb-0">
                    {[...Array(5)].map((_, i) => (
                      <li key={i} className="list-inline-item">
                        <i className="fas fa-star" />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="item-quote mt-3">
                  <i className="fas fa-quote-right" />
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="testimonial-box-layout1 bg-white p-4 rounded shadow h-100 d-flex flex-column">
                <p className="mt-10 pt-5">
                  Wilshine Cleaning Services has been fantastic for our office
                  cleaning needs. Their team is always professional, punctual,
                  and thorough. Our office looks spotless after every visit, and
                  we love that they use eco-friendly products. Highly recommend
                  them for any business needing reliable cleaning services!
                </p>

                <div className="mt-auto">
                  <h3 className="item-title mb-1">Optimum Roofing</h3>
                  {/* <div className="item-subtitle mb-2">CEO, RT</div> */}
                  <ul className="item-rating list-inline mb-0">
                    {[...Array(5)].map((_, i) => (
                      <li key={i} className="list-inline-item">
                        <i className="fas fa-star" />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="item-quote mt-3">
                  <i className="fas fa-quote-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
