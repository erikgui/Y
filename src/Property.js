/**
 * Created by ychen on 6/16/15.
 */
import Observable           from "./Observable";

class Property {

    constructor(name) {
        this.name = name;
    }

    get observable() {}

    getDependencyProperties(actionName="") {
        return [];
    }
}

export default Property;