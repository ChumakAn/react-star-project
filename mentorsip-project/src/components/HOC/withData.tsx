import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import {url} from "../constants/urls";

export const withData = (Component: any) => {
    return () => {
        const params = useParams()

        // @ts-ignore
        const {data} = useFetch(url[params["*"]])
        if (!data) {
            return null
        }
        return (
            <Component dataList={data}/>
        )
    }
}