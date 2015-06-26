import {BehaviorSubject}    from "rx";
import Property             from "./Property";
import Observable           from "./Observable";

class StateProperty extends Property {

    constructor(name, value) {
        super(name);
        this.defaultValue = value;
        this.currentValue = new BehaviorSubject();
        this.actions = [];
        this.currentValue.onNext(JSON.stringify(this.defaultValue));
    }

    get observer() {
        return this.currentValue;
    }

    get observable() {
        return this.currentValue.distinctUntilChanged();
    }

    get defaultObservable() {
        return Observable.return(JSON.stringify(this.defaultValue));
    }

}

export default StateProperty;