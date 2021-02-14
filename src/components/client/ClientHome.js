import React from 'react'
import { connect } from 'react-redux'
import ClientNav from './ClientNav';
import CheckListProgress from './CheckListProgress';

export const ClientHome = (props) => {
    return (
        <div>
            <ClientNav />
            <div class="relative bg-white overflow-hidden">
            <div class="max-w-7xl mx-auto">
                <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                {/* Don't remove this div. It's a placeholder for where the former navbar was. */}
                <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
                <main class="mt-8 mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-14 lg:mt-18 lg:px-8 xl:mt-26">
                    <div class="sm:text-center lg:text-left">
                    <h1 class="text-4xl tracking-tight font-extrabold text-gray-darkest sm:text-5xl md:text-6xl">
                        <div class="block">Hola, <span class="text-turquoise">Mary</span></div>
                    </h1>
                    <p class="text-1xl tracking-tight font-extrabold text-gray-darkest sm:text-2xl md:text-3xl pt-6">There are <span class="text-turquoise">10</span> days left until your surf adventure!</p>
                    <p class="mt-3 text-base text-gray-darkest sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        We can't wait to see you in beautiful Costa Rica! Before then, be sure to complete your pre-trip checklist.
                    </p>
                    <p class="mt-3 text-base text-gray-darkest sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">See you soon and pura vida!</p>
                    <p class="text-1xl tracking-tight font-extrabold text-gray-darkest sm:text-2xl md:text-3xl py-6">Pre-Trip Checklist</p>
                    <div>
                        <label class="flex justify-start items-start">
                            <div class="bg-white border-2 rounded border-gray w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-gray">
                                <input type="checkbox" class="text-turquoise"></input>
                                <svg class="fill-current hidden w-4 h-4 text-turquoise pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                            </div>
                            <div class="select-none text-sm">Send us your flight info</div>
                        </label>
                        <label class="flex justify-start items-start">
                            <div class="bg-white border-2 rounded border-gray w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-gray">
                                <input type="checkbox" class="text-turquoise"></input>
                                <svg class="fill-current hidden w-4 h-4 text-turquoise pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                            </div>
                            <div class="select-none text-sm">Sign our release forms</div>
                        </label>
                        <label class="flex justify-start items-start">
                            <div class="bg-white border-2 rounded border-gray w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-gray">
                                <input type="checkbox" class="text-turquoise"></input>
                                <svg class="fill-current hidden w-4 h-4 text-turquoise pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                            </div>
                            <div class="select-none text-sm">Get packing with our suggested list</div>
                        </label>
                        <label class="flex justify-start items-start">
                            <div class="bg-white border-2 rounded border-gray w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-gray">
                                <input type="checkbox" class="text-turquoise"></input>
                                <svg class="fill-current hidden w-4 h-4 text-turquoise pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                            </div>
                            <div class="select-none text-sm">Save our WhatsApp number to your phone</div>
                        </label>
                    </div>
                    </div>
                </main>
                </div>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1414490929659-9a12b7e31907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80" alt="woman with surfboard at sunset"></img>
            </div>
            </div>
            <CheckListProgress />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps)(ClientHome)

