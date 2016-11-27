<SCRIPT LANGUAGE="JavaScript">
<!--
	function start()
	{	
		
		setInterval("alert()", 60000);
	}

	function alert()
	{
		location.reload();
		widow.status = " ";
		return true;
	}

//-->
</SCRIPT>

<SCRIPT LANGUAGE="JavaScript">
<!--
start();
//-->
</SCRIPT>

<!-- Start Logo Section -->
<section id="logo-section" class="text-center">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
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

<center>
	<table border="1" cellspacing="0" cellpadding="1" width="700">
		<tbody>
			<tr align="RIGHT" width="100%" height="40">
				<td colspan="6">
					[ <a href="seats">다른 열람실 보기</a> ]
				</td>
			</tr>

			<tr align="RIGHT" style="background-color: rgb(242, 242, 242);" onmouseover="javascript:this.style.backgroundColor='#DBE7FF';" onmouseout="javascript:this.style.backgroundColor='#F2F2F2';width="100%">
				<td colspan="6"><font size="-1">
				현재 시각 {{rs.year}}-{{rs.month}}-{{rs.day}}&nbsp;&nbsp;{{rs.hour}}:{{rs.minute}}:{{rs.second}}&nbsp;</font></td>
			</tr>
			<tr align="CENTER" style="background-color: rgb(242, 242, 242);" onmouseover="javascript:this.style.backgroundColor='#DBE7FF';" onmouseout="javascript:this.style.backgroundColor='#F2F2F2';width="100%" height="25">
				<td><font size="-1">순번</font></td>
				<td width="50%"><font size="-1">열람실명</font></td>
				<td><font size="-1">전체 좌석수</font></td>
				<td><font size="-1">사용 좌석수</font></td>
				<td><font size="-1">잔여 좌석수</font></td>
				<td><font size="-1">이용율(%)</font></td>
			</tr>
			<tr align="CENTER" style="background-color: rgb(242, 242, 242);" onmouseover="javascript:this.style.backgroundColor='#DBE7FF';" onmouseout="javascript:this.style.backgroundColor='#F2F2F2';" height="25">
				<td><font size="-1">1</font></td>
				<td align="CENTER"><font color="blue" size="-1"><a href="seats/1">&nbsp;제1열람실</a></font></td>
				<td align="CENTER"><font size="-1">&nbsp;228</font></td>
				<td align="CENTER"><font size="-1">&nbsp;39</font></td>
				<td align="CENTER"><font color="blue" size="-1">&nbsp;189</font></td>
				<td align="CENTER"><font size="-1">&nbsp;17.11 %</font></td>
			</tr>
			<tr align="CENTER" style="background-color: rgb(255, 255, 255);" onmouseover="javascript:this.style.backgroundColor='#DBE7FF';" onmouseout="javascript:this.style.backgroundColor='#FFFFFF';" height="25">
				<td><font size="-1">2</font></td>
				<td align="CENTER"><font color="blue" size="-1"><a href="seats/2">&nbsp;제2열람실</a></font></td>
				<td align="CENTER"><font size="-1">&nbsp;186</font></td>
				<td align="CENTER"><font size="-1">&nbsp;33</font></td>
				<td align="CENTER"><font color="blue" size="-1">&nbsp;153</font></td>
				<td align="CENTER"><font size="-1">&nbsp;17.74 %</font></td>
			</tr>
			<tr align="CENTER" style="background-color:#F2F2F2" onmouseover="javascript:this.style.backgroundColor='#DBE7FF';" onmouseout="javascript:this.style.backgroundColor='#F2F2F2';" height="25">
				<td><font size="-1">3</font></td>
				<td align="CENTER"><font color="blue" size="-1"><a href="seats/3">&nbsp;제3열람실</a></font></td>
				<td align="CENTER"><font size="-1">&nbsp;156</font></td>
				<td align="CENTER"><font size="-1">&nbsp;17</font></td>
				<td align="CENTER"><font color="blue" size="-1">&nbsp;139</font></td>
				<td align="CENTER"><font size="-1">&nbsp;10.9 %</font></td>
			</tr>
			<tr align="CENTER" style="background-color:#FFFFFF" onmouseover="javascript:this.style.backgroundColor='#DBE7FF';" onmouseout="javascript:this.style.backgroundColor='#FFFFFF';" height="25">
				<td><font size="-1">4</font></td>
				<td align="CENTER"><font color="blue" size="-1"><a href="seats/4">&nbsp;제4열람실</a></font></td>
				<td align="CENTER"><font size="-1">&nbsp;154</font></td>
				<td align="CENTER"><font size="-1">&nbsp;42</font></td>
				<td align="CENTER"><font color="blue" size="-1">&nbsp;112</font></td>
				<td align="CENTER"><font size="-1">&nbsp;40.11 %</font></td>
			</tr>
		</tbody>
	</table>
	<font size="-1" color="white">※ 본 페이지는 1분에 한 번씩 자동으로 갱신됩니다.</font>
</center>