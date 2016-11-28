<!-- Start Logo Section -->
<section id="logo-section" class="text-center">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<a class="header-back-btn" href="javascript:history.back()"> <i class="fa fa-angle-left"></i> </a>
				<a href="main">
					<div class="logo text-center">
						<h1>Smart Seat</h1>
					</div>
				</a>
				<div class="logo text-center">	
					<span><b>알람 리스트</b></span>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- End Logo Section -->
<div class="container alarm">
	<div class="row" ng-show="!rs.alarmList.length">
		<div class="col-xs-12">
			<div class="alarm-msg no-msg"> 
				<div class="msg">
					알람이 없습니다.
				</div>
			</div>
		</div>
	</div>
	<div class="row" ng-show="rs.alarmList.length" ng-repeat="alarm in rs.alarmList" ng-class="{'not-read': alarm.is_read==0}">
		<div class="col-xs-12">
			<div class="user-img"> <i class="fa fa-user"></i> </div>
			<div class="alarm-msg"> 
				<div class="msg">
					<div class="msg-title"> {{alarm.title}} </div>
					<div class="msg-content"> {{alarm.content}} </div>
				</div>
			</div>
		</div>
	</div>
</div>