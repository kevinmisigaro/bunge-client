import { IMemberOfParliament } from "./MemberOfParliament"
import { IParliamentDay } from "./ParliamentPeriod"
import { ITargetedGroup } from "./TargetedGroups"

export interface IQuestion{
    id: number
    type: number
    question_en: string
    question_sw: string
    member_of_parliament_id: number
    targeted_group_category_id: number
    sector_id: number
    sector_field_id: number
    parliament_day_id: number
    group: ITargetedGroup
    mp: IMemberOfParliament
    day: IParliamentDay
    description_en: string
    description_sw: string
    response: IGovernmentResponse
    result: IQuestionResult
}

export interface IGovernmentResponse{
    id: number
    description_en: string
    description_sw: string
    responser: string
}

export interface IQuestionResult{
    id: number
    description_en: string
    description_sw: string
}