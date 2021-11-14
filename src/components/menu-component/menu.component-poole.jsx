import React from 'react'
import './menu.styles.scss'

import MENU_DATA from './menu-data.component';

function MenuPoole() {

    const {price} = MENU_DATA;
    //IMPLEMENT EXTERNAL STATE FOR PRICES


    return(
        <div className="menu">
            <div className="menu-lunch">
                {/* <div className="menu-lunch-header">
                    <div className="menu-lunch-header-img-left"></div>
                    <div className="menu-lunch-header-text">
                        <h1>TABLE SYSTEM</h1>
                    </div>                    
                    <div className="menu-lunch-header-img-right"></div>
                </div>
                <div className="menu-lunch-body">
                    <p className="menu-lunch-body-text">
                        At SAMBÔ RODIZIO your experience begins with a visit to our gourmet salad bar that features, fresh cut vegetables, gourmet salads, snacks, continental choices of cheese and hot dishes. <br /><br />
                        Once you are ready for the meats, just turn your card green side up and the chefs will bring out the sizzling skewers of meat stright from the grill one by one, turn the red side up to indicate you need a break. <br />
                        Use the card to control the service to your on pace, and enjoy the unique RODIZIO CONCEPT
                    </p>
                </div> */}
                <div className="menu-lunch-prices">
                    <div className="menu-lunch-prices-header">
                        <h1>LUNCH MENU</h1>
                    </div>
                    <div className="menu-lunch-prices-body">
                        <b className='price-text'>SELECTION OF 8 MEATS</b> <br /> WEEKDAY: <b className='price-text'>24,95</b> <br /> 
                        WEEKEND & BANK HOLIDAYS: <b className='price-text'>28,95</b> <br />
                        CHILDREN UP TO 6 YEARS <b className='price-text'>FREE</b><br /> 6 TO 12 YEARS: <b className='price-text'>HALF PRICE</b>
                    </div>
                </div>
                <div className="menu-lunch-meats">
                    <div className="menu-lunch-meats-left">
                            <div className="meat picanha">
                                <h1 className="meat-brasil">PICANHA</h1>
                                <h1 className="meat-uk">CAP OF RUMP</h1>
                                <p className="meat-description">
                                    Brazilian special cut, unique topside cut <br /> 
                                    The king of steaks in Brazil
                                </p>
                            </div>
                            <div className="meat maminha">
                                <h1 className="meat-brasil">MAMINHA</h1>
                                <h1 className="meat-uk">BOTTOM SIRLOIN</h1>
                                <p className="meat-description">Marbled cut with strong flavour</p>
                            </div>
                            <div className="meat garlic">
                                <h1 className="meat-brasil">BIFE COM ALHO</h1>
                                <h1 className="meat-uk">GARLIC STEAK</h1>
                                <p className="meat-description">A delicious combination</p>
                            </div>
                            <div className="meat chicken">
                                <h1 className="meat-brasil">SOBRECOXA DE FRANGO</h1>
                                <h1 className="meat-uk">CHICKEN THIGHS</h1>
                                <p className="meat-description">Skinless and boneless, marinated and cooked in open flames</p>
                            </div>
                    </div>
                    <div className="menu-lunch-meats-right">
                        <div className="meat sausage">
                            <h1 className="meat-brasil">LINGUIÇA</h1>
                            <h1 className="meat-uk">SAUSAGE</h1>
                            <p className="meat-description">Brazilian pork sausages marinated in our traditional spices, a powerful flavor</p>
                        </div>
                        <div className="meat pork">
                            <h1 className="meat-brasil">PORCO AO MEL</h1>
                            <h1 className="meat-uk">HONEY PORK</h1>
                            <p className="meat-description">Succulent pork belly meat in our house made honey sauce</p>
                        </div>
                        <div className="meat gammon">
                            <h1 className="meat-brasil">PRESUNTO</h1>
                            <h1 className="meat-uk">GAMMON</h1>
                            <p className="meat-description">Unsmoked, juicy cured gammon grillen on open flames</p>
                        </div>
                        <div className="meat lamb">
                            <h1 className="meat-brasil">CORDEIRO</h1>
                            <h1 className="meat-uk">LAMB</h1>
                            <p className="meat-description">Lamb chumps, seasoned and grilled with our house made mint sauce</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-dinner">
                <div className="menu-dinner-header">
                    <div className="menu-dinner-header-top"><h1>DINNER MENU</h1></div>
                    <div className="menu-dinner-header-text"><b className='price-text'>A SELECTION OF 14 MEATS, INCLUDING LUNCH MENU PLUS 6 CUTS</b> <br />
                        MONDAY TO SUNDAY: <b className='price-text'>34,95</b></div>
                    </div>
                <div className="menu-dinner-meats">
                    <div className="menu-dinner-meats-left">
                        <div className="meat file">
                            <h1 className="meat-brasil">FILÈ MIGNON</h1>
                            <h1 className="meat-uk">BEEF TENDERLOIN</h1>
                            <p className="meat-description">
                                A first class cut, fillet steak tender and full of flavour
                            </p>
                        </div>
                        <div className="meat alcatra">
                            <h1 className="meat-brasil">ALCATRA</h1>
                            <h1 className="meat-uk">RUMP</h1>
                            <p className="meat-description">
                                Rum steak cut, tender with a deep, mineral savouriness
                            </p>
                        </div>
                        <div className="meat skirt">
                            <h1 className="meat-brasil">FRALDINHA</h1>
                            <h1 className="meat-uk">BEEF SKIRT</h1>
                            <p className="meat-description">
                                Juicy and flavoursome cut from the plate
                            </p>
                        </div>
                        <div className="meat chilli">
                            <h1 className="meat-brasil">CARNE AO CHILLI</h1>
                            <h1 className="meat-uk">CHILLI BEEF</h1>
                            <p className="meat-description">
                                Tender and full of flavour, marinated and basted with our handmade chilli sauce
                            </p>
                        </div>
                    </div>
                    <div className="menu-dinner-meats-right">
                        <div className="meat chickenbacon">
                            <h1 className="meat-brasil">FRANGO COM BACON</h1>
                            <h1 className="meat-uk">CHICKEN AND BACON</h1>
                            <p className="meat-description">
                                Marinated chicken breast wrapped in bacon
                            </p>
                        </div>
                        <div className="meat-butcher">
                            <h1 className="meat-uk">SPECIAL BUTCHER'S CHOICE</h1>
                            <p className="meat-description">
                                A SPECIAL CUT SELECTED BY OUR GRILL'S HEAD CHEF. <br /> <br />
                                ASK YOUR SERVER OR FIND OUT OUR SPECIAL OF THE WEEK ON OUR WEBPAGE OR SOCIAL MEDIA
                            </p>
                        </div>
                        <div className="meat cooked">
                            <h1 className="meat-uk">HOW WOULD YOU LIKE YOUR MEAT COOKED ?</h1>
                            <p className="meat-description">
                                Let us know how you prefer your meat cooked. We are happy to serve all our cuts to your specific taste
                            </p>
                        </div>
                    </div>
                </div>
                <div className="menu-vegs">
                    <div className="menu-vegs-header">
                        <h1>VEGETARIAN AND FISH OPTION</h1>
                        <div className="menu-vegs-header-text">
                        <b className='price-text'>LUNCH</b><br />
                        WEEKDAY: <b className='price-text'>24,95</b> <br />
                        WEEKEND & BANK HOLIDAYS: <b className='price-text'>28,95</b><br /> <br />
                        <b className='price-text'>DINNER</b><br />
                        MONDAY TO SUNDAY: <b className='price-text'>29,95</b></div> <br />
                    </div>
                    <div className="menu-vegs-food">
                        <div className="menu-vegs-food-left">
                            <div className="meat risotto">
                                <h1 className="meat-brasil">RISOTTO</h1>
                                <h1 className="meat-uk">BUTTERNUT SQUASH</h1>
                                <p className="meat-description">
                                    With black pepper, sauted asparagus on olive oil and topped with Vegetarian Parmesan Cheese
                                </p>
                            </div>
                            <div className="meat pasta">
                                <h1 className="meat-brasil">PASTA</h1>
                                <h1 className="meat-uk">RIGATONI</h1>
                                <p className="meat-description">
                                    Ratatouille vegetable mix, topped with Vegetarian Parmesan Cheese <br />
                                    * Double Cream sauce available <br />
                                    ** Gluten free pasta available
                                </p>
                            </div>
                        </div>
                        <div className="menu-vegs-food-right">
                            <div className="meat fish">
                                <h1 className="meat-brasil">PEIXE / FISH</h1>
                                <h1 className="meat-uk">SALMON OR SEABASS</h1>
                                <p className="meat-description">
                                    Served in a mix vegetable bed, caramelized lime, sauted asparagus and parsley
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuPoole;