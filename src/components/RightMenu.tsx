import React from 'react'
import burger from '../Assests/Images/burger.jpg'
import beefkabab from '../Assests/Images/seekh_kabab.jpg'
import Ckabab from '../Assests/Images/chicken_kabbab.jpg'
import shawarma from '../Assests/Images/Shawarma.jpg'
import drink from '../Assests/Images/cold_drink.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const RightMenu: React.FC = () => {

    const OrderList = [
        {
            key: 1,
            name: "Zinger Burger",
            price: 350,
            image:burger
        },
        {
            key: 2,
            name: "Beef Burger",
            price: 350,
            image: beefkabab


        },
        {
            key: 3,
            name: "Beef Kabab",
            price: 350,
            image: drink
        },
        // {
        //     key: 4,
        //     name: "Zinger"
        // },
        // {
        //     key: 5,
        //     name: "Zinger"
        // },
        // {
        //     key: 6,
        //     name: "Zinger"
        // },
        // {
        //     key: 7,
        //     name: "Zinger"
        // },
        // {
        //     key: 8,
        //     name: "Zinger"
        // }
    ]

    return (
        <>
            <div className='Right_menu'>

                {/* Right Menu Heading Sec Start  */}
                <div className='add_item'>
                    <div className='right_tbtn'>
                        <h1>Current Orders</h1>
                        <a href="">Clear All</a>
                    </div>
                </div>
                {/* Right Menu Heading Sec End  */}



                {/* Current Order Section Start */}

                <div className='order_sec'>


                    {OrderList && OrderList.map((OrderL) => {
                        return (
                            <div className='orders' key={OrderL.key}>
                                <div className="items" >
                                    <div className="item_name">
                                        <img src={OrderL.image} alt="" />
                                        <h4>{OrderL.name}</h4>
                                    </div>
                                    <div className="price">
                                        <h4>Rs {OrderL.price}</h4>
                                        <div className="quantity">
                                            <div>
                                                <FontAwesomeIcon icon={faMinus} className='quantity_icon' />

                                            </div>
                                            <input value={0} readOnly />
                                            <div><FontAwesomeIcon icon={faPlus} className='quantity_icon' /></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                {/* Current Order Section End */}

                {/* Pricing Box Sec Start  */}

                <div className='pricing_tile'>
                    <div className="total_price">
                        <div className="priceBox">
                            <div className='price_lines'>
                                <h3>Subtotal</h3>
                                <h3>Rs 20000</h3>
                            </div>
                            <div className='price_lines'>
                                <h5>Discount</h5>
                                <h5>Rs 20000</h5>
                            </div>
                            <div className='price_lines'>
                                <h5>Tax</h5>
                                <h5>Rs 20000</h5>
                            </div>
                        </div>

                    </div>

                    <div className="grand_total">
                        <div className="priceBox">
                            <div className='price_lines'>
                                <h3>Grand Total</h3>
                                <h3>Rs 20000</h3>
                            </div>

                        </div>

                    </div>

                    <div className="grand_total_btn">
                        <div className="BtnBox">
                            <a href="" className='order_btn'>
                                Place Order
                            </a>
                            <a href="" className='print_btn'>
                                Print Bill
                            </a>
                        </div>

                    </div>

                </div>

                {/* Pricing Box Sec End  */}

            </div>


        </>
    )
}

export default RightMenu