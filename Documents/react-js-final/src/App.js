/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const APP_TITLE = 'Film App'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import FilmCard from './components/FilmCard'
import { getfilms, addfilm, supprimerfilms, addfilmwithid } from './utils/Webstorage'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            film: undefined,
            filmname: '',
            id: undefined,
            idname: ''
        }
    }


    handleChange = ( event ) => {
        this.setState( {
            filmname: event.target.value
        } )
    }
    handleChange2 = ( event ) => {
        this.setState( {
            idname: event.target.value
        } )
    }



    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>

                <div className="App-content">
                    <div className="center-align">

                        {/* button onClick event calls the fetchWeather method */ }
                        <input id="film" placeholder='Input film' type="text" value={ this.state.filmname } onChange={ this.handleChange } margin='center' />
                        <button onClick={ this.fetchFilm } className="waves-effect waves-light btn">
                            Film
                        </button>
                        <input id="id" placeholder='Input id    Exemple tt1285016' type="text" value={ this.state.idname } onChange={ this.handleChange2 } margin='center' />
                        <button onClick={ this.fetchID } className="waves-effect waves-light btn">
                            ID
                        </button>
                        <br />
                        <br />
                        <button onClick={ this.Supprimerhistorique } className="waves-effect waves-light btn">
                            Supprimer historique
                        </button>

                    </div>
                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.displayFilmInfo() }
                            { this.displayIDInfo() }
                        </div>
                    </div>
                    <h4>Historiques</h4>
                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.AfficheTab() }
                        </div>
                    </div>
                </div>
            </div >


        )
    }

    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchFilm = async () => {

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const film = await get( ENDPOINTS.FILM_API_URL + 't=' + this.state.filmname.replace( ' ', '+' ) + '+&plot=full', {
            } )
            /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */
            addfilm( film )
            this.setState( {
                film
            } )
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }

    }
    fetchID = async () => {

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const id = await get( ENDPOINTS.FILM_API_URL + 'i=' + this.state.idname, {
            } )

            /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */
            addfilmwithid( id )
            this.setState( {
                id
            } )
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }

    }

    AfficheTab() {
        if ( getfilms() ) {
            return getfilms().map( film => {

                return <FilmCard data={ film } />
            } )
        }
        return null
    }

    Supprimerhistorique() {
        if ( getfilms() ) {
            return getfilms().filter( supprimerfilms() )
        }
        return null
    }



    //handle display of the received weather object
    displayFilmInfo = () => {
        const film = this.state.film

        if ( film ) {
            return (
                <FilmCard data={ film } />
            )
        }
        return null
    }
    displayIDInfo = () => {
        const id = this.state.id

        if ( id ) {
            return (
                <FilmCard data={ id } />
            )
        }
        return null
    }




}

export default App
