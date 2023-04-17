import {useFetch} from "./useFetch";
import {url} from "../components/constants/urls"

export const useData = (type: string) => {
    // const params = useParams();
    // const splitUrl = params["*"]?.split("/")[0]

    // @ts-ignore
    const {data, loading} = useFetch(url[type]);

    return {
        data,
        loading
    }
}