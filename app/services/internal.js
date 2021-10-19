import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class InternalService extends Service {
  @tracked value = "default";

  constructor() {
    super(...arguments);
    console.log("internal - constructor");
  }

  setValue(newValue) {
    this.value = newValue;
  }
}
