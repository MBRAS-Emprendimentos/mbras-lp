import React from "react";

const PropertyDetailPage = () => {
  return (
    <div className="dark:bg-slate-900">
      {/* Loader Start */}
      {/* Replace this section with your loader */}
      {/* Loader End */}

      {/* Start Navbar */}
      <nav id="topnav" className="defaultscroll is-sticky">
        <div className="container">
          {/* Logo container */}
          <a className="logo" href="index.html">
            <img
              src="assets/images/logo-dark.png"
              className="inline-block dark:hidden"
              alt=""
            />
            <img
              src="assets/images/logo-light.png"
              className="hidden dark:inline-block"
              alt=""
            />
          </a>
          {/* End Logo container */}

          {/* Start Mobile Toggle */}
          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle" onClick="toggleMenu()">
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>
          {/* End Mobile Toggle */}

          {/* Login button Start */}
          <ul className="buy-button list-none mb-0">
            <li className="inline mb-0">
              <a
                href="auth-login.html"
                className="btn btn-icon bg-sky-400 hover:bg-sky-500 border-sky-400 dark:border-sky-400 text-white rounded-full"
              >
                <i data-feather="user" className="h-4 w-4 stroke-[3]"></i>
              </a>
            </li>
            <li className="sm:inline ps-1 mb-0 hidden">
              <a
                href="auth-signup.html"
                className="btn bg-sky-400 hover:bg-sky-500 border-sky-400 dark:border-sky-400 text-white rounded-full"
              >
                Signup
              </a>
            </li>
          </ul>
          {/* Login button End */}
        </div>
      </nav>
      {/* End Navbar */}

      {/* Hero Start */}
      <section className="relative md:pb-24 pb-16 mt-20">
        <div className="container-fluid">
          <div className="md:flex mt-4">
            <div className="lg:w-1/2 md:w-1/2 p-1">
              <div className="group relative overflow-hidden">
                <img src="assets/images/property/single/1.jpg" alt="" />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                  <a
                    href="assets/images/property/single/1.jpg"
                    className="btn btn-icon bg-sky-400 hover:bg-sky-500 text-white rounded-full lightbox"
                  >
                    <i className="uil uil-camera"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2">
              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src="assets/images/property/single/2.jpg" alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <a
                        href="assets/images/property/single/2.jpg"
                        className="btn btn-icon bg-sky-400 hover:bg-sky-500 text-white rounded-full lightbox"
                      >
                        <i className="uil uil-camera"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src="assets/images/property/single/3.jpg" alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <a
                        href="assets/images/property/single/3.jpg"
                        className="btn btn-icon bg-sky-400 hover:bg-sky-500 text-white rounded-full lightbox"
                      >
                        <i className="uil uil-camera"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src="assets/images/property/single/4.jpg" alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <a
                        href="assets/images/property/single/4.jpg"
                        className="btn btn-icon bg-sky-400 hover:bg-sky-500 text-white rounded-full lightbox"
                      >
                        <i className="uil uil-camera"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src="assets/images/property/single/5.jpg" alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <a
                        href="assets/images/property/single/5.jpg"
                        className="btn btn-icon bg-sky-400 hover:bg-sky-500 text-white rounded-full lightbox"
                      >
                        <i className="uil uil-camera"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end flex */}
        </div>
        {/* end container fluid */}

        <div className="container md:mt-24 mt-16">
          <div className="md:flex">
            <div className="lg:w-1/2 md:w-1/2">
              <div className="pr-xl-5 pr-0">
                <h4 className="text-dark font-weight-bold mb-4">Overview</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in iaculis ex. Donec ut odio porttitor, laoreet sem
                  in, consequat sapien. Aliquam erat volutpat. Mauris viverra
                  diam turpis, et dictum.
                </p>

                <div className="pt-4">
                  <h4 className="text-dark font-weight-bold mb-4">
                    Property Features
                  </h4>
                  <ul className="list-unstyled property-features dark mb-0">
                    <li className="text-muted">
                      <i className="mdi mdi-ruler"></i>
                      <span className="ms-2">Size: 1800 sq ft</span>
                    </li>
                    <li className="text-muted">
                      <i className="mdi mdi-bathtub"></i>
                      <span className="ms-2">Baths: 4</span>
                    </li>
                    <li className="text-muted">
                      <i className="mdi mdi-scale-bathroom"></i>
                      <span className="ms-2">Bedrooms: 3</span>
                    </li>
                    <li className="text-muted">
                      <i className="mdi mdi-car"></i>
                      <span className="ms-2">Garages: 2</span>
                    </li>
                    <li className="text-muted">
                      <i className="mdi mdi-hot-tub"></i>
                      <span className="ms-2">Jacuzzi: 1</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h4 className="text-dark font-weight-bold mb-4">
                    Nearby Amenities
                  </h4>
                  <ul className="list-unstyled nearby-amenities mb-0">
                    <li className="text-muted">
                      <i className="mdi mdi-basketball"></i>
                      <span className="ms-2">Basketball Court</span>
                    </li>
                    <li className="text-muted">
                      <i className="mdi mdi-golf"></i>
                      <span className="ms-2">Golf Course</span>
                    </li>
                    <li className="text-muted">
                      <i className="mdi mdi-walk"></i>
                      <span className="ms-2">Walking Path</span>
                    </li>
                    <li className="text-muted">
                      <i className="mdi mdi-school"></i>
                      <span className="ms-2">School</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2">
              <div className="mt-5 mt-md-0">
                <h4 className="text-dark font-weight-bold mb-4">Location</h4>
                <div
                  id="singlePropertyMap"
                  className="gmaps"
                  data-latitude="40.7427837"
                  data-longitude="-73.11445617675781"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about */}
    </div>
  );
};

export default PropertyDetailPage;
