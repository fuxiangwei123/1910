class List{
    constructor(options){
        // 1.准备属性
        this.cont = options.cont;
        this.url = options.url;

        // 2.开启请求
        this.load();

        // 4.事件委托绑定事件
        this.addEvent();
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            // console.log(res);
            that.res = JSON.parse(res);
            // console.log(that.res);
            // 3.渲染页面
            that.display()
        })
    }
    display(){
        var str = "";
        for(var i=0;i<this.res.length;i++){
            str+=` <dl index="${this.res[i].goodsId}">
            <dt>
                <a href="content.html" >
                    <img src="${this.res[i].img}" class="img" >
                </a>
            </dt>
            <dd class="over">
                <a href="content.html">${this.res[i].name}</a></dd>
            <dd>会员价<span>${this.res[i].price}</span></dd>
            <dd><a href="shopcar.html"><img src="images/buy.jpg" class="btn"></a></dd>
        </dl>
            `;
        }
        this.cont.innerHTML = str;
    }
    addEvent(){
        var that = this;
        this.cont.onclick = function(eve){
            if(eve.target.className == "btn"){
                // 5.记录id
                that.id = eve.target.parentNode.parentNode.parentNode.getAttribute("index");
                // 6.准备存cookie
                that.setCookie();
            }
            if(eve.target.className == "img"){
                // 5.记录id
                that.index = eve.target.parentNode.parentNode.parentNode.getAttribute("index");
                console.log(that.index);
                that.settCookie();
            }
        }
    }
    setCookie(){
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        if(this.goods.length == 0){
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            var onoff = true;   
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id === this.id){
                    this.goods[i].num++;
                    onoff = false;
                }
            }
            // 7-6.循环结束后，判断是否是新商品的状态，是否发生改变，没有改变，表示没有找到老商品，表示是新商品
            if(onoff){
                // 7-7.新：增加数据
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }

        }
        // 8.数组的操作结束后，一定要再存回cookie
        setCookie("goods",JSON.stringify(this.goods));
    }
    settCookie(){
        this.goodss =[];
        this.goodss.push({
            index:this.index,
            sum:1
        })
        setCookie("goodss",JSON.stringify(this.goodss));
    }
}
new List({
    url:"http://localhost/xinhua/shop.json",
    cont:document.querySelector(".cont")
})