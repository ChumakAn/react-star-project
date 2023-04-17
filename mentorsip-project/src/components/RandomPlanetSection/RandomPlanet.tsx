import classes from "./RandomPlanet.module.css"
import {useEffect, useState} from "react";
import {Planet, PlanetsResponse} from "../../api/planet";
import axios from "axios";
import planet from "../../img_1.png"

export const RandomPlanet = () => {
    const [randomPlanet, setRandomPlanet] = useState<Planet | null>(null)

    const fetchPlanets = async () => {
        await axios.get<PlanetsResponse>(
            "https://swapi.dev/api/planets"
        ).then((response) => {
            const random = Math.floor(Math.random() * response.data?.results?.length)
            setRandomPlanet(response.data.results[random])
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchPlanets();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchPlanets();
        }, 15000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className={classes.headerContainer}>
            {randomPlanet && (
                <div className={classes.planetContainer}>
                    <div className={classes.planetImage}>
                        <img src={planet} className={classes.randomPlanetImage} alt="fake planet"/>
                    </div>
                    <div className={classes.planetInfo}>
                        <h1>{randomPlanet.name}</h1>
                        <p>Population {randomPlanet.population}</p>
                        <p>Rotation Period {randomPlanet.rotation_period}</p>
                        <p>Diameter {randomPlanet.diameter}</p>
                    </div>
                </div>)
            }
        </div>
    )
}