import {validate} from "jsonschema";

class JsonUtility {

  validateJson(instance: any, schema: any) {
    let result = validate(instance, schema);
    expect(result.valid, result.errors.toString()).to.be.true;
  }

}

export default new JsonUtility();
