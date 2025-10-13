import country from './assets/world.png'
import service from './assets/question.png'
import './Navbar.css'
import bed from './assets/bed.png'
import flight from './assets/direct-flight.png'
import taxi from './assets/sign.png'
import giant from './assets/sky.png'
import travel from './assets/travel-and-tourism.png'
import car from './assets/car.png'
function Navbar() {
    return (<>
        <div className="upper_navbar">
                        <a href="#" id='logo'>Booking.com</a>
                        <a href="#" id='curency'>INR</a>
                        <img src={country} alt='india' id='coun' href="*" />
                        <img src={service} alt='services' id='service' href="*" />
                        <a href="#" id='property'>List Your Property</a>
                        <button id='register'>Register</button>
                        <button id='sign-in'>Sign in</button>
            <div className='lower_navbar'>
                            <span >
                                <button>
                                    <img src={bed} id='bed'></img>Stays
                                </button>
                                <button>
                                    <img src={flight} id='flight'></img>Flights
                                </button>
                                <button>
                                    <img src={travel} id='travel'></img>Flights + Hotels
                                </button>
                                <button>
                                    <img src={car} id='car'></img>Car Rentals
                                </button>
                                <button>
                                    <img src={giant} id='giant'></img>Attractions
                                </button>
                                <button>
                                    <img src={taxi} id='taxi'></img>Airport Taxi
                                </button>
                            </span>
            </div>
            <div className='text'>
                <h1 id='text_F'>Find your next stay</h1>
                <h3 id='text_S'>Search deals on hotels, homes, and much more...</h3>
            </div>
        </div>
    </>
    );
}

export default Navbar