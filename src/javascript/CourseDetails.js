import { NavLink } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function CourseDetails() {
  const { id } = useParams();
  const [course, setList] = useState([]);
  const getCourse = async () => {
    await axios
      .get("https://627e135bb75a25d3f3b1353c.mockapi.io/api/carsdata/courses/" + id)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCourse();
  }, []);




  return (
    <div className="course_details">
      <div className="allcourses_header">
        <span className="courses_header_text">
          Discover Latest courses on <br />
          React
        </span>
        <img
          className="react_img"
          src="https://cdn.sanity.io/images/ay6gmb6r/production/1233ce7b2eab4261d9a77e86797b523dd652475e-2240x1260.png?w=800&h=450&fit=crop"
        />
      </div>
      <div className="nav_path">
        <span className="text1">All Courses</span> >{" "}
        <span className="text2">Responsive Design Course</span>
      </div>

      <div className="course_content1">
        <p className="text3">
          {" "}
          {course.title}
        </p>
        <p className="text4">
          {" "}
          {course.desc}
        </p>
        <p className="text5"> {course.author} </p>
        <p className="course_content_buttons">
          <button className="button1" type="button">
            {course.tag1}{" "}
          </button>
          <button className="button1" type="button">
            {course.tag2}{" "}
          </button>
          <button className="button1" type="button">
            React{" "}
          </button>
        </p>
      </div>
      <div className="content2_video">
        <div className="course_content2">
          <p className="text6">Course Details</p>
          <p className="text7">
            {course.details}
          </p>
          <p className="text7">
          {course.details}
          </p>
          <p className="text7">
          {course.details}
          </p>
          <p className="text7">
          {course.details}
          </p>
        </div>
        <div className="course_content3">
          <div className="video">
            <img
              className="play_button"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5s_tFU8ED41uktZrShu8wc-E0T0IPHIg8Vw&usqp=CAU"
            />
          </div>
          <div className="below_video">
            <p className="text8"> RS 563/- </p>
            <p className="text9"> RS 920/- </p>
            <p className="text10"> 8 hrs left for this price </p>
            <p className="two_btn">
              <button className="button2" type="button">
                ADD TO CART{" "}
              </button>
              <button className="button3" type="button">
                ADD TO WISHLIST{" "}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
