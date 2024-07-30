import React, { Component } from 'react'
import './AppSearch.css'

export default class AppSearch extends Component {
  render() {
    return (
      <div className='search'>
        <span>
            <input type="text" placeholder='Search for a Meal...'/>
            <button><i className="bi bi-search"></i></button>
        </span>
        <span>
            <p><img src="https://www.themealdb.com/images/icons/meal-icon6.png" alt="" />Total Meals: 303</p>
            <p><img src="https://www.themealdb.com/images/icons/meal-icon4.png" alt="" />Total Ingredients: 575</p>
            <p><img src="https://www.themealdb.com/images/icons/image2.png" alt="" />Images: 303</p>
        </span>
      </div>
    )
  }
}
