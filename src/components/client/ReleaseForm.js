import React from 'react'
import { connect } from 'react-redux'
import ClientNav from './ClientNav';

export const ReleaseForm = (props) => {
    return (
        <div>
            <ClientNav />
            {/* Header */}
            <div class="bg-turquoise-dark text-white">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        <span class="block">Liability Release Waiver Form</span>
                    </h2>
                    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div class="inline-flex rounded-md shadow">
                            <a href="mailto:contact@surfbreakcostarica.com?subject=Please email me the e-sign release form" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-turquoise-light hover:bg-turquoise">
                            Request E-Sign
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white text-gray-darkest">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <div>
                        <p class="pb-8 font-bold text-2x1">By signing this form, you waive important rights and release Surf Break Costa Rica from all liability for your injury or death, so please read it carefully before signing.</p>
                        <ol>
                            <li class="pb-4">I acknowledge that surfing is an inherently dangerous activity involving a significant risk of injury, including the potential for permanent paralysis and death.</li>
                            <li class="pb-4">I accept and assume all risks, both known and unknown, EVEN IF ARISING FROM THE NEGLIGENCE OF SURF BREAK COSTA RICA or its instructors, employees or contractors, or others, and assume full responsibility for my participation.</li>
                            <li class="pb-4">In consideration of being allowed to participate in Surf Break Costa Rica’s program, I, for myself and on behalf of my heirs, assigns, personal representatives, and next of kin, hereby freely and knowingly release, discharge, and hold harmless Surf Break Costa Rica and its instructors, officers, employees, contractors, and agents from all liability for any injury that I may suffer as a result of my participation in Surf Break Costa Rica programs INCLUDING, WITHOUT LIMITATION, LIABILITY FOR NEGLIGENCE and waive all my rights to take any legal action against Surf Break Costa Rica, and its instructors, employees, and contractors from and against any and all claims of liability, INCLUDING WITHOUT LIMITATION CLAIMS ARISING OUT OF THEIR NEGLIGENCE, for any act or omission which causes me damages, illness, injury, disease, or death, in any way connected with my participation in this activity, including rendering or failing to render any type of rescue, emergency or medical services.</li>
                            <li class="pb-4">In consideration of being allowed to participate in Surf Break Costa Rica’s program, I agree that I shall not make a claim or bring any action against, sue, or hold responsible, Surf Break Costa Rica, its instructors, owners, officers, agents, or employees, for any liability described in paragraph 3 above.</li>
                            <li class="pb-4">I agree that if I observe any hazards during my participation in Surf Break Costa Rica programs it is my responsibility to bring such hazards to the attention of the nearest Surf Break Costa Rica instructor, employee, or contractor immediately and to remove myself from participating.</li>
                            <li>I hereby agree that Surf Break Costa Rica may use images of this surfing class or lesson for its promotional and/or commercial purposes, and I consent to the use of my name and likeness for such use in any media now known or not known without compensation to me.</li>
                        </ol>
                    </div>
                    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div class="inline-flex rounded-md shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(ReleaseForm)
