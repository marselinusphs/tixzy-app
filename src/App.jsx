/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper React components
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Header() {
  const nav = {
    backgroundColor: "white",
    boxShadow: "0px 4px 22px rgba(0, 0, 0, 0.25)",
    height: "80px",
  };

  const loginButtonStyle = {
    width: 75,
    background: "#1993B8",
    borderRadius: 5,
  };

  return (
    <header className="mb-10">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={nav}
      >
        <div className="container container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="assets/logo.png"
                height="32px"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>

            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
              </span>
            </form>
          </div>
          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="https://google.com">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fastboat
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-outline-primary">
                  Create Event
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={loginButtonStyle}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

function BannerCard({ url, href = "https://google.com" }) {
  return (
    <SwiperSlide>
      <a href={href}>
        <img className="object-fit-cover" src={url} width="100%" />
      </a>
    </SwiperSlide>
  );
}

function Banner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../dummy-data/Banner.json"); // Sesuaikan dengan path file JSON Anda
        const data = await response.json();
        setBanners(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mt-5 custom-nav-button"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerCard url={banner.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function ExperienceCard({
  image = "Contoh Poster",
  href = "https://www.youtube.com",
  title = "{Event Title}",
  date = "{Date}",
  location = "{Place}",
  price = "Rp. {Harga}",
  photo_organizer = "Contoh Poster",
  organizer = "{Organizer}",
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  const card = {
    borderRadius: "16px",
    background: "white",
    border: "2px solid #c3c6ce",
    boxShadow: "0px 5px 29px rgba(0, 0, 0, 0.25)",
    overflow: "visible",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "16px 16px 0px 0px",
    height: "250px",
  };

  const experienceTitleStyle = {
    color: "#545F71",
    fontSize: "14px",
    fontWeight: "500",
    wordWrap: "break-word",
  };

  const experiencePriceStyle = {
    color: "#545F71",
    wordWrap: "break-word",
  };

  return (
    <div className="col">
      <a href={href}>
        <div className="card h-100" style={card}>
          <img
            src={image}
            className="card-img-top"
            style={imageStyle}
            alt="Skyscrapers"
          />
          <div className="card-body">
            <p style={experienceTitleStyle}>
              {title}
              <br />
              {date} - {location}
            </p>
            <h5 className="fw-bolder" style={experiencePriceStyle}>
              Rp{price}
            </h5>
            <hr />
            <img
              src={photo_organizer}
              height="30px"
              width="30px"
              className="rounded-circle object-fit-cover"
            />
            <span className="ml-1">
              <small className="text-muted"> {organizer}</small>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [events, setEvents] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../dummy-data/ExperienceEvent.json"); // Sesuaikan dengan path file JSON Anda
        const data = await response.json();
        setEvents(data);

        const response2 = await fetch("../dummy-data/ExperiencePlace.json"); // Sesuaikan dengan path file JSON Anda
        const data2 = await response2.json();
        setPlaces(data2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row mt-5 mb-3">
        <h2>
          <b>Feel The Experience!</b>
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        grabCursor={true}
        navigation
        loop={true}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <ExperienceCard
              title={event.title}
              location={event.location}
              price={event.price}
              image={event.image}
              date={event.date}
              organizer={event.organizer}
              photo_organizer={event.photo_organizer}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        loop={true}
        grabCursor={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mt-5"
      >
        {places.map((place) => (
          <SwiperSlide key={place.id}>
            <ExperienceCard
              title={place.title}
              location={place.location}
              price={place.price}
              image={place.image}
              date={place.date}
              organizer={place.organizer}
              photo_organizer={place.photo_organizer}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function UpcomingEventCard({
  image = "https://tixzy.id/uploads/0000/1/2023/10/07/20-21-oktober-2023.png",
  href = "https://www.upcoming.com",
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="col">
      <h2 className="mb-4" data-aos="fade-up">
        <b>Upcoming Hot Event</b>
      </h2>
      <a href={href} data-aos="fade-up">
        <img
          className="object-fit-cover"
          src={image}
          width="100%"
          height="350px"
        />
      </a>
    </div>
  );
}

function UpcomingEvent2() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <UpcomingEventCard />
      </div>
    </div>
  );
}

function UpcomingEventCard2({ image = "assets/wisata.png" }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="col d-flex align-items-center pt-5">
      <div
        className="card h-100"
        style={{ width: "100%", borderRadius: "16px" }}
      >
        <img
          height="100%"
          src={image}
          className="card-img-top object-fit-cover"
          style={{ borderRadius: "16px" }}
        />
      </div>
    </div>
  );
}

function UpcomingEvent() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../dummy-data/UpcomingEvent.json");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const divStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://tixzy.id/uploads/0000/1/2023/09/29/r-9.png')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "400px",
  };

  return (
    <div className="mt-5 container">
      <h2 className="mb-4" data-aos="fade-up">
        <b>Upcoming Hot Event</b>
      </h2>
      <div style={divStyle}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          grabCursor={true}
          loop={true}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <UpcomingEventCard2 image={event.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function PlaceCard({ image = "assets/wisata.png" }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="col">
      <div
        className="card h-100"
        style={{ width: "100%", borderRadius: "16px" }}
      >
        <img
          height="350px"
          src={image}
          className="card-img-top object-fit-cover"
          style={{ borderRadius: "16px" }}
        />
      </div>
    </div>
  );
}

function Place() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../dummy-data/Places.json"); // Sesuaikan dengan path file JSON Anda
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5" data-aos="fade-up">
      <div className="row mb-3">
        <div className="col">
          <h2>
            <b>Explore In Places</b>
          </h2>
        </div>
        <div className="col">
          <button type="button" className="btn btn-outline-primary float-end">
            More
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        loop={true}
        grabCursor={true}
        data-aos="fade-up"
      >
        {places.map((place) => (
          <SwiperSlide key={place.id}>
            <PlaceCard image={place.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function PastEventCard({
  image = "assets/banner.jpg",
  href = "https://pastevent.com",
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <a href={href} data-aos="fade-up">
      <img src={image} height="240px" />
    </a>
  );
}

function PastEvent() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../dummy-data/PastEvent.json");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-3" data-aos="fade-up">
        <b>Our Past Event</b>
      </h2>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <PastEventCard image={event.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function InformationCard({
  authorPhoto = "assets/author.jpg",
  author = "{Author}",
  image = "assets/information.jpg",
  date = "{Information Date}",
  link = "{Information Date}",
  title = "{Information Title}",
  description = "{Information Description}",
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="col">
      <a href={link}>
        <div
          className="card h-100"
          style={{ width: "100%" }}
          data-aos="fade-up"
        >
          <img
            src={image}
            className="card-img-top"
            alt="Skyscrapers"
            height="250px"
          />
          <div className="card-body">
            <h4 className="card-text">
              <b>{title}</b>
            </h4>
            <p className="text-truncate">{description}
</p>
          </div>
        </div>
      </a>
    </div>
  );
}

function Information() {
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../dummy-data/Information.json");
        const data = await response.json();
        setInformations(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-3" data-aos="fade-up">
        <h2>
          <b>See Our Latest Information</b>
        </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {informations.map((info) => (
          <InformationCard
            key={info.id}
            title={info.title}
            image={info.image}
            description={info.description}
            date={info.date}
            link={info.link}
          />
        ))}
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col">
          <button type="button" className="btn btn-outline-primary">
            More
          </button>
        </div>
      </div>
    </div>
  );
}

function About() {
  const tdStyle = {
    width: "50%",
    textAlign: "center",
  };

  const aboutText = {
    textAlign: "center",
    color: "#808080",
    fontSize: 12,
    fontWeight: "400",
    wordWrap: "break-word",
  };

  return (
    <div
      className="pt-5 pb-5"
      style={{
        background:
          "linear-gradient(87deg, rgba(226.31, 226.31, 226.31, 0) 0%, rgba(198.69, 198.69, 198.69, 0.21) 70%)",
        borderBottom: "3px #D8D8D8 solid",
      }}
    >
      <div className="pt-5 pb-5 container">
        <div className="row">
          <div style={tdStyle} className="col">
            <img src="assets/logo.png" height="50px" />
            <p style={aboutText}>
              tixzy.id focuses on connecting people with experinces by providing
              technology solutions for experience creators & event organizers
              and tourism destination as well as activity options for experience
              seekers. Book your experiences online with tixzy.id
            </p>
          </div>
          <div style={tdStyle} className="col"></div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const tdStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.025)",
  };

  return (
    <footer className="text-center text-lg-start bg-white text-muted">
      <section className="d-flex justify-content-center justify-content-lg-betweenborder-bottom">
        <div className="me-5 d-none d-lg-block"></div>
        <div>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Tixzy.id</h6>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Blog
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Services
                </a>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Our Services</h6>
              <p>
                <a href="#!" className="text-reset">
                  Event Management
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Online Management
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Point of Sales
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Partner With Us</h6>
              <p>
                <a href="#!" className="text-reset">
                  Submit Event
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Official Partner
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Support</h6>
              <p>Contact Us</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={tdStyle}>
        Copyright © 2022 by{" "}
        <span>
          <a className="text-reset fw-bold" href="https://tixzy.id">
            Tixzy.id
          </a>
        </span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Experience />
      <UpcomingEvent />
      <Place />
      <PastEvent />
      <Information />
      <About />
      <Footer />
    </>
  );
}

export default App;
