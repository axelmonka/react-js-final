

export function getfilms() {
    return JSON.parse( localStorage.getItem( "TabFilms" ) )
}

export function addfilm( film ) {
    var tab = getfilms() || []
    tab.push( film )
    tab.push()
    localStorage.setItem( "TabFilms", JSON.stringify( tab ) )
}

export function addfilmwithid( id ) {
    var tab = getfilms() || []
    tab.push( id )
    localStorage.setItem( "TabFilms", JSON.stringify( tab ) )
}

export function supprimerfilms() {
    localStorage.clear()
}