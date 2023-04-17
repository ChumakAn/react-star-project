import {useEffect, useState} from "react";
import axios from "axios";
import {PeopleResponse} from "../api/person";
import {StarshipsResponse} from "../api/starships";
import {PlanetsResponse} from "../api/planet";

export function useFetch(url: string) {
    const [data, setData] = useState<PeopleResponse | StarshipsResponse | PlanetsResponse | null>(null)
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await axios.get(url)
                    setData(response.data)
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
        return () => {
            console.log('')
        }
    }, [url])

    return {data, error, loading}

}