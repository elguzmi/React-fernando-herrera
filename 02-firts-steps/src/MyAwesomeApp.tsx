import type{ CSSProperties } from "react";

export function MyAwesomeApp() {
    const firtsName = "Santiago" , lastName = 'Guzman'

    const favoriteGames = ['elden ring' , 'Halo', 'The last of us']
    const isActive = true;

    const address = {
        zipCode : '123',
        country : 'Colombia'
    }

    const styles:CSSProperties = {
        backgroundColor: isActive ? '#fafa' : '#ccc',
        borderRadius: 10,
        padding: 10
    }
    return (
        <div data-testid="div-app">
            <h1 data-testid="firts-name-title"> { firtsName } </h1>
            <h3 data-testid="last-name-title">{ lastName }</h3>

            <p className="favorite-games">
                { favoriteGames.join(', ') }
            </p>

            <h1 className="active">{ isActive && 'Activo' }</h1>
            <p>{ 2 + 2}</p>

            <p style={styles}>
                { JSON.stringify(address)  }
            </p>
        </div>
    )
}