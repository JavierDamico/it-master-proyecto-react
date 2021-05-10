import items from './items.js'
import { useState } from 'react' // los {} se llaman destructuring. llamo a un objeto(en este caso una funcion) del modulo react de node. Uso solo lo que necesito
import {Link} from 'react-router-dom'


// hooks

function ItemsList() {
    var [page, setPage] = useState(0) // el array tambien esta destructurado

    var pages = items

    function nextPage() {
        if (page == pages.length - 1) {
            return;
        }

        setPage(page + 1)
    }

    return (
        <>
            <p>Mostrando pagina {page + 1} de {pages.length}</p>

            <div className="App-items-list">
                {
                    pages[page].map(function (dato) {
                        return <div className="App-item" key={dato.id}>
                            <img src={dato.image} />

                            <Link to="/productos/:id" >{dato.title}</Link>
                            
                        </div>
                    })
                }
            </div>

            <button onClick={() => setPage(0)}>
                Primera pagina
            </button>

            <button className="App-items-pagination" onClick={nextPage}>
                Ver mas productos
            </button>

            <button onClick={() => setPage(pages.length - 1)}>
                Ultima pagina
            </button>
        </>
    )
}

export default ItemsList
