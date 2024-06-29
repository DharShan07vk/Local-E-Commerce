import React from 'react'
import { Footer, Navbar } from "../components";
import mens from '../Assests/Mens.jpeg'
import womens from '../Assests/Womens.jpeg'
import jwe from '../Assests/OIP.jpeg'
import elec from '../Assests/Electronics.jpeg'
const AboutPage = () => {

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to <b>DealsCart</b><br/>
<br/>
At <b>DealsCart</b>, we're dedicated to bringing you the best products at unbeatable prices. Since our founding in <b>2024</b>, we've been committed to making online shopping enjoyable and hassle-free.
<br/>
<b>What We Offer</b><br/>
<li>Top-Quality Products:</li> Handpicked items that combine quality and value.
<li>Exceptional Service:</li> Friendly support to help with any questions or concerns.
<li>Fast & Secure Shipping:</li> Quick delivery and secure payment methods for your peace of mind.

<br/>
Contact Us:

<br/>
<b><i>Thank you for choosing DealsCart!</i></b>
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={mens}alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={womens} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={jwe} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={elec}alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage