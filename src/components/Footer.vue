/**
 * Created by Jimmy on 2018/6/22.
 */
<template>
  <div class="ft">
    <div class="ct">
      <div class="ct-i">
        <div class="logo"><div class="logo-i"></div>TYT</div>
        <div class="desc">TYT是一个<span class="desc-s">基于区块链的泛娱乐生态系统</span>。</div>
        <div class="desc">我们致力于通过明确的激励机制建立一个高效和自主的泛娱乐生态系统。通过构建区块链基础架构，DApp开发人员能够为各种创新场景创建应用程序。TYT DApp开发平台为底层基础设施提供各种通用模块，用于各种场景，如版权认证，版权交易，众筹等。</div>
      </div>
      <div class="ct-i">
        <div class="ct-i-t">链接</div>
        <div class="ct-i-l" @click="home">首页</div>
        <div class="ct-i-l" @click="whitepaper">白皮书</div>
        <div class="ct-i-l" @click="cooperation">机构合作</div>
        <div class="ct-i-l" @click="news">新闻</div>
        <div class="ct-i-l" @click="team">团队</div>
      </div>
      <div class="ct-i">
        <div class="ct-i-t r">
          <font-awesome-icon class="fai" :icon="['fab','telegram']"></font-awesome-icon>
          <font-awesome-icon class="fai" :icon="['fab','discord']"></font-awesome-icon>
          <font-awesome-icon class="fai" :icon="['fab','facebook-f']"></font-awesome-icon>
          <font-awesome-icon class="fai" :icon="['fab','twitter']" @click="openTwitter"></font-awesome-icon>
        </div>
        <div class="ct-i-l w">Copyright © 2018 The TYT Team</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home () {
      this.$router.push('/')
      scrollTo(0, 0)
    },
    whitepaper () {
      window.open('https://tyt.io/static/TYT_whitepaper_zh-CN.pdf')
    },
    cooperation () {
      this.$router.push('/cooperation')
      scrollTo(0, 0)
    },
    news () {
      this.$router.push('/news')
      scrollTo(0, 0)
    },
    team () {
      this.$router.push('/team')
      scrollTo(0, 0)
    },
    openTwitter () {
      window.open('https://twitter.com/tytchain')
    }
  }
}
</script>

<style scoped>
  .fai{
    margin: 0 5px;
  }
  .r{
    /*text-align: right;*/
  }
  .ct-i-l:hover{
    color: white;
  }
  .ct-i-l{
    margin-left: 20px;
    color: #00d8a4;
    cursor: pointer;
    margin-top: 5px;
    font-weight: 500;
  }
  .w {
    color: white;
    font-size: 12px;
  }
  .ct-i-t{
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    color: white;
    font-weight: 600;
    border-bottom: 1px solid #5a7281;
    /*background: red;*/
  }
  .desc-s{
    color: #00d8a4;
  }
  .desc{
    color: white;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 400;
  }
  .logo{
    font-size: 20px;
    margin-left: 20px;
    margin-top: 20px;
    color: white;
    font-weight: 600;
    /*background: red;*/
    line-height: 60px;
  }
  .logo-i{
    width: 40px;
    height: 40px;
    background: url("../assets/logo_dark.svg") no-repeat center;
    background-size: 100% 100%;
    float: left;
    margin-right: 10px;
  }
  .ct-i{
    flex: 1 0 0;
    height: 300px;
    /*overflow: hidden;*/
    /*background: red;*/
  }
  .ct{
    width: 1200px;
    margin: 0 auto;
    display: flex;
  }
  .ft{
    width: 100%;
    background: #00263f;
  }
  @media all and (max-width: 768px) {
    .ct{
      flex-direction: column;
      width: 100%;
    }
    .r,.w{
      text-align: center;
    }
  }
</style>
