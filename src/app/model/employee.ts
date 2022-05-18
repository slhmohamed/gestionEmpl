import { Service } from '../model/service';
import { Region } from './region';
import { AppRole } from './role';

export class Employee {
	id?: string;
	matricule?: string;
	nom?: string;
	prenom?: string;
	age?:number;
	daterecrutement?: Date;
	username?: string;
	password?: string;
	actived?: boolean;
	etatcivil?: string;
	email?: string;
	role!: AppRole;
	region!: Region;
	service!: Service;
}
