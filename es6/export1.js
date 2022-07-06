export default{
    data: [ //資料
      '這是第一句話',
      '這是第二句話',
      '這是第三句話',
      'test',
    ],
    
    removeData(id){
      //console.log(this);
      this.data.splice(id, 1);
      this.render();
    },
  
    render(){
      const lists = document.querySelector(".component ul");
      let str = "";
      this.data.forEach((item, index)=>{
        str += `<li>${item}  <button type="button" class="btn" data-id="${index}">刪除</button></li>`;
      })
      lists.innerHTML = str;
  
      const btns = document.querySelectorAll(".btn");
      btns.forEach((item)=>{
        item.addEventListener("click", (e)=>{
          //console.log(e.target.dataset.id);
          this.removeData(e.target.dataset.id);
        });
      });
    },
    init(){
      this.render();
    }
  }