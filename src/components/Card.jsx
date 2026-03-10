import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Card() {
    const [search, setSearch] = useState("");

    const CARD_DATA = [
        {
            id: 1,
            image: '/assets/images/image-1.jpg',
            name: 'Vinay',
            course: 'Front End Developer'

        },
        {
            id: 2,
            image: '/assets/images/image-2.jpg',
            name: 'Krish',
            course: 'Back End Developer'

        },
        {
            id: 3,
            image: '/assets/images/image-3.jpg',
            name: 'Anjali',
            course: 'UI-UX Design'

        },
        {
            id: 4,
            image: '/assets/images/image-4.jpg',
            name: 'Annu',
            course: 'App Developer'

        },
    ];

    const filtered = CARD_DATA.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className='min-h-screen items-center justify-center flex'>
            <div className='max-w-360 px-3 mx-auto'>
                <div className='flex flex-col items-center justify-center'>
                    <input
                        type="text"
                        placeholder="Search student..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full max-w-md px-4 py-2 border border-gray-400 rounded-lg outline-none focus:border-blue-500"
                    />

                    {search && (
                        <div className="mt-6 w-full">
                            {filtered.length > 0 ? (
                                <div className="flex flex-row flex-wrap gap-4">
                                    {filtered.map((item) => (
                                        <Link to={`/student/${item.id}`} key={item.id}>
                                            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
                                                <img src={item.image} alt="" className='rounded-lg' />
                                                <h3 className="text-xl font-bold">{item.name}</h3>
                                                <p className="text-gray-600">{item.course}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-xl font-semibold bg-white p-4 shadow rounded-lg text-red-300">
                                    User Not Found
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {!search && (<div className='flex flex-row flex-wrap -mx-3 gap-y-5 mt-5'>
                    {CARD_DATA.map((student, i) => {
                        return (
                            <div key={i} className='w-full sm:w-[50%] md:w-[33.33%] lg:w-[25%] px-3'>
                                <Link to={`/student/${student.id}`}>
                                    <div className='card shadow-lg px-3 pb-5 rounded-[20px] gap-5 flex flex-col'>
                                        <img src={student.image} alt="image" className='w-full rounded-[20px]' />
                                        <h2 className='text-[32px] font-semi-bold leading-[100%]'>{student.name}</h2>
                                        <p className='text-[24px] font-medium'>{student.course}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                )}
            </div>
        </div>
    )
}

export default Card
