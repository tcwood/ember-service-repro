# repro-service-app

This app is meant to reproduce an issue where multiple instances of services are created. It creates a simple service and then has four components with different types of service invocation syntax that are hooked up to buttons that set state on the service. The state is then shown through a table. There is also a console.log within the service's constructor to show when the service is getting instantiated.

The four syntaxes used are:
1. @service() - rely on the variable name matching the service name
2. @service('\<service name>')
3. @service('<addon/app name>$\<service name>') - this syntax comes from the ember-holy-futuristic-template-namespacing-batman package
4. @service('<addon/app name>@\<service name>')

From these examples, it seems that 1/2 will create one shared instance of a service and 3/4 will create a separate shared instance of a service. The console.log in the constructor is also shown twice.

This issue came up in a production app where an addon instantiated a service using the syntax in 2 whereas the app used an instance of a service with the syntax of 3, resulting in separate state for a component from the addon vs a component coming from the app.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd repro-service-app`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
