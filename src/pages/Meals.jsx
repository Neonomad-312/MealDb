import axios from '../axios'
import React, { useState, useEffect } from 'react'
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState(null)
    const getMeals = async () => {
        try {
            const { data } = await axios.get("search.php?f=b");
            console.log(data.meals);
            setMeals(data.meals);
        } catch (error) { }
    };
    useEffect(() => {
        getMeals();
    }, []);
    if (meals == null) {
        return <h2>loading</h2>
    }

    return (
        <div>
            <h3>Latest Meals</h3>
            <div className='meals'>
                {meals.map((el) => (
                    <div>
                        <a href="">
                            <img src={el.strMealThumb} alt="" />
                            <p>{el.strMeal}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Meals