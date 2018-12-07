// デフォルトではpublicなフィールド
class Abc{
    /*
    public name: string
    constructor(name: string){
        this.name = name
    }
    */
    constructor(private _name: string){
    }
    public sayHi(): void{
        console.log("hi, i am " + this._name)
    }
    get name(){
        return this._name
    }
    set name(newValue: string){
        this._name = newValue;
    }
}

var tom = new Abc("tom")
tom.name = "TOM"
console.log(tom.name)
tom.sayHi()
