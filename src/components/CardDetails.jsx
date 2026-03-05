import React from 'react'
import { Link, useParams } from 'react-router-dom';

function CardDetails() {
  const { id } = useParams();

  const CARD_DATA = [
    { id: 1, image: '/assets/images/image-1.jpg', title: 'Vinay', course:'Front End Developement', age:"19" },
    { id: 2, image: '/assets/images/image-2.jpg', title: 'Krish', course:'Back End Developement', age:"20" },
    { id: 3, image: '/assets/images/image-3.jpg', title: 'Anjali', course:'UI-UX Design', age:"21" },
    { id: 4, image: '/assets/images/image-4.jpg', title: 'Annu', course:'App Developer', age:"22" },
  ];

  const student = CARD_DATA.find((item) => item.id === Number(id));

  return (
    <div className='min-h-screen items-center justify-center flex flex-col gap-5'>
      <div className="p-10  ">
        <h1 className="text-3xl font-bold text-center">Student Details</h1>
        {student ? (
          <>
            <img
              src={student.image}
              alt={student.title}
              className="mt-5 rounded-xl w-[300px]"
            />
  
            <p className="text-xl">Name: {student.title}</p>
            <p className="text-lg mt-2">Course: {student.course}</p>
            <p className="text-lg mt-2">Age: {student.age}</p>
            
          </>
        ) : (
          <p className='text-red-500 text-xl'>No Data Found</p>
        )}
      </div>

      <Link to="/" className='bg-black text-white text-2xl px-4 py-2 rounded-lg cursor-pointer'>
        Back
      </Link>
    </div>


    
  )
}

export default CardDetails

 