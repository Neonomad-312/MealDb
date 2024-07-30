import React, { Component } from 'react'
import './AppHeader.css'

export default class AppHeader extends Component {
    render() {
        return (
            <div className='header-wrap'>
                <div className='header'>
                    <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
                    <div className='nav'>
                        <button className='btn-1'>Home</button>
                        <button className='btn-2'>API</button>
                        <input type="text" placeholder='search' />
                    </div>
                </div>
            </div>
        )
    }
}
