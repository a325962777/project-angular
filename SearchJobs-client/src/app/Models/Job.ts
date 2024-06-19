export enum FieldWork {

    ACCOUNTING, SOFTWARE_DEVELOPMENT, ARCHITECTURE, EXTERIOR_DESIGN,
    SECRETARIAT, GRAPHICS
}

export interface Job {
    fieldWork: FieldWork,
    nameWork: string,
    scopeHours: number,
    area: string,
    requirements: string,
    hybridWork: boolean
};