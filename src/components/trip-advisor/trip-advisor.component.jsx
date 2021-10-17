import React from 'react'
import './trip-advisor.styles.scss'



const TripAdvisor = () => (


    <div className="trip-advisor">
        <iframe id='myIframe' src='https://www.tripadvisor.com/Restaurant_Review-g190817-d19398481-Reviews-SAMBO_RODIZIO-Weymouth_Dorset_England.html#REVIEWS'
        style={{
            width: '400px',
            height: '600px'
        }}></iframe>
    </div>
)

export default TripAdvisor;