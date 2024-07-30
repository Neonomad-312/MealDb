import React, { Component } from 'react'
import './AppHero.css'

export default class AppHero extends Component {
    render() {
        return (
            <div className='hero'>
                <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
                <div className='hero-text'>
                    <h1>Welcome To TheMealDB</h1>
                    <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. <br /> We also offer a <a href="">free recipe API</a> for anyone wanting to use it, with additional features for subscribers.</p>
                    <button>PayPal</button>
                    <p>Click button above to upgrade free API to premium for $3 <br />
                        Currently (54 supporters)</p>
                </div>
                <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
            </div>
        )
    }
}
