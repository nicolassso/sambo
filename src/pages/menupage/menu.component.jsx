import React from 'react'
import './menu.styles.scss'

function Menu() {
    return(
        <div className="menu">
            <div className="menu-lunch">
                <div className="menu-lunch-header">
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
                </div>
                <div className="menu-lunch-prices">
                    <div className="menu-lunch-prices-header">
                        <h1>LUNCH MENU</h1>
                    </div>
                    <div className="menu-lunch-prices-body">
                        SELECTION OF 8 MEATS THURSDAY TO SUNDAY: 18.95 <br />
                        CHILDREN UP TO 4 YEARS FREE - 5 TO 8: 6.95 - 9 TO 13: 12.50
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
                <div className="menu-dinner-header">DINNER MENU</div>
                <div className="menu-dinner-meats">
                    FILE MIGNON 
                    ALCATRA 
                    FRANGO COM BACON 
                    FRALDINHA 
                    CARNE AO CHILLI 
                </div>
                <div className="menu-vegs">VEGETARIAN AND FISH OPTION 
                RISOTTO 
                PEIXE 
                PASTA </div>
            </div>
        </div>
    )
}

export default Menu;