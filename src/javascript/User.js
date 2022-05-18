import React from "react";
import { NavLink } from "react-router-dom";

function User() {
  return (
    <div className="user_profile">
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

      <div className="form_container">
        <div className="form_left">
          <img
            className="profile_pic"
            src="https://st2.depositphotos.com/2783505/8278/i/600/depositphotos_82784040-stock-photo-passport-picture-of-a-cool.jpg"
          />
        </div>
        
        <div className="form_right">
        <form>
          <div className="name">
            <div className="display_name">
              <p className="name_text">Display Name</p>
              <input
                className="input_name"
                type="text"
                placeholder="Add placeholder text"
              ></input>
            </div>
            <div className="first_name">
              <p className="name_text">First Name</p>
              <input
                className="input_name"
                type="text"
                placeholder="Add placeholder text"
              ></input>
            </div>
            <div className="last_name">
              <p className="name_text">Last Name</p>
              <input
                className="input_name"
                type="text"
                placeholder="Add placeholder text"
              ></input>
            </div>
          </div>

          <div className="about">
            <p className="name_text">About Yourself</p>
            <input className="input_about" type="text"></input>
          </div>

          <div className="interest">
            <p className="name_text">Area of Interest</p>
            <input type="checkbox" className="checkbox1" value="Designer" />
            <label className="label_text"> Designer</label>
            <br />
            <input type="checkbox" className="checkbox1" value="Designer" />
            <label className="label_text"> Developer</label>
            <br />
            <input type="checkbox" className="checkbox1" value="Designer" />
            <label className="label_text"> Project Manager</label>
            <br />
            <input type="checkbox" className="checkbox1" value="Designer" />
            <label className="label_text"> Sales</label>
            <br />
          </div>

          <div className="student_professional">
            <p className="name_text">
              Are you a student or wworking professional
            </p>
            <input
              type="radio"
              id="student"
              name="profession"
              value="student"
            />
            <label className="label_text">Student</label>
            <br />
            <input
              type="radio"
              id="professional"
              name="profession"
              value="professional"
            />
            <label className="label_text">Professional</label>
            <br />
          </div>
          <div className="exp_box">
            <div className="experience">
              <p className="name_text">How much of experience you have</p>
              <input type="radio" id="0-5" name="exp" value="0-5" />
              <label className="label_text">0-5</label>
              <input type="radio" id="5-10" name="exp" value="5-10" />
              <label className="label_text">5-10</label>
              <input type="radio" id="10_above" name="exp" value="10_above" />
              <label className="label_text">10 {"&"} above</label>
            </div>

            <div className="expertise">
              <p className="name_text">What is your expertise</p>
              <input type="radio" id="Java" name="expertise" value="Java" />
              <label className="label_text">Java</label>
              <input type="radio" id="React" name="expertise" value="React" />
              <label className="label_text">React</label>
              <input
                type="radio"
                id="Backend"
                name="expertise"
                value="Backend"
              />
              <label className="label_text">Backend</label>
            </div>

            <div className="role">
              <p className="name_text">Enter your role</p>
              <input
                className="input_name"
                type="text"
                placeholder="Add placeholder text"
              ></input>
            </div>
          </div>
          <div className="save_box">
            <div>
              
                <input className="button_save" type="submit" value="SAVE"/>
              
            </div>
          </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default User;

{
  /* <a href="#divOne" class="button">
        click me
      </a>
      <div className="overlay" id="divOne">
        <div className="pop_up">
          <div className="top_header">X</div>
          <div className="add_to_wishlist_text">
            <p>Added to wishlist</p>
          </div>
          <NavLink to={'/'}>
          <button className="ok_button" type="button">
            OK
          </button>
          </NavLink>
        </div>
      </div> */
}
