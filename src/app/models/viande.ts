export class Viande{
    private _id: number;
    private _nom: string;
    private _typeViande: string;

    constructor(id: number, nom: string, typeViande: string) {
		this._id = id;
		this._nom = nom;
		this._typeViande = typeViande;
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
     * Getter typeViande
     * @return {string}
     */
	public get typeViande(): string {
		return this._typeViande;
	}

    /**
     * Setter typeViande
     * @param {string} value
     */
	public set typeViande(value: string) {
		this._typeViande = value;
	}
    
}