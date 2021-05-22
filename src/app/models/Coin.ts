export class Coin {
    // tslint:disable:variable-name
    private _name: string;
    private _value: number;
    private _image: string;


    constructor(name: string, value: number, image: string) {
        this._name = name;
        this._value = value;
        this._image = image;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }
}
