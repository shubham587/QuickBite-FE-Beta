import api from '@/service/api'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CatalogueComp = () => {

    const loaderData = useLoaderData()
    console.log("loaderData", loaderData)

    return (
        <div>catalogueComp</div>
    )
}


export const loader = async ({ request, params }) => {

    const fetchData = async () => {
        try {
            let res = await api.getAllProduct({ "location": "Bangalore" })
            console.log(res)
            return json({ "data": res })
        } catch (err) {
            return ( err )
        }

    }
    console.log("first")
    fetchData()
    return null
}

export default CatalogueComp
