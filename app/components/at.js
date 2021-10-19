import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class AtComponent extends Component {
  @service("repro-service-app@internal")
  internal;

  @action
  setServiceValue() {
    this.internal.setValue("@@@@@");
  }
}
