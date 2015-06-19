import Observable from "./Observable";
import Model from "./Model";
import ModelMap from "./ModelMap";

class Y {

    static createModel(template) {
        let {constantProperties, stateProperties, computedProperties} = scanProperties(template);
        let model = !constantProperties.length? new StatelessModel(template.name, stateProperties, computedProperties): new Model(template.name, constantProperties, stateProperties, computedProperties, template.actions);
        ModelMap.add(model.name, model);
        return model;
    }

    static createCollection(template) {
        let {constantProperties, stateProperties, computedProperties} = scanProperties(template);
        let collection = !constantProperties.length? new StatelessCollection(template.name, stateProperties, computedProperties): new Collection(template.name, constantProperties, stateProperties, computedProperties, template.actions);
        ModelMap.add(collection.name, collection);
        return collection;
    }
}

Object.defineProperty(Y, "Observable", {
   get: ()=> Observable
});

export default Y;