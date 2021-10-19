import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class NoneComponent extends Component {
  @service()
  internal;

  @action
  setServiceValue() {
    this.internal.setValue("none");
  }
}
