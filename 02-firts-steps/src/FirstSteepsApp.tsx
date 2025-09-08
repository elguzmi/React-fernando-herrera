import { ItemCounter } from "./shopping-cart/ItemCounter"

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart : ItemInCart[] = [
    { productName: 'Nintendo switch 2', quantity: 1 },
    { productName: 'Playstation 5', quantity: 2 },
    { productName: 'Xbox Series X', quantity: 3 },
]

export function FirstSteepsApp() {
    return (
        <>
            <h1>Carro de comprar</h1>

            {  itemsInCart.map(({productName , quantity })=>(
                <ItemCounter key={productName} name={productName} quantity={quantity} />
            ))}


            {/* <ItemCounter name="Nintendo switch 2" />
            <ItemCounter name="Playstation 5" />
            <ItemCounter name="Xbox Series X" /> */}
        </>
    )
}