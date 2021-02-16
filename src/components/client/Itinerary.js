import React from 'react'
import { connect } from 'react-redux'
import ClientNav from './ClientNav';

export const Itinerary = (props) => {

    const clients = [{
        first_name: "Mary",
        last_name: "Baker",
        email: "mary@mary.com",
        level: "intermediate",
        arrival_date: "05/03/2021",
        departure_date: "05/06/2021",
        lesson_count: 3,
        notes: "Mary is beginner intermediate. She needs help catching waves on her own.",
        lessons: [{date: "05/03/2021", time: "08:00 AM", location: "Tamarindo"}, {date: "05/04/2021", time: "07:00 AM", location: "Casitas"}, {date: "05/05/2021", time: "06:00 AM", location: "Avellanas"}]
    }]

    const lessons = clients.map((client) => {
        return client.lessons.map((lesson) => {
                return <a href="mailto:contact@surfbreakcostarica.com?subject=Please email me the e-sign release form" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-turquoise-light hover:bg-turquoise mx-1">{lesson.date}</a>
        })
    })

    return (
        <div>
            <ClientNav />
            {/* Header */}
            <div class="bg-turquoise-dark text-white">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        <span class="block">Your Surf Itinerary</span>
                    </h2>
                    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div class="inline-flex rounded-md shadow mx-1">
                            {lessons}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Itinerary)
