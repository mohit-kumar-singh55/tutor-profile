import React from 'react';
import StarFilled from "../../icons/StarFilled";
import StarEmpty from "../../icons/StarEmpty";

const Reviews = () => {
    return (
        <div className='snap-fullPage h-[calc(100vh-79px)] flex flex-col items-center justify-center bg-[#FFF7F7]'>
            <TopHeading />

            <ReviewContainer />
        </div>
    )
}

export default Reviews;

const TopHeading = () => {
    return (
        <div className='flex items-center justify-between w-[1069px] min-w-[396px] font-monts'>
            <h2 className='text-[#5E5252] font-bold text-[30px]'>
                REVIEWS
            </h2>

            {/* Stars */}
            <div className='hidden sm:flex items-center gap-4 capitalize text-[#2E2E2E] font-medium font-poppins'>
                <div className='flex items-center justify-center gap-2'>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarEmpty />
                </div>
                <p>
                    <strong>4.1</strong>/5 avg rating (132 Ratings)
                </p>
            </div>

            {/* button */}
            <button className='w-[129.47px] h-[31px] sm:w-[213px] sm:h-[51px] rounded-md text-[#FC4D6D] border-2 border-[#FC4D6D] font-poppins font-medium flex items-center justify-evenly'>
                <span className='text-[25px]'>
                    +
                </span>
                Add a Review
            </button>
        </div>
    )
}

// Review Container
const ReviewContainer = () => {
    return (
        <div className='flex flex-col items-center justify-between'>
            <Review />

            {/* dots */}
            <div>
                dots
            </div>
        </div>
    )
}


// Reviews
const Review = () => {
    return (
        <div className='flex items-center justify-center w-[1069px] h-[330px] min-w-[396px] min-h-fit px-2 py-4'>
            Review
        </div>
    )
}