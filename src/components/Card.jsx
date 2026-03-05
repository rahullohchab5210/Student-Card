import React from 'react'
import { Link } from 'react-router-dom';

function Card() {
    const CARD_DATA = [
        {
            id: 1,
            image: '/assets/images/image-1.jpg',
            title: 'Vinay',
            course: 'Front End Developer'
             
        },
        {
            id: 2,
            image: '/assets/images/image-2.jpg',
            title: 'Krish',
            course: 'Back End Developer'
             
        },
        {
            id: 3,
            image: '/assets/images/image-3.jpg',
            title: 'Anjali',
            course: 'UI-UX Design'
            
        },
        {
            id: 4,
            image: '/assets/images/image-4.jpg',
            title: 'Annu',
            course: 'App Developer'
 
        },
    ];

    return (
        <div className='min-h-screen items-center justify-center flex'>
            <div className='max-w-360 px-3 mx-auto'>
                <div className='flex flex-row flex-wrap -mx-3 gap-y-5'>
                    {CARD_DATA.map((student, i) => {
                        return (
                            <div key={i} className='w-full sm:w-[50%] md:w-[33.33%] lg:w-[25%] px-3'>
                                <Link to={`/student/${student.id}`}>
                                    <div className='card shadow-lg px-3 pb-5 rounded-[20px] gap-5 flex flex-col'>
                                        <img src={student.image} alt="image" className='w-full rounded-[20px]' />
                                        <h2 className='text-[32px] font-semi-bold leading-[100%]'>{student.title}</h2>
                                        <p className='text-[24px] font-medium'>{student.course}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card
