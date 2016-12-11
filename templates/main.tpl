<!-- Start Logo Section -->
<section id="logo-section" class="text-center">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<a href="#">
					<div class="logo text-center">
						<div class="logo-img"></div>
						<span><b>스마트한 열람실 좌석 발급 시스템</b></span>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>
<!-- End Logo Section -->

<!-- Start Main Body Section -->
<div class="mainbody-section text-center">
	<div class="container">
		<div class="row">
			
			<div class="col-md-12">
				
				<div class="menu-item color">
					<a href="seats">
						<i class="fa fa-magic"></i>
						<p>실시간 좌석 정보</p>
					</a>
				</div>
				
			</div>

		</div>

		<div class="row" ng-if="!rs.isLogged()">
			
			<div class="col-md-12">
				
				<div class="menu-item blue">
					<a href="login">
						<i class="fa fa-user"></i>
						<p>로그인</p>
					</a>
				</div>
				
			</div>
		</div>

		<div class="row" ng-if="!rs.isLogged()">
			
			<div class="col-md-12">
				
				<div class="menu-item green">
					<a href="register">
						<i class="fa fa-user"></i>
						<p>회원가입</p>
					</a>
				</div>
				
			</div>
		</div>

		<div class="row" ng-if="rs.isLogged()">
			
			<div class="col-md-12">
				
				<div class="menu-item green" style="position: relative;">
					<a ng-style="rs.mySeat ? {'padding-bottom': '100px'} : {}">
						<i class="fa fa-gear"></i>
						<p ng-show='!rs.mySeat'>발급받은 좌석이 없습니다.</p>
						<p ng-show='rs.mySeat'>{{rs.mySeat.rname}}</p>
						<p ng-show="rs.mySeat">{{rs.mySeat.sno + '번 좌석'}}</p>
						<p ng-show="rs.mySeat">{{rs.mySeat.end_time}} 까지 </p>
						<div class="btn-group seat-btn-group" ng-show='rs.mySeat'>
							<button type="button" class="btn btn-primary" ng-click="rs.seatReturn()"> <i class="fa fa-reply"></i> <br> 반납 </button>
							<button type="button" class="btn btn-info" ng-click="rs.seatExtend()"> <i class="fa fa-refresh"></i> <br> 연장 </button>
						</div>
					</a>
				</div>
				
			</div>
		</div>

		<div class="row" ng-if="rs.isLogged()">
			
			<div class="col-sm-6">

				<div class="menu-item red">
					<a href="alarm">
						<i class="fa fa-bell"></i>
						<p>알람</p>
						<i class="new-mark"> {{rs.alarmCnt}} </i>
					</a>
				</div>

			</div>
			
			<div class="col-sm-6">
				
				<div class="menu-item blue">
					<a href="logout" ng-click="rs.logout($event)">
						<i class="fa fa-user"></i>
						<p>로그아웃</p>
					</a>
				</div>
				
			</div>
		</div>
	</div>
</div>
<!-- End Main Body Section -->
