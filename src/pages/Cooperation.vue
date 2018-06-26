/**
 * Created by Jimmy on 2018/6/25.
 */
<template>
  <div>
    <div class="main">
      <div class="title">机构合作</div>
      <div class="desc">加入TYT联盟，共建基于区块链的泛文娱生态系统</div>
      <div class="form">
        <div class="i-t">机构名称</div>
        <div class="i-i">
          <input placeholder="机构名称"/>
        </div>
        <div class="i-t">行业</div>
        <div class="i-i">
          <input placeholder="行业"/>
        </div>
        <div class="i-t">电话</div>
        <div class="i-i">
          <input placeholder="电话"/>
        </div>
        <div class="i-t">邮箱</div>
        <div class="i-i">
          <input placeholder="邮箱"/>
        </div>
        <div class="i-t">合作计划</div>
        <div class="i-i l">
          <textarea placeholder="请提供您的机构简介以及与TYT的合作计划"></textarea>
        </div>
      </div>
      <div class="btn">发 送</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .btn:hover{
    color: #00d9a4;
    background: #00263f;
  }
  .btn{
    color: white;
    background: #00d9a4;
    text-align: center;
    width: 150px;
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    border-radius: 3px;
    margin:  0 auto;
    margin-top: 20px;
    margin-bottom: 60px;
    cursor: pointer;
  }
  .l{
    height: 200px;
  }
  textarea{
    border: none;
    width: 100%;
    outline: none;
    font-size: 14px;
    color: #00263f;
    resize:none;
    height: 100%;
  }
  input{
    outline:none;
    height: 30px;
    border: none;
    font-size: 14px;
    color: #00263f;
    width: 100%;
  }
  .i-i{
    margin: 5px 20px;
    border: 1px solid #00263f;
    padding: 10px;
  }
  .i-t{
    color: #00263f;
    font-weight: 500;
    margin: 5px 20px;
  }
  .form{
    width: 600px;
    margin: 0 auto;
  }
  .desc{
    margin: 20px;
    text-align: center;
    color: #00263f;
  }
  .title{
    margin: 60px 20px 20px 20px;
    color: #00263f;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
  }
  .main{
    width: 1200px;
    margin:  0 auto;
  }
  @media all and (max-width: 768px) {
    .main{
      width: 100%;
    }
    .form{
      width: 100%
    }
  }
</style>
