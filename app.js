var slider = document.getElementById("slider")

var selector = document.getElementById("selector")

var selectorBtn = document.getElementById("selectorBtn")

var progressBar = document.getElementById("progressBar")

var views = document.querySelector(".views")

var price = document.getElementById("price")

const toggle =  document.querySelector(".toggle")

const ball = document.querySelector(".ball")


toggle.addEventListener("click",(e)=>{
        
        ball.classList.toggle("move")
        toggle.classList.toggle("change_color")

})

function discount(amt,price){

        if(ball.classList.contains("move")){
                 amt= amt/1.25
                 price.innerHTML = Math.floor(amt+0.00).toPrecision(3)
          }else{

                  price.innerHTML = Math.floor(amt+0.00).toPrecision(3)
          }


}



slider.oninput=function(){

        let count = 1

        let num = this.value

        if(count==num){

                selector.style.left = count + "%"
                progressBar.style.width = count + "%"
                views.innerHTML = count*10+"k"
                let a=8
                discount(a,price)
               
               

        }else if(num>5 && num<=10){
           let count=5     
                selector.style.left = count + "%"
                progressBar.style.width = count + "%"
                views.innerHTML = count*10+"k"
                let b=12
                discount(b,price)
               
        }else if(num>10 && num<=50){
                let count =10

                selector.style.left = count + "%"
                progressBar.style.width = count + "%"
                views.innerHTML = count*10+"k"
                let c=16
                discount(c,price)
       

        }else if(num>50 && num<100){

                let count = 50
                selector.style.left = count + "%"
                progressBar.style.width = count + "%"
                views.innerHTML = count*10+"k"
                let e=24
                discount(e,price)

        }
        else if(num==100){

                let count = 100
                selector.style.left = count + "%"
                progressBar.style.width = count + "%"
                views.innerHTML = count/100+"M"
                let f=36
                discount(f,price)

        }
        
}

slider.onmouseover=function(){

        selectorBtn.style.boxShadow ="0px 0px 40px hsl(174, 86%, 45%)"
}
slider.onmouseout=function(){

        selectorBtn.style.boxShadow ="0px 0px 0px hsl(174, 86%, 45%)"
}