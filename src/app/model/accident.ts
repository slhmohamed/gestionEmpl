
import { Temoin } from "./temoin";
import { TypeAccident } from "./type-accident";

export class  Accident {
    id ?: string;
    lieu?: string;
    description? :string ;
    date?:Date;
    typeaccident!:TypeAccident;
    temoin!:Temoin;
    
}
