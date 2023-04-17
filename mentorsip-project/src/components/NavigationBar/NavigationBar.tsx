import classes from './NavigationBar.module.css'
import {NavigationTab} from "../NavigationTab/NavigationTab";
import {Component} from "react";

export class NavigationBar extends Component {
    render() {
        return (
            <header className={classes.mainHeader}>
                <div className={classes.logo}>
                    Star DB
                </div>
                <div className={classes.tabs}>
                    <NavigationTab label={"People"} linkTo={"/people"}></NavigationTab>
                    <NavigationTab label={"Planets"} linkTo={"/planets"}></NavigationTab>
                    <NavigationTab label={"Starships"} linkTo={"/starships"}></NavigationTab>
                </div>
            </header>
        )
    }
}