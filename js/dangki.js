function KiemTra()
{
	var ht = document.getElementById("txtHoTen").value;
	var email = document.getElementById("txtEmail").value;
	var aCong= email.indexOf("@");
	var dauCham = email.lastIndexOf(".");
	var nam = window.document.dangky.txtNam.value;
	var ten = window.document.dangky.txtTenDN.value;
	var mk = window.document.dangky.txtMatKhau.value;
	var nmk = window.document.dangky.txtNhapLaiMK.value;
	if(ht.length==0)
	{
		window.alert(" Ban chua nhap ho ten ");
		window.document.dangky.txtHoTen.focus();
		return false;
	}
	if (email.length==0) {
	alert("Email không được để trống");
	return false;
	}
	else if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {
	alert("Email bạn điền không chính xác");
	return false;
	}

	if(nam.length==0)
	{
		window.alert(" Ban chua nhap nam sinh");
		window.document.dangky.txtNam.focus();
		return false;
	}
	else if(isNaN(nam)==true){
		window.alert("Nam sinh phai la so");
		window.document.dangky.txtHoTen.focus();
		return false;
	}
	
	if(ten.length==0)
	{
		window.alert(" Ban chua nhap ten Tai khoan ");
		window.document.dangky.txtHoTen.focus();
		return false;
	}
	if (mk.length==0)
		{
		window.alert("Mat khau khong duoc de trong");
		document.dangky.txtMatKhau.focus();
		return false;
		}

	 if (mk.length < 5)
		{
		window.alert("Mat khau ngan qua.");
		document.dangky.txtMatKhau.focus();
		return false;
		}
	if(nmk.length==0)
		{
		window.alert("Mat khau go lại khong duoc de trong!");
		document.dangky.txtNhapLaiMK.focus();
		return false;
		}
		
	else if (mk!=nmk)
		{
		window.alert("Mat khau go lai khong dung.");
		document.dangky.txtNhapLaiMK.focus();
		return false;
		}
	if (mk=nmk)
	window.alert("ĐĂNG KÍ THÀNH CÔNG");
	
}