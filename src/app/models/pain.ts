export class Pain{
    private _id: number;
    private _nom: string;
    private _typePain: string;
    private _typeFarine: string;
    private _farine: string;

	constructor(id: number, nom: string, typePain: string, typeFarine: string, farine: string) {
		this._id = id;
		this._nom = nom;
		this._typePain = typePain;
		this._typeFarine = typeFarine;
		this._farine = farine;
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
     * Getter typePain
     * @return {string}
     */
	public get typePain(): string {
		return this._typePain;
	}

    /**
     * Setter typePain
     * @param {string} value
     */
	public set typePain(value: string) {
		this._typePain = value;
	}

    /**
     * Getter typeFarine
     * @return {string}
     */
	public get typeFarine(): string {
		return this._typeFarine;
	}

    /**
     * Setter typeFarine
     * @param {string} value
     */
	public set typeFarine(value: string) {
		this._typeFarine = value;
	}

    /**
     * Getter farine
     * @return {string}
     */
	public get farine(): string {
		return this._farine;
	}

    /**
     * Setter farine
     * @param {string} value
     */
	public set farine(value: string) {
		this._farine = value;
	}
    
}

    