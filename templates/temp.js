'use strict';

import <%= camelCaseName %>Component from './<%= name %>.component';

let <%= camelCaseName %>Module = angular.module('<%= camelCaseName %>', [])

.component('<%= camelCaseName %>', <%= camelCaseName %>Component)

.name;

export default <%= camelCaseName %>Module;
