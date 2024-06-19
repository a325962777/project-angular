import { FieldWork } from "./Job";

export interface User {
    id: number,
    userName: string,
    password: string,
    fieldWorkSearch: FieldWork,
    numCVSent:number
};