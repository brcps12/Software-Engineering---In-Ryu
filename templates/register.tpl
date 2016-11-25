회원가입

{{rs.message}}

<button ng-click="rs.test = !rs.test">test</button>
<div ng-if="rs.test" ng-repeat="msgRow in rs.message"> {{msgRow}} </div>
