import { Detail } from "./detail";
import { DetailAccidentComponent } from "../detail-accident/detail-accident.component";
import { Accident } from "./accident";

export interface DossierMedical {
    id? :string;
    numDossier?:string;
    etat?:boolean;
    /*typeAccident?:TypeAccident;*/
   accident?:Accident;
   detail?:Detail;
}
