import React, { useState } from 'react'
import { connect } from 'react-redux'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ClientNav from './ClientNav';

export const FlightInfo = (props) => {
    const [phone, setPhone] = useState("");

    const handleOnChange = (e) => {
        setPhone(e.target.value);
    }

    const airlines = [
        "Air Canada (AC)",
        "Air Transat (TS)",
        "Alaska (AS)",
        "American Airlines (AA)",
        "Avianca (AV)",
        "Copa Airlines (CM)",
        "Delta (DL)",
        "ECAir (LC)",
        "JetBlue (B6)",
        "KLM (KL)",
        "Sansa (RZ)",
        "Sun Country Airlines (SY)",
        "United Airlines (UA)",
        "Volaris Costa Rica (Q6)",
        "WestJet (WS)",
        "Other"
    ]

    const airlineList = airlines.map((airline) => {
        return <option>{airline}</option>;
    })

    return (
        <div>
            <ClientNav />
            {/* Header */}
            <div class="bg-gray-light">
                <h2 class="text-2xl font-bold leading-7 text-gray-darkest sm:text-3xl sm:truncate px-8 py-8">
                    Share Your Flight With Us
                </h2>
            </div>
            <div class=" p-8 bg-gray-lightest">
            {/* Top Border */}
            <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-light"></div>
                </div>
            </div>

            {/* Personal Information Section */}
            <div class="mt-10 sm:mt-0">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                        <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-gray-darkest">Personal information</h3>
                        </div>
                    </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="first_name" class="block text-sm font-medium text-gray-dark">First name</label>
                                <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-turquoise focus:border-turquoise block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="last_name" class="block text-sm font-medium text-gray-dark">Last name</label>
                                <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-turquoise focus:border-turquoise block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                            </div>

                            <div class="col-span-6 sm:col-span-4">
                                <label class="block text-sm font-medium text-gray-dark">Mobile phone</label>
                                <PhoneInput
                                    type="tel"
                                    name="phone"
                                    // Need to figure out why this class styling isn't working
                                    // class="mt-1 focus:ring-turquoise focus:border-turquoise block w-full shadow-sm sm:text-sm border-gray rounded-md"
                                    country={'us'}
                                    value={phone}
                                    placeholder=""
                                    handleOnChange={handleOnChange}
                                />
                            </div>

                            <div class="col-span-6 sm:col-span-4">
                                <label for="email_address" class="block text-sm font-medium text-gray-dark">Email address</label>
                                <input type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-turquoise focus:border-turquoise block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                            </div>

                        </div>
                    </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-turquoise-dark hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-turquoise">
                                Save
                            </button>
                    </div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>

            {/* Arrival Flight Section */}
            <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
                <div class="border-t border-gray-light"></div>
            </div>
            </div>

            <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-gray-darkest">Arrival flight</h3>
                </div>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                    <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">

                        <div class="col-span-6 sm:col-span-3">
                            <label class="block text-sm font-medium text-gray-dark">Airport</label>
                            <select name="airport" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-turquoise focus:border-turquoise sm:text-sm">
                            <option>Liberia (LIR)</option>
                            <option>San Jose (SJO)</option>
                            <option>Other</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="country" class="block text-sm font-medium text-gray-dark">Airline</label>
                            <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-turquoise focus:border-turquoise sm:text-sm">
                                {airlineList}
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label class="block text-sm font-medium text-gray-dark">Flight number</label>
                            <input type="text" name="flight" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-turquoise focus:border-turquoise block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last_name" class="block text-sm font-medium text-gray-dark">Date</label>
                            <input type="date" name="date" class="mt-1 focus:ring-turquoise focus:border-turquoise block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                            <label class="block text-sm font-medium text-gray-dark">Time</label>
                            <input type="time" name="time" class="mt-1 focus:ring-turquoise focus:border-turquoise block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                        </div>

                    </div>
                    </div>

                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-turquoise-dark hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-turquoise">
                        Save
                        </button>
                    </div>

                    </div>
                </form>
                </div>
            </div>
            </div>

            {/* Departure Flight Section */}
            <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
                <div class="border-t border-gray-light"></div>
            </div>
            </div>

            <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-gray-darkest">Departure flight</h3>
                </div>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                    <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">

                        <div class="col-span-6 sm:col-span-3">
                            <label class="block text-sm font-medium text-gray-dark">Airport</label>
                            <select name="airport" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-turquoise focus:border-turquoise sm:text-sm">
                            <option>Liberia (LIR)</option>
                            <option>San Jose (SJO)</option>
                            <option>Other</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="country" class="block text-sm font-medium text-gray-dark">Airline</label>
                            <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-turquoise focus:border-turquoise sm:text-sm">
                            <option>Delta</option>
                            <option>American</option>
                            <option>United</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label class="block text-sm font-medium text-gray-dark">Flight number</label>
                            <input type="text" name="flight" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-turquoise focus:border-turquoise block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last_name" class="block text-sm font-medium text-gray-dark">Date</label>
                            <input type="date" name="date" class="mt-1 focus:ring-turquoise focus:border-turquoise block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                            <label class="block text-sm font-medium text-gray-dark">Time</label>
                            <input type="time" name="time" class="mt-1 focus:ring-turquoise focus:border-turquoise block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                        </div>

                    </div>
                    </div>

                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-turquoise-dark hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-turquoise">
                            Save
                        </button>
                    </div>

                    </div>
                </form>
                </div>
            </div>
            </div>
            {/* Bottom Border */}
            <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-light"></div>
                </div>
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(FlightInfo)
