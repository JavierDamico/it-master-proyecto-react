import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function ProuductDetail() {
    var { id } = useParams()

    var [producto, setProuducto] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id).then(function (res) {
            return res.json()
        }).then(function (item) {
            setProuducto(item)
        })
    }, [])

    return (
        <div>
            <h1>{producto.title}</h1>
            <p>{producto.body}</p>
        </div>
    )
}

export default ProuductDetail