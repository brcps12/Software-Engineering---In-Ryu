
<!-- Start Logo Section -->
<section id="logo-section" class="text-center">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<a class="header-back-btn" href="javascript:history.back()"> <i class="fa fa-angle-left"></i> </a>
				<a href="/">
					<div class="logo text-center">
						<div class="logo-img"></div>
						<span><b>회원가입</b></span>
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
			<div class="col-md-6 login-col">
				<form class="login-form" ng-submit="rs.register()">
					<div class="form-group">
						<i class="fa fa-id-card"></i>
						<input type="text" class="form-control" ng-model="rs.name" placeholder="Type Your Name" required data-validation-required-message="이름를 입력해주세요">

					</div>

					<div class="form-group">
						<i class="fa fa-user"></i>
						<input type="text" class="form-control" ng-model="rs.username" placeholder="Type Your ID" required data-validation-required-message="아이디를 입력해주세요">

					</div>

					<div class="form-group">
						<i class="fa fa-lock"></i>
						<input type="password" class="form-control" ng-model="rs.password" placeholder="Type Your Password" required data-validation-required-message="패스워드를 입력해주세요">
					</div>

					<div class="form-group">
						<i class="fa fa-lock"></i>
						<input type="password" class="form-control" ng-model="rs.password2" placeholder="Password Confirm" required data-validation-required-message="패스워드를 다시 입력해주세요">
					</div>

					<div class="form-group">
						<button type="submit" class="btn btn-success">
							회원가입
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- End Main Body Section -->