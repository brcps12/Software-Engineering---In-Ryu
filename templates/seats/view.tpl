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
					<span><b>실시간 좌석 정보</b></span>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- End Logo Section -->
<div class="container seat-map-container">
	<div class="overlap">
		<table class="table seat-table-minimap">
			<tr ng-repeat="i in rs.loopRange(1, rs.roomInfo.rows)">
				<td ng-repeat="j in rs.loopRange(1, rs.roomInfo.cols)" ng-class="rs.seatInfo[i][j] ? (rs.seatInfo[i][j].available == 1 ? 'able' : 'resv') : 'pass'">
				</td>
			</tr>
		</table>
		<div class="overlap-window"></div>
	</div>
	<div class="seat-map">
		<table class="table seat-table" style="background: white">
			<tr ng-repeat="i in rs.loopRange(1, rs.roomInfo.rows)">
				<td ng-repeat="j in rs.loopRange(1, rs.roomInfo.cols)" ng-class="rs.seatInfo[i][j] ? (rs.seatInfo[i][j].available == 1 ? 'able' : 'resv') : 'pass'" ng-click="rs.resv(rs.seatInfo[i][j])">
					{{::rs.seatInfo[i][j] ? rs.seatInfo[i][j].sno : ''}}
				</td>
			</tr>
		</table>
	</div>
</div>