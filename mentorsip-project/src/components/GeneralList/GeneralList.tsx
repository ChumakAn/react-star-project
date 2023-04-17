import {useNavigate, useParams} from "react-router-dom";
import {useData} from "../../hooks/useData";
import classes from "./GeneralList.module.css"

export const GeneralList = () => {
    const {data, loading} = useData('people');
    const navigate = useNavigate();
    const params = useParams()

    const redirectToItem = (idx: number) => {
        const mainUrl = params["*"]?.split("/")[0]
        switch (mainUrl) {
            case "people":
                navigate(`/people/${idx}`);
                break;
            case "planets":
                navigate(`/planets/${idx}`);
                break;
            case "starships":
                navigate(`/starships/${idx}`);
                break;
            default:
                navigate("/");
                break;
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={classes.starshipListContainer}>
            <div className={classes.starshipList}>
                <ul>
                    {data?.results?.map((value, idx) => (
                        <li key={value.name} onClick={() => redirectToItem(idx)}>
                            {value.name}
                        </li>
                    ))}
                </ul>
            </div>
            {/*{*/}
            {/*    data && <ListItemsDetails items={data?.results}></ListItemsDetails>*/}
            {/*}*/}

        </div>
    );
};
