import {useLocation} from "react-router-dom";
import {useMemo} from "react";
import classes from "./ListItemDetails.module.css";
import planet from "../../uranus.png"
import {returnObjectFields} from "../../helpers/objectFields";
import {useData} from "../../hooks/useData";


export const ListItemsDetails = () => {
    const locationData = useLocation()["pathname"].split("/")
    const id = useMemo(() => parseInt(locationData[2]), [locationData[2]])
    const url = locationData[1]
    const {data} = useData(url)

    const memoizedItem = useMemo(() => {
        if (data) {
            return data.results[id]
        }
    }, [id]);


    return (
        <div className={classes.selectedStarshipContainer}>
            {!memoizedItem && <div>Select item to see more</div>}
            {memoizedItem && (
                <div className={classes.selectedStarship}>
                    <div className={classes.selectedStarshipImage}>
                        <img src={planet} alt={"astronaut icon"}/>
                    </div>
                    <div className={classes.selectedStarshipInfo}>
                        <ul>
                            {returnObjectFields(memoizedItem)?.map((it) => <li key={it}>{it}</li>)}
                        </ul>
                    </div>

                </div>)}
        </div>
    )
}
