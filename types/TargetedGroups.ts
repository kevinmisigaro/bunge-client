export interface ITargetedGroup{
    id: number
    name: string
    category: ITargetedGroupCategory[]
}

export interface ITargetedGroupCategory{
    id: number
    name: string
    targeted_group_id: number
}