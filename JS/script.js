var hamburg = document.getElementsByClassName('hamburg')[0];

hamburg.addEventListener('click', function() {
	var span1 = document.getElementsByClassName('span1')[0];
	var span2 = document.getElementsByClassName('span2')[0];
	var span3 = document.getElementsByClassName('span3')[0];
	var side_bar = document.getElementsByClassName('side_bar')[0];
	span1.classList.toggle('move1');
	span2.classList.toggle('move2');
	span3.classList.toggle('move3');
	side_bar.classList.toggle('open');
});

//購物車換圖 start

let S_photo = document.querySelectorAll('.Small_photo');
for (let i = 0; i < S_photo.length; i++) {
	S_photo[i].addEventListener('mouseover', function(e) {
		document.getElementById('big').src = e.target.src;
	});
}

//購物車換圖 end

// for shoping cart start

//呼叫出rwd的側邊藍
var btn_to_Checkout = document.getElementsByClassName('to_Checkout');
var gray_block = document.querySelector('.gray_block');
var Rwd_Checkout = document.getElementsByClassName('Rwd_Checkout')[0];




btn_to_Checkout[0].addEventListener('click', function() {
	Rwd_Checkout = document.getElementsByClassName('Rwd_Checkout')[0];
	Rwd_Checkout.classList.toggle('on');
	gray_block.classList.toggle('close1');
});

// 側邊欄出來後  點擊蒙版會收回
gray_block.addEventListener('click', function() {
	gray_block.classList.add('close1');
	Rwd_Checkout.classList.add('on');
});

//點擊刪除會移除選項

var remove = document.getElementsByClassName('close');
for (let i = 0; i < remove.length; i++) {
	remove[i].addEventListener('click', function(e) {
		var Remove_Product = e.target.closest('tr');
		Remove_Product.remove();
		


	});
}

//	選擇數量會計算價錢
function count() {
	var select = document.getElementsByClassName('select');

	for (let i = 0; i < select.length; i++) {
		var count = select[i].closest('tr').querySelector('.count_price');
		count.innerHTML = select[i].value * 1000;
	}
};
count();
//當頁面load後 再次更新價錢

// for shoping cart end
