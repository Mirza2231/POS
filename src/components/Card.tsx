import React from 'react'
import Zburger from '../Assests/Images/burger.jpg'
import Bburger from '../Assests/Images/beef_burger.jpg'
import Cburger from '../Assests/Images/Chicken_Burger.jpg'
import hotdog from '../Assests/Images/hot_dog.jpeg'
import Broast from '../Assests/Images/broast.jpg'
import beefkabab from '../Assests/Images/seekh_kabab.jpg'
import Ckabab from '../Assests/Images/chicken_kabbab.jpg'
import shawarma from '../Assests/Images/Shawarma.jpg'
import drink from '../Assests/Images/cold_drink.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


interface CardProps {
    toggleView: boolean;
}

const Card: React.FC<CardProps> = ({ toggleView }) => {

    const CardList = [
        {
            key: 1,
            name: "Zinger Burger",
            price: 350,
            image: Zburger
        },
        {
            key: 2,
            name: "Beef Burger",
            price: 350,
            image: Bburger
        },
        {
            key: 3,
            name: "Chicken Burger",
            price: 350,
            image: Cburger
        },
        {
            key: 4,
            name: "Chicken Broast",
            price: 350,
            image: Broast
        },
        {
            key: 5,
            name: "Hot Dog",
            price: 350,
            image: hotdog
        },
        {
            key: 6,
            name: "Beef Kabab",
            price: 350,
            image: beefkabab
        },
        {
            key: 7,
            name: "Chicken Kabab",
            price: 350,
            image: Ckabab
        },
        {
            key: 8,
            name: "Shawarma",
            price: 350,
            image: shawarma
        },
        {
            key: 9,
            name: "Coke Can",
            price: 350,
            image: drink
        },

    ]

    return (
        <>
            {
                toggleView ?
                    // Card Tiles View Sec Start
                    <div className='card_sec_tile'>
                        {
                            CardList && CardList.map((CardL) => {
                                return (
                                    <div className="card_tile" key={CardL.key}>
                                        <img src={CardL.image} alt="Avatar" />
                                        <div className="container_tile">
                                            <div>

                                                <h4><b>{CardL.name}</b></h4>
                                                <p>Rs {CardL.price}</p>
                                            </div>
                                            <a href="">
                                                <FontAwesomeIcon icon={faCartShopping} />
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    // Card Tiles View Sec End

                    :

                    // Card List View Sec Start

                    <div className='card_sec_list'>
                        {
                            CardList && CardList.map((CardL) => {
                                return (
                                    <div className="card_list" key={CardL.key}>
                                        <div className='card_list_inner'>
                                            <div className='image_View'>
                                                <img src={CardL.image} alt="Avatar" />

                                                <h4><b>{CardL.name}</b></h4>
                                            </div>
                                            <div className="container_list">
                                                <div>
                                                    <p>Rs {CardL.price}</p>
                                                </div>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                // Card List View Sec End

            }
        </>
    )
}

export default Card