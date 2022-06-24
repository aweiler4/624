import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Movies = () => {
    const [formData, setFormData] = useState({
        baseURL: "http://www.omdbapi.com/?",
        apikey: 'apikey='+'910e0323',
        query: '&t=',
        movieTitle: '',
        searchURL: ''
    })

    const handleOnchange = (e) => {
        setFormData({...formData, movieTitle: e.target.value})
        console.log(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let title = formData.baseURL + formData.apikey + formData.query + formData.movieTitle
        setFormData({...formData, searchURL: title})
        console.log(formData.searchURL)
    }

    return(
        <form>
            <label htmlFor='search'>Search Title </label>
            <input onChange={(e) => {
                handleOnchange(e)
            }} value={formData.movieTitle} id='search' type='text' name='search' placeholder='Search for Movies'></input>{' '}
            <input onClick={(e) => {
                handleFormSubmit(e)
            }} type='submit'></input>
        </form>
    )
    
};


export default Movies;