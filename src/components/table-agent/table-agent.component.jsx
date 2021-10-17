import React from 'react'
import './table-agent.styles.scss'

const TableAgent = () => (
    <div className="table-agent">
        <div className="booking-policy">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste odit repellendus nisi id quaerat iure hic voluptatibus tempora deserunt assumenda alias, cum, qui vitae. Distinctio dignissimos temporibus magnam a?
                Rerum suscipit, magni pariatur cumque molestias dolorum nemo saepe iste! Obcaecati praesentium totam, quasi dolorem fuga iusto itaque accusantium repudiandae ipsam modi accusamus adipisci ea eaque, voluptates tenetur sapiente in?
            </p>
        </div>
        <iframe
            className='table-agent-widget'
            src="https://tableagent.com/iframe/sambo-rodizio-bar-grill/v/medium/"
            style={{border:'0px none',
                    minWidth:'300px',
                    maxWidth:'350px',
                    minHeight:'400px'}}
            width="100%"
            height="100%">
        </iframe>

    </div>
)

export default TableAgent;