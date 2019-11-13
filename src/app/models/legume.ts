export class Legume{
    private _id: number;
    private _nom: string;
    private _typeLegume: string;

    constructor(id: number, nom: string, typeLegume: string) {
		this._id = id;
		this._nom = nom;
		this._typeLegume = typeLegume;
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
     * Getter typeLegume
     * @return {string}
     */
	public get typeLegume(): string {
		return this._typeLegume;
	}

    /**
     * Setter typeLegume
     * @param {string} value
     */
	public set typeLegume(value: string) {
		this._typeLegume = value;
	}

	
   
}