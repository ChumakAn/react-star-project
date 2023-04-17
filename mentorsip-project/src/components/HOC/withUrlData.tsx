import {useData} from "../../hooks/useData";

export const withUrlData = (type: string) => (Component: any) => {
    const {data} = useData(type)
    if (!data) {
        return null
    }

    return <Component dataList={data}/>


}