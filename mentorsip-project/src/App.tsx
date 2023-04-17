import React from 'react';
import './App.css';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import ListComponent from "./components/List/List";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {RandomPlanet} from "./components/RandomPlanetSection/RandomPlanet";
import {ListItemsDetails} from "./components/ListItemDetails/ListItemsDetails";
import {withUrlData} from "./components/HOC/withUrlData";

export const withPeopleData = withUrlData('people')
const PeopleList = () => withPeopleData(ListComponent)

export const withStarshipData = withUrlData('starships')
const StarshipsList = () => withStarshipData(ListComponent)
export const withPlanetData = withUrlData('planets')
const PlanetList = () => withPlanetData(ListComponent)

function App() {

    const Header = () => {
        return (
            <div>
                <NavigationBar/>
                <RandomPlanet/>
                <Outlet/>
            </div>
        )
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route path="/people" element={<PeopleList/>}>
                            <Route path=":id" element={<ListItemsDetails/>}/>
                        </Route>
                        <Route path="/planets" element={<PlanetList/>}>
                            <Route path=":id" element={<ListItemsDetails/>}/>
                        </Route>
                        <Route path="/starships" element={<StarshipsList/>}>
                            <Route path=":id" element={<ListItemsDetails/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
