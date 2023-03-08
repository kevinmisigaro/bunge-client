export interface ISector{
    id: number
    name: string
    fields: ISubSector[]
}

export interface ISubSector {
    id: number
    name: string
    sector_id: number
}