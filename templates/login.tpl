
<!-- Start Logo Section -->
<section id="logo-section" class="text-center">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<a class="header-back-btn" href="javascript:history.back()"> <i class="fa fa-angle-left"></i> </a>
				<a href="/">
					<div class="logo text-center">
						<div class="logo-img"></div>
						<span><b>로그인</b></span>
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
				<form class="login-form" ng-submit="rs.loginSubmit()">
					<div class="form-group">
						<i class="fa fa-user"></i>
						<input type="text" class="form-control" ng-model="rs.username" placeholder="Enter ID" required data-validation-required-message="아이디를 입력해주세요">

					</div>

					<div class="form-group">
						<i class="fa fa-lock"></i>
						<input type="password" class="form-control" ng-model="rs.password" placeholder="Enter Password" required data-validation-required-message="패스워드를 입력해주세요">
					</div>

					<div class="form-group">
						<button type="submit" class="btn btn-success">
							로그인
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- End Main Body Section -->