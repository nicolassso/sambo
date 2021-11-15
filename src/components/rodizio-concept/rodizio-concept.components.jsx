import React from 'react'
import './rodizio-concept.styles.scss'

import rodizioImage from '../../assets/images/LOGO_DARK_COMP.png'

const RodizioConcept = () => (
        <div className="rodizio-concept">
            <div className="rodizio-concept-image">
                <img src={rodizioImage} alt="" />
            </div>
            <div className="rodizio-concept-text">
            <h3>RODIZIO CONCEPT</h3>
            <p>Rodizio is the authentic and Brazilian style of serving, where the servers bring the meats to your table straight from the grill one by one and carve it off the skewers on to your plate. You can take as much as you would like, big or small, thin or thick, you decide. Every meat is cooked to your preference, from rare all the way to well done.</p>
            </div>
            
        </div>
)

export default RodizioConcept;