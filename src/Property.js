/**
 * Created by ychen on 6/16/15.
 */
import Observable               from "./Observable";
import Util                     from "./Util";
import ModelMap                 from "./ModelMap";

class Property {

    constructor(name) {
        this.name = name;
    }

    get observable() {}

    getDependencyProperties(actionName="") {
        return [];
    }

    getPropertiesByNames(modelPropNames, actionName="") {
        return modelPropNames.map(x=>this.getPropertyByName(x, actionName)).filter(x=>!!x);
    }

    getPropertyByName(modelPropName, actionName="") {
        let {modelName, propertyName} = Util.parseDependencyString(modelPropName);
        let model = ModelMap.get(modelName===""? Util.parseDependencyString(this.name).modelName : modelName);
        let property = model.properties[propertyName];
        return (Util.isStateProperty(property) && actionName!=="")? model.actions[actionName][propertyName] : property;
    }
}

export default Property;