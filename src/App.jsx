/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import * as Icon from 'react-bootstrap-icons';
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper React components
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Header() {
  const [placeholder, setPlaceholder] = useState("Cari Event");

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(
        placeholder == "Cari Event" ? "Cari Experience" : "Cari Event"
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholder]);

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
              <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" placeholder="Email Address"/>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" placeholder="Password"/>
              </div>


              <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

              <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white border" style={{boxShadow: '0px 4px 22px rgba(0, 0, 0, 0.25)'}}>
        <div className="container container-fluid d-flex align-items-center">
          <a className="navbar-brand" href="/">
            <img
              src="src/assets/logo-atas.png"
              height="32px"
              loading="lazy"
            />
          </a>
          <div
            className="container container-fluid justify-content-center"
            id="navbarCenteredExample"
          >
            <form className="d-flex" role="search" style={{position: 'relative'}}>
              <Icon.Search id="IconSearch" />
              <input
                className="form-control px-5 input-field my-auto me-2" 
                type="search"
                placeholder={placeholder}
                style={{width: "400px"}}
              />
            </form>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link fw-bold" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Fastboat</a>
              <a className="nav-link" href="#">Experience</a>
              <a className="nav-link" href="#">Event</a>
              <a style={{color: '#1993b8'}} className="nav-link" href="#"><Icon.CalendarPlus /> Create Event</a>
              <a className="nav-link" href="#">
                <button className="btn buttonbiruputih" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontSize: '14px', width:'100px', height:'34px', marginTop: 'auto',marginBottom: 'auto'}}>
                  <p>Login</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function BannerCard({ url, href = "https://google.com" }) {
  return (
    <SwiperSlide id="banner">
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
        const response = await fetch("src/assets/dummy-data/Banner.json"); 
        const data = await response.json();
        setBanners(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div  style={{backgroundColor: '#f4f4f4'}}>
    <div className="container py-5">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="custom-nav-button"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerCard url={banner.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
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
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)',
    overflow: "visible",
  };

  const imageStyle = {
    height: "180px",
    borderRadius: "16px 16px 0px 0px",
  };

  const experienceTitleStyle = {
    color: "#1b1b1b",
    fontSize: "18px",
    fontWeight: "600",
    wordWrap: "break-word",
  };

  const experiencePriceStyle = {
    color: "#000000",
    fontSize: '22px',
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
            <span style={experienceTitleStyle}>
              {title}
              <p style={{color: "#222222", fontSize: "16px", fontWeight: "300"}}>{date} | {location}</p>
            </span>
            <span className="fw-semibold h5" style={experiencePriceStyle}>
              IDR {price}
            </span>
            <hr />
            <img
              src={photo_organizer}
              height="30px"
              width="30px"
              className="rounded-circle object-fit-cover"
            />
            <span className="px-1">
              <small className="text-muted fw-semibold"> {organizer}</small>
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
        const response = await fetch("src/assets/dummy-data/ExperienceEvent.json"); 
        const data = await response.json();
        setEvents(data);

        const response2 = await fetch("src/assets/dummy-data/ExperiencePlace.json"); 
        const data2 = await response2.json();
        setPlaces(data2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{backgroundColor: '#f4f4f4'}}>
    <div className="container pb-5 pt-2">
      <div className="row">
        <h1 className="fw-bold subtitle h1">Feel The Experience!</h1>
      </div>
      <div className="row">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 36,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 36,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 36,
          },
        }}
        grabCursor={true}
        navigation
        loop={true}
        className="pb-5 px-5"
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
      </div>
      <div className="row">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={36}
        slidesPerView={3}
        navigation
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 36,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 36,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 36,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 36,
          },
        }}
        grabCursor={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="px-5 py-5"
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
    </div>
    </div>
  );
}

function UpcomingEventCard2({ image = "src/assets/wisata.png" }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="col pt-2 pb-5 align-middle h-100 d-inline-block" data-aos="fade-up">
      <a href="https://www.google.com">
      <div
        className="card h-100"
        style={{ width: "100%", borderRadius: "16px" }}
      >
        <img
          width="100%"
          src={image}
          className="object-fit-cover"
          style={{ borderRadius: "16px", maxHeight:'300px', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)',}}
        />
      </div>
      </a>
      <div className="text-center mt-3">
        <span style={{backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '14px', color: '#1993b8'}} className="py-1 px-3 fw-bold h6">31 Desember 2023</span>
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
        const response = await fetch("src/assets/dummy-data/UpcomingEvent.json");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const divStyle = {
    backgroundImage: `url('src/assets/EC59276C-41DD-46FE-AE74-884233F97F88.png')`,
    // backgroundImage: `url('https://tixzy.id/uploads/0000/1/2023/09/29/r-9.png')`,
    // backgroundColor: '#000000',
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div id="upcoming" style={divStyle} className="pt-5">
    <div className="container">
      <div className="row">
      <p className="subtitle h1 fw-bold fs-1" data-aos="fade-up">Upcoming Hot Event
      </p></div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          // navigation
          pagination={{ clickable: true }}
          slidesPerView={3}
          grabCursor={true}
          loop={true}
          className="px-5"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <UpcomingEventCard2 image={event.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
}

function PlaceCard({ image = "src/assets/wisata.png" }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="col py-4">
      <a href="https://youtube.com">
        <div
          className="card h-100"
          style={{ width: "100%", borderRadius: "16px", boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)', }}
        >
          <img
            height="350px"
            src={image}
            className="card-img-top object-fit-cover"
            style={{ borderRadius: "16px" }}
          />
        </div>
      </a>
    </div>
  );
}

function Place() {
  const moreButton = {
    width: 129, height: 42, padding: 12, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, border: '1px #1993B8 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'
  };
  
  useEffect(() => {
    AOS.init();
  }, []);

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/assets/dummy-data/Places.json"); 
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{backgroundColor: '#f4f4f4'}}>
    <div className="container py-5" data-aos="fade-up">
      <div className="row">
        <div className="col">
          <h2 className="subtitle">Explore In Places
          </h2>
        </div>
        <div className="col">
          <button type="button" className="btn float-end buttonputihbiru" style={moreButton}>
            More
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 2,
            // spaceBetween: 36,
          },
          640: {
            slidesPerView: 3,
            // spaceBetween: 36,
          },
          768: {
            slidesPerView: 4,
            // spaceBetween: 36,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
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
    </div>
  );
}

function PastEventCard({
  image = "src/assets/banner.jpg",
  href = "https://pastevent.com",
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="col">
      <SwiperSlide id="banner" >
        <a href={href}>
          <img className="object-fit-cover" src={image} width="100%" height='100%'/>
        </a>
      </SwiperSlide>
    </div>
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
        const response = await fetch("src/assets/dummy-data/PastEvent.json");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{backgroundColor: '#f4f4f4'}}>
    <div className="container py-5">
      <h2 className="subtitle" data-aos="fade-up">Our Past Event</h2>
      <div className="row">
      <Swiper
        id="pastevent"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        autoHeight={true}
        slidesPerView={1}
        navigation
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="custom-nav-button"
        data-aos="fade-up"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <PastEventCard image={event.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
    </div>
  );
}

function InformationCard({
  authorPhoto = "src/assets/author.jpg",
  author = "{Author}",
  image = "src/assets/information.jpg",
  date = "{Information Date}",
  link = "{Information Date}",
  title = "{Information Title}",
  description = "{Information Description}",
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  const card = {
    borderRadius: "16px",
    background: "white",
    height: '400px',
    border: "2px solid #c3c6ce",
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)',
    overflow: "visible",
  };

  const imageStyle = {
    height: "200px",
    borderRadius: "16px 16px 0px 0px",
  };

  const experienceTitleStyle = {
    color: "#1b1b1b",
    fontSize: "18px",
    fontWeight: "600",
    wordWrap: "break-word",
  };

  
  return (
    <div className="col">
      <a href={link}>
        <div
          className="card h-100"
          style={card}
          data-aos="fade-up"
        >
          <img
            src={image}
            className="card-img-top"
            alt="Skyscrapers"
            style={imageStyle}
          />
          <div className="card-body row">
            <span style={experienceTitleStyle}>
              {title}
              <p style={{color: "#222222", fontSize: "14px", fontWeight: "400"}}>31 Desember 2023</p>
            </span>
            <p className="truncatebro">{description}</p>
          </div>
          </div>
      </a>
    </div>
  );
}

function Information() {
  const seeAllButton = {
    width: 129, height: 42, padding: 12, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, border: '1px #1993B8 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'
  };
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/assets/dummy-data/Information.json");
        const data = await response.json();
        setInformations(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{backgroundColor:'#f4f4f4'}}>
    <div className="container py-5">
      <div className="row" data-aos="fade-up">
        <h2 className='subtitle'>See Our Latest Information</h2>
      </div>
      <div className="row row-cols-2 row-cols-lg-3 g-5">
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
      <div className="row mt-4" data-aos="fade-up">
        <div className="col text-center">
          <button type="button" className="btn buttonputihbiru" style={seeAllButton}>
            See All
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

function Partner() {
  return (
    <div className="py-5">
      <div style={{
        backgroundImage: `url('src/assets/partner-us1.png')`,
        backgroundSize: 'cover',
        width: '100%',
        height: '400px',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
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
    fontSize: '14px',
    fontWeight: "400",
    wordWrap: "break-word",
  };

  const paymentOptionStyle = {
    width: '100%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30
  };

  return (
    <div
      className="pt-5 pb-5"
      style={{
        background:'#F4F7FE',
        borderBottom: "3px #D8D8D8 solid",
      }}
    >
      <div className="pt-5 pb-5 container">
        <div className="row">
          <div style={tdStyle} className="col">
            <img src="src/assets/logo-atas.png" width="40%" data-aos="fade-up"/>
            <p style={aboutText} className="pt-4" data-aos="fade-up">
              tixzy.id focuses on connecting people with experinces by providing
              technology solutions for experience creators & event organizers
              and tourism destination as well as activity options for experience
              seekers. Book your experiences online with tixzy.id
            </p>
          </div>
          <div style={tdStyle} className="col" data-aos="fade-up">
            <img src="src/assets/08d7627667c47f0acb5bebc0b59eed55.png" style={paymentOptionStyle} />
          </div>
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
        <div className="d-lg-block"></div>
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
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bold">Tixzy.id</h6>
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
      <Partner />
      <About />
      <Footer />
    </>
  );
}

export default App;
