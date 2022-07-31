window.onload=function (){
var newyear=new Date('6 7 2022');
var date1=new Date();
var ms=newyear-date1;
var day=Math.floor(ms/1000/3600/24);
var botui = new BotUI('my-botui-app');botui.message
		.add({
			delay: 800,
			content: "Hi, there👋",
		})
		.then(function () {
			botui.message
				.add({
					delay: 1100,
					content: "这里是stepbystep",
				})
				.then(function () {
					botui.message
						.add({
							delay: 1100,
							content: "一个可爱的蓝孩子~",
						})
						.then(function () {
							botui.action
								.button({
									delay: 1600,
									action: [
										{
											text: "然后呢？ 😃",
											value: "sure",
										},
										{
											text: "少废话！ 🙄",
											value: "skip",
										},
									],
								})
								.then(function (a) {
									"sure" == a.value && sure();
									"skip" == a.value && end();
								});
						});
				});
		});
	var sure = function () {
			botui.message
				.add({
					delay: 600,
					content: "😘",
				})
				.then(function () {
					secondpart();
				});
		},
		end = function () {
			botui.message.add({
				delay: 600,
				content:
					"![...](https://view.moezx.cc/images/2018/05/06/a1c4cd0452528b572af37952489372b6.md.jpg)",
			});
		},
		secondpart = function () {
			botui.message
				.add({
					delay: 1500,
					content: "目前就读于天津市塘沽第一中学",
				})
				.then(function () {
					botui.message
						.add({
							delay: 1500,
							content: "向往技术，喜欢上了编程",
						})
						.then(function () {
							botui.message
								.add({
									delay: 1200,
									content: "因为编程的世界很奇妙",
								})
								.then(function () {
									botui.message
										.add({
											delay: 1500,
											content: "略懂HTML/CSS/JavaScript/PHP/Python/c++/vue",
										})
										.then(function () {
											botui.message
												.add({
													delay: 1500,
													content: "研究的方向，是根据兴趣和需求开发一些微型demo练手",
												})
												.then(function () {
													botui.message
														.add({
															delay: 1800,
															content: "喜欢编程，希望有一天能够被称为攻城狮",
														})
														.then(function () {
															botui.action
																.button({
																	delay: 1100,
																	action: [
																		{
																			text: "为什么叫stepbystep呢？ 🤔",
																			value: "why-mashiro",
																		},
																	],
																})
																.then(function (a) {
																	thirdpart();
																});
														});
												});
										});
								});
						});
				});
		},
		thirdpart = function () {
			botui.message
				.add({
					delay: 1e3,
					content: "叫stepbystep是为了提醒自己好好学习，认真编程",
				})
				.then(function () {
					botui.action
						.button({
							delay: 1500,
							action: [
								{
									text: "为什么很少更新博客呢？ 🤔",
									value: "why-cat",
								},
							],
						})
						.then(function (a) {
							fourthpart();
						});
				});
		},
		fourthpart = function () {
			botui.message
				.add({
					delay: 1e3,
					content: "因为还有"+day+"天就要高考了 ",
				})
				.then(function () {
					botui.message
						.add({
							delay: 1100,
							content: "高考过后我会定期更新的",
						})
						.then(function () {
							botui.action
								.button({
									delay: 1500,
									action: [
										{
											text: "域名有什么含意吗？(ง •_•)ง",
											value: "why-domain",
										},
									],
								})
								.then(function (a) {
									fifthpart();
								});
						});
				});
		},
		fifthpart = function () {
			botui.message
				.add({
					delay: 1e3,
					content:
						"emmmm，一看你就知道了=.= 本来想要codingboy.com的，但随便玩玩，29元/月真不值得。。",
				})
				.then(function () {
					botui.message.add({
						delay: 1600,
						content: "那么，仔细看看我的博客吧？ ^_^",
					});
				});
		};}