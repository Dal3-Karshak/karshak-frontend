import React, { Component } from 'react'
import './style/Meals.css'
import meal1 from './assest/meals/1.jpeg'
import meal2 from './assest/meals/2.jpeg'
import meal3 from './assest/meals/3.jpeg'
import meal4 from './assest/meals/4.jpeg'
import meal5 from './assest/meals/5.jpeg'
import meal6 from './assest/meals/6.jpeg'
import meal7 from './assest/meals/7.jpeg'
import meal8 from './assest/meals/8.jpeg'

export class Meals extends Component {
    render() {
        return (
            <div>
                <section className="section-meals">
                <ul className="meal-showcase ">
            <li>

                <figure className="meal-photo">
                    <img src={meal1} alt=""/>
                </figure>

            </li>

            <li>

                <figure className="meal-photo">
                    <img src={meal2}alt=""/>
                </figure>

            </li>

            <li>

                <figure className="meal-photo">
                    <img src={meal3} alt=""/>
                </figure>

            </li>

            <li>

                <figure className="meal-photo">
                    <img src={meal4} alt=""/>
                </figure>

            </li>


            </ul>

            <ul className="meal-showcase">
            <li>

                <figure className="meal-photo">
                    <img src={meal5} alt=""/>
                </figure>

            </li>

            <li>

                <figure className="meal-photo">
                    <img src={meal6} alt=""/>
                </figure>

            </li>

            <li>

                <figure className="meal-photo">
                    <img src={meal7} alt=""/>
                </figure>

            </li>

            <li>

                <figure className="meal-photo">
                    <img src={meal8} alt=""/>
                </figure>

            </li>


            </ul>
            </section>
            </div>
        )
    }
}

export default Meals
