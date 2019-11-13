import { Viande } from "./viande";
import { Pain } from "./pain";
import { Legume } from "./legume";
import { Fromage } from "./fromage";


export class Burger{
    private _id: number;
    private _nom: string;
    private _pain: Pain;
    private _viande: Viande;
    private _legume: Legume;
    private _fromage: Fromage;


	constructor(id: number, nom: string, pain: Pain, viande: Viande, legume: Legume, fromage: Fromage) {
		this._id = id;
		this._nom = nom;
		this._pain = pain;
		this._viande = viande;
		this._legume = legume;
		this._fromage = fromage;
	}
    
    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Getter nom
     * @return {string}
     */
	public get nom(): string {
		return this._nom;
	}

    /**
     * Setter nom
     * @param {string} value
     */
	public set nom(value: string) {
		this._nom = value;
	}

    /**
     * Getter pain
     * @return {Pain}
     */
	public get pain(): Pain {
		return this._pain;
	}

    /**
     * Setter pain
     * @param {Pain} value
     */
	public set pain(value: Pain) {
		this._pain = value;
	}

    /**
     * Getter viande
     * @return {Viande}
     */
	public get viande(): Viande {
		return this._viande;
	}

    /**
     * Setter viande
     * @param {Viande} value
     */
	public set viande(value: Viande) {
		this._viande = value;
	}

    /**
     * Getter legume
     * @return {Legume}
     */
	public get legume(): Legume {
		return this._legume;
	}

    /**
     * Setter legume
     * @param {Legume} value
     */
	public set legume(value: Legume) {
		this._legume = value;
	}

    /**
     * Getter fromage
     * @return {Fromage}
     */
	public get fromage(): Fromage {
		return this._fromage;
	}

    /**
     * Setter fromage
     * @param {Fromage} value
     */
	public set fromage(value: Fromage) {
		this._fromage = value;
	}
    
}
    