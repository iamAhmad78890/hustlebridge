import React from 'react'
import "./home.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Home = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            {/* header */}
            <div class="container-fluid header_section">
                <div class="container">
                    <div class="navbar">
                        <div>
                            <img src="./images/logo-icon.png" alt="" />
                        </div>
                        <div class="nav-links">
                            <a class="active home" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
                            <a href="#"><i class="fa fa-fw fa-search"></i> Post hustle</a>
                            <a href="#"><i class="fa fa-fw fa-envelope"></i> find hustle</a>
                            <a href="#"><i class="fa fa-fw fa-user"></i> join service providers</a>
                        </div>


                    </div>
                </div>
            </div>

            {/* hero section  */}
            <div className='container'>

                <div className='row'>
                    <div className='col-4 '>
                        <img src="./images/heroimg1.png" className='img-fluid mt-5' alt="" />
                    </div>
                    <div className='col-4 search'>
                        <h1 className='mb-4'>Find The Best <br /> Services</h1>
                        <div className='searchbar'>
                            <div className='row '>
                                <div className='col-12'>
                                    <div className='row search_icon_content'>
                                        <div className='col-6'>

                                            <div>
                                                <span> Find  Services</span>
                                            </div>
                                        </div>

                                        <div className='col-6'>
                                            <div>
                                                <i class="fa fa-fw fa-search"></i>
                                            </div>
                                        </div>

                                    </div>

                                </div>



                            </div>



                        </div>
                        <div className='col-6 search_button'>
                            <button>Search</button>

                        </div>
                    </div>
                    <div className='col-4'>
                        <img src="./images/imghero2.png" className='img-fluid hero_img' alt="" />
                    </div>

                </div>

            </div>

            {/* service provider */}
            <div className='Container-fluid my-5'>
                <h1 className='text-center carousel_heading'>
                    Best Service Provider

                </h1>
                <Carousel responsive={responsive}>
                    <div className='card cake'>
                        <div className='review'>
                            <div className='review_star'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <div className='reviews'>
                                <span>
                                    4.7 (22) reviews
                                </span>
                            </div>


                        </div>
                        <div className='review_para'>
                            <p>The green tick shows that you have studied the said Lesson/Topic.The green tick shows that you have studied the said Lesson/Topic.</p>
                        </div>
                        <div className='review_id'>
                            <div className='review_img'>
                                <img src="./images/face.jpeg" alt="" />
                            </div>
                            <div className='name'>
                                <span>Name</span>
                            </div>
                        </div>



                    </div>
                    <div className='card cake'>
                        <div className='review'>
                            <div className='review_star'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <div className='reviews'>
                                <span>
                                    4.7 (22) reviews
                                </span>
                            </div>


                        </div>
                        <div className='review_para'>
                            <p>The green tick shows that you have studied the said Lesson/Topic.The green tick shows that you have studied the said Lesson/Topic.</p>
                        </div>
                        <div className='review_id'>
                            <div className='review_img'>
                                <img src="./images/face.jpeg" alt="" />
                            </div>
                            <div className='name'>
                                <span>Name</span>
                            </div>
                        </div>



                    </div>
                    <div className='card cake'>
                        <div className='review'>
                            <div className='review_star'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <div className='reviews'>
                                <span>
                                    4.7 (22) reviews
                                </span>
                            </div>


                        </div>
                        <div className='review_para'>
                            <p>The green tick shows that you have studied the said Lesson/Topic.The green tick shows that you have studied the said Lesson/Topic.</p>
                        </div>
                        <div className='review_id'>
                            <div className='review_img'>
                                <img src="./images/face.jpeg" alt="" />
                            </div>
                            <div className='name'>
                                <span>Name</span>
                            </div>
                        </div>



                    </div>
                    <div className='card cake'>
                        <div className='review'>
                            <div className='review_star'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <div className='reviews'>
                                <span>
                                    4.7 (22) reviews
                                </span>
                            </div>


                        </div>
                        <div className='review_para'>
                            <p>The green tick shows that you have studied the said Lesson/Topic.The green tick shows that you have studied the said Lesson/Topic.</p>
                        </div>
                        <div className='review_id'>
                            <div className='review_img'>
                                <img src="./images/face.jpeg" alt="" />
                            </div>
                            <div className='name'>
                                <span>Name</span>
                            </div>
                        </div>



                    </div>
                    <div className='card cake'>
                        <div className='review'>
                            <div className='review_star'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <div className='reviews'>
                                <span>
                                    4.7 (22) reviews
                                </span>
                            </div>


                        </div>
                        <div className='review_para'>
                            <p>The green tick shows that you have studied the said Lesson/Topic.The green tick shows that you have studied the said Lesson/Topic.</p>
                        </div>
                        <div className='review_id'>
                            <div className='review_img'>
                                <img src="./images/face.jpeg" alt="" />
                            </div>
                            <div className='name'>
                                <span>Name</span>
                            </div>
                        </div>



                    </div>
                    <div className='card cake'>
                        <div className='review'>
                            <div className='review_star'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <div className='reviews'>
                                <span>
                                    4.7 (22) reviews
                                </span>
                            </div>


                        </div>
                        <div className='review_para'>
                            <p>The green tick shows that you have studied the said Lesson/Topic.The green tick shows that you have studied the said Lesson/Topic.</p>
                        </div>
                        <div className='review_id'>
                            <div className='review_img'>
                                <img src="./images/face.jpeg" alt="" />
                            </div>
                            <div className='name'>
                                <span>Name</span>
                            </div>
                        </div>



                    </div>
                </Carousel>;
            </div>

            {/* browse categories */}
            <div className='container text-center browse'>
                <h1>Browser Categories</h1>
                <p>We are providing the best services you.</p>

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div>
                            <img src="./images/cate1.png" className='img-fluid' alt="" />
                            <img className='mx-3 img-fluid' src="./images/cate2.png" alt="" />
                            <div className='mt-3 img-fluid'>
                                <img src="./images/cate3.png" className='img-fluid' alt="" />

                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <img src="./images/cate4.png" className='img-fluid' alt="" />
                            <img className='mx-3 img-fluid' src="./images/cate5.png" alt="" />
                            <div className='mt-3 img-fluid'>
                                <img src="./images/cate6.png" className='img-fluid' alt="" />

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* it has been service provider */}
            <div className='container service_pro'>

                <h1 className='mt-5 '>It has never been easier to find <br />  service providers  </h1>
                <div className='row'>


                    <div className='col-6 service_img'>
                        <img className='img-fluid mt-5' src="./images/service1.png" alt="" />

                    </div>
                    <div className='col-6'>
                        <div className='service_content mt-5'>
                            <h1>Tell us everything</h1>
                            <p>Describe your needs precisely in a few clicks thanks to  <br /> our questionaire </p>
                        </div>
                        <div className='service_content mt-5'>
                            <h1>Compare offers</h1>
                            <p>Describe your needs precisely in a few clicks thanks to  <br /> our questionaire </p>
                        </div>
                        <div className='service_content mt-5'>
                            <h1>Hire a service provider</h1>
                            <p>Describe your needs precisely in a few clicks thanks to  <br /> our questionaire </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* why choose */}
            <div className='container my-5'>
                <h1 className='my-5 choose_us_heading text-center'>Why Choose Us?</h1>
                <div className='row'>
                    <div className='col-6'>
                        <div className='top_quality_section'>
                            <div className='top_quality_content'>
                                <img src="./images/v1.svg" alt="" />
                                <div>
                                    <h5>100 % Quality</h5>
                                    <p>We take right steps so you dont have to worry    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-6'>
                                <img src="./images/choose1.png" alt="" />
                            </div>
                            <div className='col-6 my-5 best_service_content'>
                                <h1> Best Service</h1>
                                <p>We Provide the best Service</p>
                            </div>


                        </div>
                        <div className='row'>
                            <div className='col-6 mt-3  '>
                                <img src="./images/choose3.png" alt="" />
                            </div>
                            <div className='col-6 my-5 best_service_content'>
                                <h1> Verified Expert</h1>
                                <p>We Provide the best Service</p>
                            </div>


                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <img src="./images/choose2.png" alt="" />
                            </div>
                            <div className='col-6 my-5 best_service_content'>
                                <h1> Service Variety</h1>
                                <p>We Provide the best Service</p>
                            </div>


                        </div>
                    </div>


                </div>

            </div>
            {/* are you available */}
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <img src="./images/imgapp.png" alt="" />
                    </div>
                    <div className='col-8 available_section'>
                        <h2 className='my-3'>Are you a service provider? </h2>
                        <p className='my-3'>We Provide the all types of services</p>
                        <button className='my-5'>
                            Join The Hustle
                        </button>
                    </div>
                </div>

<div className='row'>
    <div className='col-4'>
<img src="./images/appstore.png" alt="" />
    </div>
    <div className='col-4 text-center'>
<h1 className='available_on'>Available ON</h1>
    </div>
    <div className='col-4'>
<img src="./images/google.png" alt="" />
    </div>
     
</div>
            </div>
            {/* footer */}
            <div class="container-fluid footer_section mt-5">
                <div className='footer py-4'>
                    <div>
                        <img src="./images/logo-icon.png" alt="" />
                    </div>
                    <div className='footer_links'>
                        <a href=""> Terms and Condition </a>
                        <a href=""> Privacy Policy </a>
                        <a href=""> Content Guidline </a>
                    </div>
                    <div className='mt-3'>
                        <img src="./images/Vector.png" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home