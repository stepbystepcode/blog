function bot_ui_ini() {
    var botui = new BotUI("my-botui-app");
    botui.message.add({
        delay: 800,
        content: "Hi, there👋"
    }).then(function () {
        botui.message.add({
            delay: 1100,
            content: "这里是 Step by Step"
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "一个可爱的蓝孩子~"
            }).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{
                        text: "然后呢？ 😃",
                        value: "sure"
                    }, {
                        text: "少废话！ 🙄",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
            botui.message.add({
                delay: 600,
                content: "😘"
            }).then(function () {
                secondpart()
            })
        },
        end = function () {
            botui.message.add({
                delay: 600,
                content: "![...](https://view.moezx.cc/images/2018/05/06/a1c4cd0452528b572af37952489372b6.md.jpg)"
            })
        },
        secondpart = function () {
            botui.message.add({
                delay: 1500,
                content: "目前就读于山西大学计算机科学与技术专业"
            }).then(function () {
                botui.message.add({
                    delay: 1500,
                    content: "向往技术，喜欢在计算机的世界里探索未知"
                }).then(function () {
                    botui.message.add({
                        delay: 1200,
                        content: "主攻C++、Python、Java 和并行程序优化，偶尔也折腾Vue前端和Arch Linux"
                    }).then(function () {
                        botui.message.add({
                            delay: 1500,
                            content: "学习的知识很杂，但是都是自己喜欢的，所以都很努力~"
                        }).then(function () {
                            botui.message.add({
                                delay: 1500,
                                content: "学习的方向，是高性能计算（High-Performance Computing）以及Web前后端设计（Web Developing）"
                            }).then(function () {
                                botui.message.add({
                                    delay: 1800,
                                    content: "目前在山西大学超算队，作为队里的运维，备战世界大学生超级计算机竞赛（ASC）"
                                }).then(function () {
                                    botui.action.button({
                                        delay: 1100,
                                        action: [{
                                            text: "为什么要建立这个博客呢？ 🤔",
                                            value: "why-mashiro"
                                        }]
                                    }).then(function (a) {
                                        thirdpart()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        },
        thirdpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "因为我想要一个自己的博客，一个可以记录自己学习的地方，同时也可以和大家分享自己的学习经验和生活感悟"
            }).then(function () {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "为什么叫Step by Step呢？ 🤔",
                        value: "why-cat"
                    }]
                }).then(function (a) {
                    fourthpart()
                })
            })
        },
        fourthpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "因为希望自己能够一步一步的成长，一步一步的走向更好的自己"
            }).then(function () {
                botui.message.add({
                    delay: 1100,
                    content: "我相信，只要坚持，就一定能够成功！"
                }).then(function () {
                    botui.action.button({
                        delay: 1500,
                        action: [{
                            text: "博客都会分享哪些内容呢？(ง •_•)ง",
                            value: "why-domain"
                        }]
                    }).then(function (a) {
                        fifthpart()
                    })
                })
            })
        },
        fifthpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "主要是一些学习笔记，软件教程，以及一些生活感悟"
            }).then(function () {
                botui.message.add({
                    delay: 1600,
                    content: "那么，仔细看看我的博客吧？ ^_^"
                })
            })
        } 
}