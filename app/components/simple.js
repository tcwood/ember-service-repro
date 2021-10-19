import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class BatmanComponent extends Component {
  @service("internal")
  internal;

  @action
  setServiceValue() {
    this.internal.setValue("simple");
  }
}
