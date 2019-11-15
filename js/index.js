class List {
    constructor(options) {
        this.cont = options.cont;
        this.url = options.url;
        this.sum1 = options.sum1;
        this.sum2 = options.sum2;
        this.snav = options.snav;
        this.width = options.tu.clientWidth;
        this.vip1 = options.vip1;
        this.vip2 = options.vip2;
        this.t1 = options.t1;
        this.t2 = options.t2;
        this.t3 = options.t3;
        this.t4 = options.t4;
        this.interval = 100;
        this.idx = 0;
        this.load();
    }
    load() {
        var that = this;
        ajaxGet(that.url, function (res) {
            // console.log(res);
            that.res = JSON.parse(res);
            // console.log(that.res);
            that.display();
        })
    }
    display() {
        var str = "";
        var str1 = "";
        var str2 = "";
        var s1 = "";
        var s2 = "";
        var s3 = "";
        var s4 = "";
        for (var i = 0; i < 7; i++) {
            s1 += `<div class="tu1">
                        <a href="#">
                            <img src="${this.res[i].img}">
                            <p class="over">${this.res[i].name}</p>
                            <span>原价：￥${this.res[i].price}</span>
                            <span>现价：￥${this.res[i].vipprice}</span>
                        </a>
                    </div>
            `;
        }
        this.t1.innerHTML = s1;
        for (var i = 8; i < 16; i++) {
            s2 += `<div class="tu1">
                        <a href="#">
                            <img src="${this.res[i].img}">
                            <p class="over">${this.res[i].name}</p>
                            <span>原价：￥${this.res[i].price}</span>
                            <span>现价：￥${this.res[i].vipprice}</span>
                        </a>
                    </div>
            `;
        }
        this.t2.innerHTML = s2;
        for (var i = 16; i < 24; i++) {
            s3 += `<div class="tu1">
                        <a href="#">
                            <img src="${this.res[i].img}">
                            <p class="over">${this.res[i].name}</p>
                            <span>原价：￥${this.res[i].price}</span>
                            <span>现价：￥${this.res[i].vipprice}</span>
                        </a>
                    </div>
            `;
        }
        this.t3.innerHTML = s3;
        for (var i = 24; i < 29; i++) {
            s4 += `<div class="tu1">
                        <a href="#">
                            <img src="${this.res[i].img}" />
                            <p class="over">${this.res[i].name}</p>
                            <span>原价：￥${this.res[i].price}</span>
                            <span>现价：￥${this.res[i].vipprice}</span>
                        </a>
                    </div>
            `;
        }
        this.t4.innerHTML = s4;
        $(".pp").children("a").mouseover(function () {
            $(this).addClass("active").siblings().removeClass("active");

            $(".tushu").children(".tuul").css("display","none").eq($(this).index()).css("display","block");
    
        })
        for (var j = 3; j < 12; j++) {
            str1 += `<a href="#">
                <img src="${this.res[j].img}">
                <p>${this.res[j].name}</p>
                <span>0积分</span>
            </a>
            `;
        }
        this.vip1.innerHTML = str1;
        for (var k = 12; k < 21; k++) {
            str2 += `<a href="#">
                <img src="${this.res[k].img}">
                <p>${this.res[k].name}</p>
                <span>0积分</span>
            </a>
            `;
        }
        this.vip2.innerHTML = str2;
    }
}
new List({
    url: "http://localhost/xinhua/shop.json",
    cont: document.querySelector(".tuul"),
    snav: document.querySelectorAll(".snav"),
    tu: document.querySelector(".tushu"),
    vip1: document.querySelector(".v1"),
    vip2: document.querySelector(".v2"),
    t1: document.querySelector(".t1"),
    t2: document.querySelector(".t2"),
    t3: document.querySelector(".t3"),
    t4: document.querySelector(".t4"),
    sum1: 0,
    sum2: 9
})
