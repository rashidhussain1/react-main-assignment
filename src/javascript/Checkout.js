import React from "react";
import { NavLink } from "react-router-dom";

function Checkout() {
  return (
    <div className="main_content">
      <div className="allcourses_header">
        <span className="courses_header_text">Shopping Cart</span>
        <img
          className="react_img"
          src="https://cdn.sanity.io/images/ay6gmb6r/production/1233ce7b2eab4261d9a77e86797b523dd652475e-2240x1260.png?w=800&h=450&fit=crop"
        />
      </div>
    

      <div className="all-courses">
        <div className="courses-left">
          <div className="left_top">
            <div>
              <p className="text">Courses in Cart</p>
            </div>
            
          </div>
          <div className="course-card">
        <div className="card_left">
          <div className="card_img">
            <img src="" />
          </div>
          <div className="card_text">
            <p>Responsive Design Course XYZ </p>
            <p>
              <button className="button_topic" type="button">
                React
              </button>
              <button className="button_topic" type="button">
                React
              </button>
            </p>
          </div>
        </div>
        <div className="card_left">
          <div className="move_to_wishlist">Move to wishlist</div>
          <div className="card_discount_price">Rs 530/-</div>
          <div className="card_cart_button">
            <button className="button_cart" type="button">
              Delete-Btn
            </button>
          </div>
        </div>
      </div>

          {/* extra cards */}
          <div className="course-card">
        <div className="card_left">
          <div className="card_img">
            <img src="" />
          </div>
          <div className="card_text">
            <p>Responsive Design Course XYZ </p>
            <p>
              <button className="button_topic" type="button">
                React
              </button>
              <button className="button_topic" type="button">
                React
              </button>
            </p>
          </div>
        </div>
        <div className="card_left">
          <div className="move_to_wishlist">Move to wishlist</div>
          <div className="card_discount_price">Rs 530/-</div>
          <div className="card_cart_button">
            <button className="button_cart" type="button">
              Delete-Btn
            </button>
          </div>
        </div>
      </div>
      </div>





          {/* cards ends here */}
       
        <div className="courses-right-tab">
          
          <div className="right_tab">
            <div className="line1">Total Amount</div>
            <div className="line2"> RS 1689 </div>
              <span className="line3">You saved Rs 1000/-</span>
              <span className="line4">
                <a href="#divOne">
                <button className="checkout_btn" type="button">
                  Checkout
                </button>
                </a>

                <div className="overlay" id="divOne">
        <div className="pop_up">
          <div className="top_header">X</div>
          <div className="add_to_wishlist_text">
            <p>You have successfully placed your order</p>
          </div>
          <NavLink to={'/'}>
          <button className="ok_button" type="button">
            OK
          </button>
          </NavLink>
        </div>
      </div>


              </span>
            </div>
        </div>
      </div>

      



    </div>
  );
}

export default Checkout;


{/* <div className="course-card">
        <div className="card_left">
          <div className="card_img">
            <img src="" />
          </div>
          <div className="card_text">
            <p>Responsive Design Course XYZ </p>
            <p>
              <button className="button_topic" type="button">
                React
              </button>
              <button className="button_topic" type="button">
                React
              </button>
            </p>
          </div>
        </div>
        <div className="card_left">
          <div className="move_to_wishlist">Move to wishlist</div>
          <div className="card_discount_price">Rs 530/-</div>
          <div className="card_cart_button">
            <button className="button_cart" type="button">
              Delete-Btn
            </button>
          </div>
        </div>
      </div> */}