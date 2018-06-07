/**
 * Created by Jimmy on 2018/6/7.
 */
<template>
  <div class="main">
    <div class="content">
      <div class="sec">CORE MEMBER</div>
      <div class="member">
        <div class="name">Jimmy</div>
        <div class="title">Developer</div>
        <div class="sep"></div>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
      </div>
      <div class="member">
        <div class="name">Jimmy</div>
        <div class="title">Developer</div>
        <div class="sep"></div>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
      </div>
      <div class="sec">CONSULTANT</div>
      <div class="member">
        <div class="name">Jimmy</div>
        <div class="title">Developer</div>
        <div class="sep"></div>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
      </div>
      <div class="member">
        <div class="name">Jimmy</div>
        <div class="title">Developer</div>
        <div class="sep"></div>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .sec{
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-weight: 500;
    color: #393741;
    width: 100%;
  }
  .member{
    /*border: 1px solid black;*/
    margin-bottom: 20px;
  }
  .desc{
    color: #838186;
    line-height: 20px;
    font-size: 14px;
  }
  .name{
    font-size: 18px;
    height: 30px;
    line-height: 30px;
    color: #443f53;
    font-weight: 500;
  }
  .title{
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    color: #838186;
  }
  .sep{
    width: 300px;
    height: 2px;
    background-color: #443f53;
    margin-bottom: 10px;
  }
  .content{
    padding-bottom: 40px;
    padding-top: 40px;
    width: 1240px;
    margin: 0 auto;
  }
  .main{
    background: linear-gradient(top,  #fcfcfc 0%,#ffffff 100%);
  }
  @media all and (max-width: 767px) {
    .content{
      width: 100%;
    }
    .name{
      margin-left: 20px;
    }
    .title{
      margin-left: 20px;
    }
    .sep{
      margin-left: 20px;
    }
    .desc{
      padding: 0 20px;
    }
  }
</style>
