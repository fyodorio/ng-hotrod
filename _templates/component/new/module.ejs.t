---
to: src/app/<%=path%>/<%=name%>/<%=name%>.module.js
---
'use strict';

import <%=h.changeCase.camel(name)%>Component from './<%=name%>.component';

const <%=h.changeCase.camel(name)%>Module = angular.module('<%=h.changeCase.camel(name)%>', [])

    .component('<%=h.changeCase.camel(name)%>', <%=h.changeCase.camel(name)%>Component)

    .name;

export default <%=h.changeCase.camel(name)%>Module;
