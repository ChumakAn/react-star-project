import {getNormalizedString} from "./normalizeString";
import {Person} from "../api/person";
import {Starship} from "../api/starships";
import {Planet} from "../api/planet";

export const returnObjectFields = (item: Person | Starship | Planet) => {
    if (item) {
        const list = []
        const keys = Object.keys(item)
        const length = keys.length
        for (let i = 0; i < length; i++) {
            let key = keys[i]
            if (key !== 'residents'
                && key !== 'films'
                && key !== 'created'
                && key !== 'edited'
                && key !== 'url' && key !== 'homeworld'
                && key !== 'species'
                && key !== 'vehicles'
                && key !== 'starships'
                && key !== 'MGLT'
                && key !== 'starship class'
                && key !== 'hyperdrive_rating'
                && key !== 'pilots') {
                // @ts-ignore
                list.push(`${getNormalizedString(key)} - ${item[keys[i]]}`)
            }
        }
        return list
    }
}