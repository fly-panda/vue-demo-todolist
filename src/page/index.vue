<template>
  <div class="itemList">
    <div class="addItem">
      <input type="text" class="content-input" placeholder="添加任务..." v-model="newItem">
      <span class="add-btn" v-text="addIcon" v-on:click="addItem"></span>
    </div>
    <ul class="list">
      <li v-for="(item,index) in items" v-bind:class="{finishBackground:item.isFinish}">

        <span class="badge" v-on:click="toogleFinsih(item,index)">
          <span v-if="item.isFinish">√</span>
        </span>

        <span class="number" v-text="index+1+'.'"></span>

        <router-link v-if="item.isFinish == false" :to="{name: 'Detail',params: {id:index,text:item.text}}">
          <span v-bind:class="{finishText:item.isFinish}">{{item.text}}</span>
        </router-link>

        <a v-else href="javascript:;">
          <span v-bind:class="{finishText:item.isFinish}">{{item.text}}</span>
        </a>

        <span class="del" v-on:click="delItem(item, index)">X</span>

      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
  //该网站的localStorage的键值，用于存放数据
  var todoList = 'todolist';
  //对localStorage的封装
  var lsp = (function () {
    return ({
        add: function (dataval) {
            //添加数据，键为todolist
            localStorage.setItem(todoList, JSON.stringify(dataval));
        },
        get: function () {
            //读取键为todolist的数据
            return JSON.parse(localStorage.getItem(todoList));
        },
        remove: function () {
            //移除该站点下键为todolist的数据
            localStorage.removeItem(todoList);
        },
        clear: function () {
            //清空该站点下的所有localStorage的数据
            localStorage.clear();
        }
    });
  })();

  export default {
    name: 'itemList',
    data () {
      return {
        addIcon: '+',
        newItem: '',
        items: lsp.get() || []
      }
    },
    methods: {
      addItem:function() {
        var self = this;
        var reg = /^\s*$/g;
        if(reg.test(this.newItem)){
          alert("内容不能为空")
        }else{
          self.items.push({
            id: self.items.length + 1,
            text: self.newItem,
            isFinish: false
          })
          lsp.add(self.items);
          self.newItem = '';
        }
      },
      toogleFinsih: function (item, index) {
          console.log(lsp.get())
          this.items[index].isFinish = !item.isFinish
          lsp.add(this.items)
      },
      delItem: function (index) {
        this.items.splice(index,1);
        lsp.add(this.items)
      }

    }
  }
</script>

<style>
  a:link {
    text-decoration: none;
  }
  .itemList {
    height: 16.55rem;
    overflow:scroll;
  }
  .itemList::-webkit-scrollbar {
    display: none
  }
  .addItem {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
  }
  .content-input {
    height: 40px;
    border: none;
    outline: none;
    padding: 0 10px;
    flex: 1;
    border-radius: 2px;
    font-size: 14px;
    background: rgba(113,144,110,.7);
    color: #fff;
  }
  .content-input::-webkit-input-placeholder {
    color: #fff;
  }
  .add-btn {
    height: 40px;
    line-height: 40px;
    font-size: 35px;
    background: rgba(113,144,110,.7);
    width: 40px;
    text-align: center;
    margin-left: 10px;
    border-radius: 2px;
    color: #fff;
  }
  .list {
    padding: 0 15px 10px 15px;
  }
  .list li  {
    background: #fff;
    height: 40px;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-size: 14px;
    margin-bottom: 10px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0,.1);
  }
  .list li a {
    flex: 1;
    margin: 0 5px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: #333;
    text-align: left;
  }
  .badge {
    display: block;
    background: #fff;
    width: 15px;
    height: 15px;
    text-align: center;
    border-radius: 2px;
    border: 1px solid #ddd;
    font-size: 20px;
    line-height: 15px;
    color: #666;
    margin-right: 5px;
  }
  .finishText {
    text-decoration: line-through;
  }
  .list .finishBackground {
    opacity: .7;
  }
  .del {
    color: #ddd;
    width: 20px;
    line-height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
</style>
