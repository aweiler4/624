import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Display from "./Display"


const Movies = () => {
    const [formData, setFormData] = useState({
        baseURL: "http://www.omdbapi.com/?",
        apikey: 'apikey='+'910e0323',
        query: '&t=',
        movieTitle: '',
        searchURL: ''
    })

    const [movie, setMovie] = useState([])

    const handleOnchange = (e) => {
        setFormData({...formData, movieTitle: e.target.value})
        console.log(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let title = formData.baseURL + formData.apikey + formData.query + formData.movieTitle
        setFormData({...formData, searchURL: title})
        // console.log(formData.searchURL)
    }

    useEffect (() => {
        const helperFunction = async () => {
            const response = await axios.get(formData.searchURL)
            console.log(response)
            const variableData = response.data
            setMovie(variableData)
            console.log(variableData)
        } 
        helperFunction()
    })

    return(
      <div>
          <form>
            <label id="label" htmlFor='search'>Search Title </label>
            <input onChange={(e) => {
                handleOnchange(e)
            }} value={formData.movieTitle} id='search' type='text' name='search' placeholder='Search for Movies'></input>{' '}
            <input id="btn" onClick={(e) => {
                handleFormSubmit(e)
            }} type='submit'></input>
        </form>
        {formData.searchURL ? (<Display movie={movie}/>):("")}

      </div>

    )
    
};




export default Movies;