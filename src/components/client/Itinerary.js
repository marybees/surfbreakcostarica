import React, { useState } from 'react';
import { connect } from 'react-redux'
import ClientNav from './ClientNav';
import GoogleMap from './GoogleMap'

export const ClientHome = (props) => {
    const [lessonIndex, setLessonIndex] = useState(0);

    const clients = [{
        first_name: "Mary",
        last_name: "Baker",
        email: "mary@mary.com",
        level: "intermediate",
        arrival_date: "05/03/2021",
        departure_date: "05/06/2021",
        lesson_count: 3,
        lessons: [{date: "05/03/2021", time: "08:00 AM", location: "Tamarindo"}, {date: "05/04/2021", time: "07:00 AM", location: "Casitas"}, {date: "05/05/2021", time: "06:00 AM", location: "Avellanas"}],
        instructor: [{name: "Jluis", phone: "+1 (555) 555-5555"}],
        notes: "Mary is beginner intermediate. She needs help catching waves on her own."
    }]

    const handleOnClick = (e, index) => {
        setLessonIndex(index)
    }

    const lessons = clients.map((client) => {
        return client.lessons.map((lesson, index) => {
                return(
                <button onClick={(e) => {
                    return handleOnClick(e, index)
                }} class="inline-flex items-center justify-center px-1 py-1 border border-transparent text-base font-medium rounded-md text-white bg-turquoise-light hover:bg-turquoise m-1">
                    {lesson.date}
                </button>
                )
        })
    })

    return (
        <div>
            <ClientNav />
            <div class="relative bg-white overflow-hidden">
                <div class="max-w-7xl mx-auto">
                    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl py-1">
                                <span class="block">Your Surf Itinerary</span>
                            </h2>
                            <p class="mb-4 mx-1">Select a date below to see your itinerary for that day.</p>
                            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                <div class="inline-flex flex-wrap">
                                    {lessons}
                                </div>
                            </nav>
                        </div>

                        <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-4 sm:px-6 md:mt-4 lg:mt-4 lg:px-8 xl:mt-4">
                            <div class="sm:text-center lg:text-left">
                                <p class="mt-3 text-base text-gray-darkest sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    <p><span class="font-bold">Date: </span>{clients[0].lessons[lessonIndex].date}</p>
                                    <p><span class="font-bold">Time: </span>{clients[0].lessons[lessonIndex].time}</p>
                                    <p><span class="font-bold">Location: </span> {clients[0].lessons[lessonIndex].location}</p>
                                    <p><span class="font-bold">Instructor:</span> {clients[0].instructor[lessonIndex].name}</p>
                                    <p><span class="font-bold">WhatsApp: </span>{clients[0].instructor[lessonIndex].phone}</p>
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <GoogleMap class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"></GoogleMap>
                    </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(ClientHome)

