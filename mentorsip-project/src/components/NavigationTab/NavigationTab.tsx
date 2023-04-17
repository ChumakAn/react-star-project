import classes from "./NavigationTab.module.css"
import {FC} from "react";
import {Link} from "react-router-dom";

interface NavigationTabProps {
    label: string,
    linkTo: string
}

export const NavigationTab:FC<NavigationTabProps> = ({label, linkTo}) => {
    return(
        <Link to={linkTo} className={classes.tab}>{label}</Link>
    )
}