import React from "react";
import "../../styles/Admin Styles/AdminPropertyDetails.css";
import extra1 from "../../assets/images/extra1.jpg";
import extra2 from "../../assets/images/extra2.jpg";
import extra3 from "../../assets/images/extra3.jpg";
import propvideo from "../../assets/images/propvideo.jpg";
import person from "../../assets/images/Ellipse 10.png";
import { VscTriangleLeft } from "react-icons/vsc";
import { PiHouseThin } from "react-icons/pi";
import { RiRectangleLine } from "react-icons/ri";
import { BiSolidCarGarage } from "react-icons/bi";
import { LiaBedSolid } from "react-icons/lia";
import { FaShower } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { BsPlayCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player";

import ErrorPage from "../../pages/ErrorPage";

const AdminPropertyDetailsComponent = () => {
  const { propertyId } = useParams();
  const { properties } = useGlobalContext();

  const property = properties.find((p) => p._id === Number(propertyId));
  const {
    title,
    price,
    location,
    image,
    tags,
    features: { bedroom, bathroom, garage, squareFeet },
  } = property;
  const videoUrl =
    "https://res.cloudinary.com/dlb8nbz13/video/upload/c_scale,h_390,q_91,w_618/v1706177257/WhatsApp_Video_2024-01-25_at_11.05.54_eb4762c7_paf2hg.mp4";

  return (
    <>
      <div className="p-lg-2 p-3 w-100">
        <div className="d-flex flex-md-row flex-column-reverse justify-content-between py-3">
          <div className="d-flex gap-2 fs-4 align-items-center">
            <Link to="/admin/properties">
              <VscTriangleLeft className="text-success" />
            </Link>
            <h2 className="mt-2">Property Details</h2>
          </div>

          <div>
            <Link to="/admin/dashboard">
              <PiHouseThin /> Home
            </Link>

            <Link to="/admin/properties"> / Properties</Link>

            <Link> / Property Details</Link>
          </div>
        </div>

        <div className="d-flex flex-md-row flex-column justify-content-between py-3">
          <div>
            <h3 className="fs-5 fw-bold ">{title}</h3>
            <p className="fs-5 text-secondary">{location}</p>
          </div>

          <div>
            <Link to={`/admin/edit/${propertyId}`}>
              {" "}
              <button className="btn bg-success text-white fw-semibold me-2">
                Edit
              </button>{" "}
            </Link>
            <button className="btn border border-success text-success fw-semibold ">
              Unlist Property
            </button>
          </div>
        </div>

        <div className="d-flex flex-xxl-row flex-column  gap-3 ">
          <div className="flex-grow-1">
            <img
              src={image}
              alt=""
              className="w-100 object-fit-cover rounded-3"
              style={{ height: "605px" }}
            />
          </div>

          <div className="d-flex flex-column gap-3 align-items-stretch flex-grow-0 h-100">
            <img
              src={extra1}
              alt=""
              className="w-100 rounded-3"
              style={{ height: "11.9375rem", objectFit: "cover" }}
            />
            <img
              src={extra2}
              alt=""
              className="w-100 rounded-3"
              style={{ height: "11.9375rem", objectFit: "cover" }}
            />
            <img
              src={extra3}
              alt=""
              className="w-100 rounded-3"
              style={{ height: "11.9375rem", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="py-3 d-flex flex-xxl-row flex-column gap-3">
          <div>
            <div>
              <div className="d-flex gap-3">
                {tags.map((t, i) => {
                  return (
                    <p
                      key={i}
                      className={
                        t === "Network"
                          ? "d-flex gap-2 align-items-center py-1 px-md-5 px-2 fs-4 bg-success-subtle text-success fw-semibold rounded-pill"
                          : "d-flex align-items-center  gap-2 py-1 px-md-5 px-2 fs-4 bg-danger-subtle text-danger fw-semibold rounded-pill"
                      }
                    >
                      {t === "Network" ? (
                        <FaNetworkWired />
                      ) : (
                        <MdOutlineFamilyRestroom />
                      )}
                      {t}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-between ">
              <div>
                <h2>{title}</h2>{" "}
                <p className="text-secondary">
                  <IoLocationSharp /> {location}
                </p>
              </div>
              <div>
                <p className="text-secondary">Sales Price</p>
                <h3
                  className="fw-bold fs-4"
                  style={{ color: "hsla(183, 86%, 41%, 1)" }}
                >
                  <span className="naira">N</span>
                  {price}
                </h3>
              </div>
            </div>

            <div className="border border-black border-2 p-3 rounded-3">
              <p className="fw-bold">Description</p>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur. Id libero suspendisse eu
                risus amet vel. Aliquet contur consectetur purus amet ultricies
                facilisis a pelloique. Telus et cras urna vel vitae. Ornare
                aliquam dolor enim consequat sapien odio cras integer. Conmentum
                adipiscing duis morbi laoreet aliquet viverra est auctor.
                Aliquam blandit adipiscing potenti enim non proin erat fringilla
                amet. Congue sit ac vulputate scelerisque libero malesuada eget.
                Nulla ultricies aenean tellus congue molestie molestie enim
                porta quisque. Neque imperdiet magna maecenas gravida quisque
                duis porta lacus. Consectetur enim.
              </p>
            </div>
            <div className="border border-black border-2 p-3 rounded-3 mt-4">
              <p className="fw-bold">Features</p>
              <ul className="d-flex gap-3 flex-wrap ps-0 ">
                <li className="text-secondary fs-5">
                  <LiaBedSolid /> {bedroom} Bedrooms
                </li>
                <li className="text-secondary fs-5">
                  <FaShower /> {bathroom} Bathrooms
                </li>
                <li className="text-secondary fs-5">
                  {" "}
                  {garage && <BiSolidCarGarage />} {garage && "Garage"}
                </li>
                <li className="text-secondary fs-5">
                  <RiRectangleLine /> {squareFeet} Square Feet
                </li>
              </ul>
            </div>
            <div className="border border-black border-2 p-4 rounded-3 mt-4">
              <p className="fw-bold fs-4">Property Video</p>
              {/* <div className="w-100 position-relative">
                <img
                  src={propvideo}
                  alt=""
                  className="w-100 object-fit-cover"
                />

                <div className="playBtn position-absolute top-0  w-100 h-100 d-flex justify-content-center align-items-center">
                  <button className="btn bg-success border border-black  p-0 rounded-circle">
                    <BsPlayCircleFill className="playIcon" />
                  </button>
                </div>
              </div> */}
              <ReactPlayer url={videoUrl} controls={true} width={`100%`} />
            </div>
          </div>

          <div className="OtherOptions d-flex flex-xxl-column flex-md-row gap-3 w-100">
            <div className="d-flex w-100 flex-column justify-content-center align-items-center gap-2 border border-2 border-black p-3 rounded-4">
              <img src={person} alt="" />
              <h2 className="text-center fs-4">Ezra Aduramigba</h2>
              <p className="text-secondary">Sales Support</p>
              <button className="btn bg-black text-white fw-semibold fs-6">
                Message: 08130054558
              </button>
              <button className="btn bg-success-subtle text-success fw-semibold fs-5">
                Call: 08130054558
              </button>
            </div>

            <div className="d-flex w-100 flex-column justify-content-center align-items-center gap-2 border border-2 border-black p-3 rounded-4 ">
              <h2 className="text-center fs-4">
                Old Property? Would you like to delete this property or mark as
                sold?
              </h2>
              <button className="btn bg-success text-white fw-semibold fs-5 ">
                Mark As Sold
              </button>
              <button className="btn border border-success text-success fw-semibold">
                Delete Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPropertyDetailsComponent;
