//正在进行的数据
let arr1,arr2;
//已经完成的数据
arr1=localStorage.arr1?localStorage.arr1.split(","):[];
arr2=localStorage.arr2?localStorage.arr2.split(","):[];
/*
* <div class="box">
       <input type="checkbox">
       <p>hhh</p>
       <div class="click"></div>
  </div>
* */
let con1=document.querySelector("#con1");
let con2=document.querySelector("#con2");
let input=document.querySelector("#input");
let num=document.querySelector("#num");
let num1=document.querySelector("#num1");
function Update() {
    localStorage.arr1=arr1.join(",");
    localStorage.arr2=arr2.join(",");
    con1.innerHTML="";
    con2.innerHTML="";
    num.innerHTML=arr1.length;
    num1.innerHTML=arr2.length;
    arr1.forEach((v,ele)=>{
        let box=document.createElement("div");
        box.className="box";
        let input=document.createElement("input");
        input.setAttribute("type","checkbox");
        input.onclick=function () {
            arr2.unshift(arr1[ele]);
            arr1.splice(ele,1);
            Update();
        }
        let p=document.createElement("p");
        p.innerHTML=v;
        p.ondblclick=function () {
            let input=document.createElement("input");
            input.className="in";
            input.value=p.innerHTML;
            p.innerHTML="";
            p.appendChild(input);
            input.focus();
            input.onblur=function(){
                p.innerHTML=input.value;
                arr1.splice(ele,1,input.value);
                Update();
            }

        }
        let del=document.createElement("div");
        del.className="click";
        del.onclick=function () {
            arr1.splice(ele,1);
            Update();
        }
        box.appendChild(input);
        box.appendChild(p);
        box.appendChild(del);
        con1.appendChild(box);
    })
    arr2.forEach((v,ele)=>{
        let box1=document.createElement("div");
        box1.className="box1";
        let input=document.createElement("input");
        input.setAttribute("type","checkbox");
        input.setAttribute("checked","checked");
        input.onclick=function () {
            arr1.push(arr2[ele]);
            arr2.splice(ele,1);
            Update();
        }
        let p=document.createElement("p");
        p.innerHTML=v;
        p.ondblclick=function () {
            let input=document.createElement("input");
            input.className="in";
            input.value=p.innerHTML;
            p.innerHTML="";
            p.appendChild(input);
            input.focus();
            input.onblur=function(){
                p.innerHTML=input.value;
                arr2.splice(ele,1,input.value);
                Update();
            }

        }
        let del=document.createElement("div");
        del.className="click";
        del.onclick=function (v) {
            arr2.splice(ele,1);
            Update();
        }
        box1.appendChild(input);
        box1.appendChild(p);
        box1.appendChild(del);
        con2.appendChild(box1);
    })
}
 Update();
input.onkeydown=function (e) {
    if (e.keyCode==13&&this.value!=""){
        arr1.unshift(this.value);
        Update();
        this.value="";
    }
}



