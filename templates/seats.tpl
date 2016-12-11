<!-- Start Logo Section -->
<section id="logo-section" class="text-center">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<a class="header-back-btn" href="javascript:history.back()"> <i class="fa fa-angle-left"></i> </a>
				<a href="main">
					<div class="logo text-center">
						<div class="logo-img"></div>
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

<div class="container seats">
	<table class="table table-bordered table-striped">
		<thead>
			<tr>
				<th> 열람실명 </th>
				<th class="mobile-hidden"> 전체 </th>
				<th class="mobile-hidden"> 사용 </th>
				<th class="mobile-hidden"> 잔여 </th>
				<th class="mobile-hidden"> 이용율(%) </th>
				<th class="mobile-show"> 전체/잔여 </th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="room in rs.roomList" ng-click="rs.go(room.rid)">
				<td> {{::room.rname}} </td>
				<td class="mobile-hidden"> {{::room.total_seats}} </td>
				<td class="mobile-hidden"> {{::(room.total_seats - room.able_seats)}} </td>
				<td class="mobile-hidden"> {{::room.able_seats}} </td>
				<td class="mobile-hidden"> {{::((room.total_seats - room.able_seats) / room.total_seats * 100).toFixed(2)}} % </td>
				<td class="mobile-show"> {{::room.able_seats}}/{{::room.total_seats}} </td>
			</tr>
		</tbody>
	</table>
</div>
