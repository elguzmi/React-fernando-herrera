export function MyAwesomeApp() {
    const firtsName = "Santiago" , lastName = 'Guzman'

    const favoriteGames = ['elden ring' , 'Halo', 'The last of us']
    const isActive = true;

    const address = {
        zipCode : '123',
        country : 'Colombia'
    }
    return (
        <>
            <h1> { firtsName } </h1>
            <h3>{ lastName }</h3>

            <p>
                { favoriteGames.join(', ') }
            </p>
            <p>{ 2 + 2}</p>

            <h1>{ isActive && 'Activo' }</h1>
            { JSON.stringify(address)  }
        </>
    )
}