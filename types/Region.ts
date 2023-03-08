export interface IRegion{
    id: number
    name: string
    constituents: IConstituent[]
    constituents_count: number
}

export interface IConstituent{
    id: number
    name: string
    region: IRegion
}