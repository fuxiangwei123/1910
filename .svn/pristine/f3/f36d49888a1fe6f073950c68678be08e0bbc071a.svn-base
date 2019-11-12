class Car {
    constructor(options) {
        this.url = options.url;
        this.tbody = options.tbody;
        this.count1 = 0;
        this.count2 = 0;
        this.count3=0;
        this.load();
        this.addEvent();
        this.all = options.all;
    }
    load() {
        var that = this;
        ajaxGet(this.url, function (res) {
            that.res = JSON.parse(res);
            that.getCookie();
        })
    }
    getCookie() {
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        this.display();
    }
    display() {
        var str = "";
        var str1="";   
        for (var i = 0; i < this.res.length; i++) {
            for (var j = 0; j < this.goods.length; j++) {
                if (this.res[i].goodsId === this.goods[j].id) {
                    this.em =this.goods[j].num;
                    this.b = (this.res[i].price-this.res[i].vipprice)*this.em;
                    this.span =(this.res[i].vipprice*this.em);
                    // this.span+=this.res[i].vipprice*this.em;
                    str +=`<tr index="${this.goods[j].id}">
                        <td><a href="content">${this.res[i].name}</a></td>
                        <td>${this.goods[j].id}</td>
                        <td>${this.res[i].price}</td>
                        <td>${this.res[i].vipprice}</td>
                        <td align="center">
                            <input type="image" src="images/count_04.jpg" class="tu up" name="up" >
                            <input type="text" value="${this.goods[j].num}" style="width: 37px;" class="txt">
                            <input type="image" src="images/count_02.jpg" class="tu down" name="down">
                        </td>
                        <td><span>删除</span></td>
                        <td>${this.res[i].stock}</td>
                    </tr>
                    `;
                   this.count1+=this.em-0;
                    this.count2+=this.b-0;
                   this.count3+=this.span-0;
                }
               
            }
        }
        this.all.innerHTML=`合计&nbsp;&nbsp;&nbsp;
        册数：<em>${this.count1}</em>&nbsp;&nbsp;&nbsp; 
        您共节省：¥<b>${this.count2.toFixed(2)}</b>元&nbsp;&nbsp;&nbsp;
            金额：<span class="money2">¥${this.count3.toFixed(2)}</span>元`;
        this.tbody.innerHTML = str;
    } 
    addEvent() {
        var that = this;
        this.tbody.addEventListener("click", function (eve) {
            if (eve.target.tagName == "SPAN") {
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                eve.target.parentNode.parentNode.remove();
                that.updateCookie(function (i) {
                    that.goods.splice(i, 1);
                    that.count1=0;
                    that.count2=0;
                    that.count3=0;
                    that.display();
                });
            }
        })
        this.tbody.addEventListener("click", function (eve) {
            if (eve.target.className == "tu up"){     
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                eve.target.nextElementSibling.value=+eve.target.nextElementSibling.value+1;
                that.value=eve.target.nextElementSibling.value;
                that.updateCookie(function (i) {
                    that.goods[i].num=that.value;
                    that.count1=0;
                    that.count2=0;
                    that.count3=0;
                    that.display();
                });
            }
        })
        this.tbody.addEventListener("click", function (eve) {
            if (eve.target.className == "tu down"){     
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                eve.target.previousElementSibling.value=+eve.target.previousElementSibling.value-1;
                
                that.value=eve.target.previousElementSibling.value;
                that.updateCookie(function (i) {
                    that.goods[i].num=that.value;
                    that.count1=0;
                    that.count2=0;
                    that.count3=0;
                    that.display();
                });
            
                
            }
        })
    }
    updateCookie(cb){
        for (var i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === this.id) {
                cb(i);
            }
        }
        setCookie("goods",JSON.stringify(this.goods));
    }
}

new Car({
    url: "http://localhost/xinhua/shop.json",
    tbody: document.querySelector("tbody"),
    all: document.querySelector(".main-b2")
})