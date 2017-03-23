import React, { Component } from 'react'

import './FilmCard.css'



class FilmCard extends Component {


    render() {

        const film = this.props.data


        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image">
                    <img alt="Poster" src={ film.Poster } />
                    <span className="card-title" style={ { fontSize: 36 } }>
                        { film.Title }
                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="film-data">
                            <h3>Informations</h3>
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ film.Released }</span>
                            </p>
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ film.Runtime } </span>
                            </p>
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ film.Genre }</span>
                            </p>
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ film.Writer }</span>
                            </p>
                        </div>
                    </div>
                    <div className="card-action center-align">
                        <a className="film-name" href="#" onClick={ e => e.preventDefault() }>{ film.Title }</a>
                    </div>
                </div>
                <div className="card horizontal" style={ { margin: 'auto' } }>

                </div>
            </div>


        )
    }

}

export default FilmCard