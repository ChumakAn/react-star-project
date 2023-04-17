import classes from "./List.module.css"
import React, {FC, memo, useCallback} from "react";
import {PeopleResponse, Person} from "../../api/person";
import {Starship, StarshipsResponse} from "../../api/starships";
import {Planet, PlanetsResponse} from "../../api/planet";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

interface ListComponent {
    dataList: PeopleResponse | StarshipsResponse | PlanetsResponse
}

// @ts-ignore
const ListComponent: FC<ListComponent> = ({dataList}) => {
    const navigate = useNavigate()
    const location = useLocation()

    const redirectToItem = useCallback((idx: number) => {
        const mainUrl = location["pathname"].split("/")

        switch (mainUrl[1]) {
            case "people":
                navigate(`/people/${idx}`)
                break
            case "planets":
                navigate(`/planets/${idx}`)
                break
            case "starships":
                navigate(`/starships/${idx}`)
                break
            default:
                navigate('/')
                break
        }
    }, [])


    return (
        <div className={classes.starshipListContainer}>
            <div className={classes.starshipList}>
                <ul>
                    {
                        dataList &&
                        dataList.results?.map((value: Person | Starship | Planet, idx: number) => (
                                <li key={value.name} onClick={() => redirectToItem(idx)}>{value.name}</li>
                            )
                        )}
                </ul>
            </div>
            <Outlet/>
        </div>
    )

}

export default memo(ListComponent)
