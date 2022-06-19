import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate(-1)
      }

    return(
            <article>
                <h3>About us</h3>
                <section>
                    {/* <a href="https://restaurants-backend-database.herokuapp.com" rel="link to linkedin" target="_blank"><h4>Joanna Lodell</h4></a>
                    <a href="https://restaurants-backend-database.herokuapp.com" rel="link to linkedin" target="_blank"><h4>Emma Lindell</h4></a>
                    <a href="https://restaurants-backend-database.herokuapp.com" rel="link to linkedin" target="_blank"><h4>Ida Näslund</h4></a> */}
                </section>
                <button
                type="button" onClick={onBackButtonClick}
                >Go back</button>
            </article>
    )
}

export default About