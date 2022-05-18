import React from "react";
import { NavLink } from "react-router-dom";
import  { useState, useEffect } from "react";
import axios from "axios";
export default function () {

    const [list, setList] = useState([]);
    const getCourses = async () => {
        await axios
    
          .get("https://627e135bb75a25d3f3b1353c.mockapi.io/api/carsdata/courses")
    
          .then((response) => {
            setList(response.data);
          })
    
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
    
        getCourses();
        
        }, []);



        const handleSelect = (e) => {
            const value = e.target.value;
            let copyList = [...list];
            if (value == "low") {
              copyList.sort((a, b) => {
                return a.curr_price - b.curr_price;
              });
            } else if (value == "high") {
              copyList.sort((a, b) => {
                return b.curr_price - a.curr_price;
              });
            }
            setList(copyList);
          };


  return (
    <div className="main_content">
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
      <div className="all-courses">
        <div className="courses-left">
          <div className="left_top">
            <div>
              <p className="text">All courses</p>
            </div>
            <div>
              <select onChange={(e) => handleSelect(e)}>
                <option value="">Course Price</option>
                <option value="low">Lowest Price</option>
                <option value="high">Highest Price</option>
              </select>
            </div>
          </div>
       
          
          {list.map((course) => {
          return (
            <>
            <div className="course-card">
            <div className="card_img">
              <img src="" />
            </div>
            <div className="card_text">
              <p className="course_title">{course.title} </p>
              <p>
                <button className="button_topic" type="button">
                  {course.tag1}
                </button>
                <button className="button_topic" type="button">
                  {course.tag2}
                </button>
              </p>
            </div>
            <div className="card_creator">{course.author}</div>
            <div className="card_star">
                <img className="star_img" src="https://media.istockphoto.com/vectors/star-icon-vector-illustration-vector-id1135769825?k=20&m=1135769825&s=612x612&w=0&h=6ZHmst4kzRPppl4XCC57ZlIMspT42ePaqzf5X3XPwDI="/>
            </div>
            <div className="card_discount_price">Rs_{course.curr_price}/-</div>
            <div className="card_price"><del>Rs{course.org_price}/-</del></div>
            <div className="card_cart_button">
              <a href="#divOne">
                <button className="button_cart" type="button" >
                  ADD TO CART
                </button>
              </a>
            </div>
            <div className="card_arrow">
              <NavLink to={"/"+course.id}> {">"}</NavLink>
            </div>
          </div>

          <div className="overlay" id="divOne">
            <div className="pop_up">
              <div className="top_header">X</div>
              <div className="add_to_wishlist_text">
                <p>Sucessfully added to cart</p>
              </div>
              <NavLink to={"/"}>
                <button className="ok_button" type="button">
                  OK
                </button>
              </NavLink>
            </div>
          </div> 
            </>
          );
        })}
          {/* extra cards */}
          
          {/* cards ends here */}
        </div>
        <div className="courses-right">
          <div className="right_top">
            <input
              className="search_bar"
              type="text"
              placeholder="Search by name"
            />
          </div>
          <div className="mycart_tab">
            <div className="mycart_text">Your cart details</div>
            <div className="mycart_contents">
              Your cart is empty right now. Please add courses from the list.
            </div>
            <div className="mycart_value">
              <span className="mycart_value_text">Total cart value</span>
              <span className="cart_value">0 RS/-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

