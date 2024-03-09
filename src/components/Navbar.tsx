import React from 'react'
import Tabs from './TabView'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse , faAddressBook, faGear} from '@fortawesome/free-solid-svg-icons'


const Navbar : React.FC = () => {
    return (
        <>

            {/* Navbar Section Start */}
            <div className="wrapper">

                {/* Top Navbr Sec Start  */}
                {/* <div className='topnav'>


                    <div className='top_navContent'>
                        <h2>Hello World</h2>
                        <input className='Search_bar' placeholder='Search Products...' />
                    </div>

                    <div className='top_navBtns'>
                        <a href='#'>Select Table </a>
                        <a href='#'>Select Table</a>
                    </div>

                </div> */}
                    {/* Top Navbr Sec End  */}


                {/* Side Navbar Section Start  */}
                <div className="sidebar">
                    <a href="">
                    <FontAwesomeIcon icon={faHouse} />
                    Home

                    </a>
                    <a href="">
                    <FontAwesomeIcon icon={faGear} />
                    Settings 

                    </a>
                    <a href="">
                    <FontAwesomeIcon icon={faAddressBook} />
                    Contact

                    </a>

                </div>
                {/* Side Navbar Section End  */}

            </div>
            {/* Navbar Section End */}
        </>
    )
}

export default Navbar



