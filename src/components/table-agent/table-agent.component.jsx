import React from 'react'
import './table-agent.styles.scss'

const TableAgent = () => (
    <div className="table-agent">
        <div className="booking-policy">
            <p>
                Make sure to understand our <a href="#">Reservation policy.</a> 
            </p>
        </div>
        <div className="table-agent-wrapper">
            <iframe
                className='table-agent-widget'
                src="https://tableagent.com/iframe/sambo-rodizio-bar-grill/v/medium/"
                style={{border:'0px none',
                        minWidth:'300px',
                        maxWidth:'350px',
                        minHeight:'400px'
                        }}
                width="100%"
                height="100%">
            </iframe>
        </div>

    </div>
)

export default TableAgent;