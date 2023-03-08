import { IParliamentPeriod } from "./ParliamentPeriod"
import { IConstituent } from "./Region"

export interface IMemberOfParliament{
    id: number
    name: string
    email: string
    age: number
    status: string
    gender: number
    special_seat: number
    parliament_period: IParliamentPeriod
    constituent: IConstituent
    title: string
    gender_champion: number
    start_date: Date
    end_date: Date
    constituent_id: number
    parliament_period_id: number
    image: string
    nominated: number
}