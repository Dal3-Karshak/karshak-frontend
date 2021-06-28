import React, { Component } from 'react'
import './style/TopClient.css'
import person1 from './assest/images/clients/person1.jpg'
import person2 from './assest/images/clients/person2.png'
import person3 from './assest/images/clients/person3.jpg'


export class TopClient extends Component {
    render() {
        return (
            <div className='topClient-container'>
                <div className='client-title'>
                    <h2>Most people visit our site - Top 3 clients</h2>

                </div>

                <div className='clients our-clients'>
                    <div>
                        <blockquote>
                            Dalaa-Karshak really is amazing website , I take form it alot of recipes and try it and I benefited form it at the beginning of the Corone pandemic. I think Dalaa-Karshak the most helpful food site.
                            {/* <cite><img src="resources/img/customer-1.jpg" alt="Customer 1 photo">Alberto Duncan</cite> */}
                            <img className='pepole' src={person1} alt='person1' />
                            <p>'Rossi Hattan'</p>

                        </blockquote>
                    </div>
                    <div>
                        <blockquote>
                            Dalaa-Karshak really is amazing website , I take form it alot of recipes and try it and I benefited form it at the beginning of the Corone pandemic. I think Dalaa-Karshak the most helpful food site.                
                            <img className='pepole' src={person2} alt='person2' />
                            <p>'Lombardo White'</p>
                        </blockquote>
                    </div>
                    <div>
                        <blockquote>
                            Dalaa-Karshak really is amazing website , I take form it alot of recipes and try it and I benefited form it at the beginning of the Corone pandemic. I think Dalaa-Karshak the most helpful food site .               
                            <img className='pepole' src={person3} alt='person3' />
                            <p>'Fontana	Lion'</p>

                        </blockquote>
                    </div>
                </div>

            </div>


        )
    }
}

export default TopClient
