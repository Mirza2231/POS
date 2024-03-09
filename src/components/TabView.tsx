import React, { useState } from 'react'
import RightMenu from './RightMenu'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, faList } from '@fortawesome/free-solid-svg-icons'
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";




const TabView: React.FC = (props) => {

    const [toggleView, setToggleView] = useState(true);
    // define state with initial value to let the tabs start with that value
    const [activeTab, setActiveTab] = React.useState(0);

    // define a onClick function to bind the value on tab click
    const onTabClick = (e: any, index: any) => {
        console.log(e);
        setActiveTab(index)
        console.log(index)
    };

    const tabList = [
        {
            key: 1,
            name: "Burger"
        },
        {
            key: 2,
            name: "Roll"
        },
        {
            key: 3,
            name: "Chineese"
        },
        {
            key: 4,
            name: "Shawarma"
        },
        {
            key: 5,
            name: "Cold Drinks"
        },
        {
            key: 6,
            name: "Broast"
        },
        {
            key: 7,
            name: "Kabab"
        },
        {
            key: 8,
            name: "Boti"
        }
    ]

    return (
        <>
            <div className='cen_sec'>
                {/* Heading Section Start */}
                <div className='top_navContent'>
                    <div className='heading'>
                        <h2>Hello World</h2>
                        <input className='Search_bar' placeholder='Search Products...' />

                    </div>
                </div>

                {/* Heading Section End */}

                {/* Tab Section Start  */}


                <div className='Tab_menu'>
                    <div className='tab_filter'>
                        <Tabs activeTab={activeTab} onTabClick={onTabClick} tabsUpperContainerClassName="tabs" navBtnStyle={{}} >
                            {/* generating an array to loop through it  */}
                            {
                                tabList && tabList.map((tabL) => {
                                    return (
                                        <Tab key={tabL.key}>{tabL.name}</Tab>
                                    )
                                })

                            }
                        </Tabs>
                        <div className="trigger-button" onClick={() => { setToggleView(!toggleView) }}>
                            {toggleView ?
                                <FontAwesomeIcon icon={faList} />
                                :
                                <FontAwesomeIcon icon={faTableCells} />

                            }
                        </div>
                    </div>

                    {/* <div className='tabs'>
                    <div className='tab'>
                        <h3>Starter</h3>
                    </div>

                    <div className='tab'>
                        <h3>Break Fast</h3>
                    </div>
                    <div className='tab'>
                        <h3>Lunch</h3>
                    </div>
                    <div className='tab'>
                        <h3>Supper</h3>
                    </div>
                    <div className='tab'>
                        <h3>Desserts</h3>
                    </div>
                    <div className='tab'>
                        <h3>Fast Food</h3>
                    </div>
                    <div className='tab'>
                        <h3>soups</h3>
                    </div>
                    <div className='tab'>
                        <h3>ice ceam</h3>
                    </div>
                    <div className='tab'>
                        <h3>manchurian</h3>
                    </div>
                    <div className="trigger-button" onClick={() => { setToggleView(!toggleView) }}>
            {toggleView ? 
            <FontAwesomeIcon icon={faList} />

             :
            <FontAwesomeIcon icon={faTableCells} />

              }
            </div>

                </div> */}

                </div>




                {/* Tab Section End  */}
                <Card toggleView={toggleView} />
            </div>

        </>
    )
}

export default TabView;