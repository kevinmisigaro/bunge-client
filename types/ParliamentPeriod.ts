import { IGovernmentPhase } from "./GovernmentPhase"

export interface IParliamentPeriod{
    id: number
    administration: string
    duration: string
    governmentphase: IGovernmentPhase
    sessions: IParliamentPeriodSession[]
    sessions_count: number
}

export interface IParliamentPeriodSession{
    id: number
    name: string
    parliament_period_id: number
    days: IParliamentDay[]
    summary: string
    summary_sw: string
    parliamentPeriod: IParliamentPeriod
}

export interface IParliamentDay {
    id: number
    day_name: string
    parliament_period_session_id: number
    session: IParliamentPeriodSession
}