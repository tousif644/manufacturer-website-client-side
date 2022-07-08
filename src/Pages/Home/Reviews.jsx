import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import ReviewData from './ReviewData';

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
};
const Reviews = () => {
    const [review, SetReview] = useState([])

    useEffect(() => {
        fetch("https://equipo-fullstack-app.herokuapp.com/reviews", {
            method: "GET",
            headers: {
                authorization: `Token ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetReview(data)
            })
    }, [])
    return (
        <div className='p-8'>
            <div className=''>
                <h2 className='text-4xl text-center font-bold'>See our Client Reviews</h2>
                <p className='text-center text-secondary '>Our Client is from all over the world</p>
                <div>
                    <Slider {...settings}>
                        {
                            review.map(reviews => <ReviewData key={reviews._id} reviews={reviews}></ReviewData>)
                        }

                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Reviews;