import React from 'react'

export default function ClientNav() {
    return (
        <div>
            <nav class="bg-blue">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex-shrink-0 flex items-center">
                                <img class="block lg:hidden h-8 w-auto" src="./sbcr-logo-transparent-white-bg.png" alt="Surf Break Costa Rica Logo"></img>
                                <img class="hidden lg:block h-8 w-auto" src="./sbcr-logo-transparent-white-bg.png" alt="Surf Break Costa Rica logo"></img>
                            </div>
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    <a href="/home" class="bg-turquoise text-white hover:bg-turquoise-dark px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                                    <a href="/flightinfo" class="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium">Flight Info</a>
                                    <a href="/releaseform" class="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium">Release Form</a>
                                    <a href="/itinerary" class="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium">Itinerary</a>
                                    <a href="/photos" class="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium">Photos</a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button class="bg-turquoise p-1 rounded-full text-white hover:bg-turquoise-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span class="sr-only">View notifications</span>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                            <div class="ml-3 relative">
                                <div>
                                    <button class="bg-blue flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white" id="user-menu" aria-haspopup="true"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden sm:hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" class="bg-turquoise text-white hover:bg-turquoise-dark block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                        <a href="#" class="text-white hover:bg-turquoise hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
                        <a href="#" class="text-white hover:bg-turquoise hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                        <a href="#" class="text-white hover:bg-turquoise hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
