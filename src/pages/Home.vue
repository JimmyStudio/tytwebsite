/**
 * Created by Jimmy on 2018/6/5.
 */
<template>
  <div>
    <div class="gradient1">
      <div class="store"></div>
      <div class="logo">TYT</div>
      <div class="desc">基于区块链的泛娱乐生态系统</div>
      <!--<div class="desc desc2">decentralized applications</div>-->
      <div class="btns">
        <!--<div class="btn">ANNOUNCEMENTS</div>-->
        <div class="btn">白皮书</div>
      </div>
    </div>
    <div ref="features" class="gradient2">
      <div class="module">特性</div>
      <div class="title">什么是TYT</div>
      <div class="w-content">
        <p class="w-desc">TYT是一个基于区块链的泛娱乐生态系统。我们致力于通过明确的激励机制建立一个高效和自主的泛娱乐生态系统。我们构建区块链基础架构，使DApp开发人员能够为各种创新场景创建应用程序。</p>
        <p class="w-desc">TYT DApp开发平台为底层基础设施提供各种通用模块，用于各种场景，如版权确认，版权交易，众筹等。</p>
      </div>
      <div class="sep"></div>
      <div class="title">为什么选择我们</div>
      <div class="f-t">自治社区</div>
      <div class="f-content">
        <div class="f-item">
          <div class="fai">
            <img src="../assets/commu.svg"/>
          </div>
          <div class="f-d">
            <div class="f-desc">社区治理，技术标准，激励制度由社区投票共同决定</div>
          </div>
        </div>
        <div class="f-item">
          <div class="fai">
            <img src="../assets/opr.svg"/>
          </div>
          <div class="f-d">
            <div class="f-desc">TYT将是一个开源的区块链</div>
          </div>
        </div>
        <div class="f-item">
          <div class="fai">
            <img class="mon" src="../assets/mon.svg"/>
          </div>
          <div class="f-d">
            <div class="f-desc">TYT将激励DApp开发者以及社区服务提供者</div>
          </div>
        </div>
      </div>
      <div class="f-t">基础设施</div>
      <div class="f-content">
        <div class="f-item">
          <div class="fai">
            <img class="har" src="../assets/har.svg"/>
          </div>
          <div class="f-d">
            <div class="f-desc">TYTChain：在TYT生态系统中作为DApps提供分布式记账服务</div>
          </div>
        </div>
        <div class="f-item">
          <div class="fai">
            <img src="../assets/opp.svg"/>
          </div>
          <div class="f-d">
            <div class="f-desc">TYT DApp平台：提供各种标准化的模块，协议和开发工具</div>
          </div>
        </div>
        <div class="f-item">
          <div class="fai">
            <img src="../assets/storage.svg"/>
          </div>
          <div class="f-d">
            <div class="f-desc">TYT分布式文件系统：允许用户更安全地存储内容并更快地访问内容</div>
          </div>
        </div>
      </div>
      <div class="f-t">核心模块和协议</div>
      <div class="f-content">
        <div class="f-item">
          <div class="fai">
            <img src="../assets/id.svg"/>
          </div>
          <div class="f-d">
            <div class="f-desc">TYT ID：标识协议允许用户在TYT生态系统的不同应用场景中使用同一个ID</div>
          </div>
        </div>
        <div class="f-item">
          <div class="fai">
            <img src="../assets/ai.svg"/>
          </div>
          <div class="f-d">
            <div class="f-desc">AI模块：人工智能模块使用机器学习/神经网络算法挖掘基础架构和应用层的数据，以最大化数据价值</div>
          </div>
        </div>
        <div class="f-item">
          <div class="fai">
            <img src="../assets/alg.svg"/>
          </div>
          <div class="f-d">
            <div class="f-desc">查重引擎：将内容与数字签名和相似性度算法进行比较以控制盗版</div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="activity">-->
      <!--<div class="module">ACTIVITY</div>-->
      <!--<div class="title">In Progress</div>-->
      <!--<div class="act-content">-->
        <!--<div class="act-item">-->
          <!--<div class="item-title">TYT Token Distribution</div>-->
          <!--<div class="item-title subtitle">TYT - ETH(Stage No.1)</div>-->
          <!--<div class="progress">-->
            <!--<div class="progress-item bar">-->
              <!--<div class="bar-inside"></div>-->
            <!--</div>-->
            <!--<div class="progress-item num">20.11%</div>-->
          <!--</div>-->
          <!--<div class="item-title subtitle">TARGET</div>-->
          <!--<div class="item-title white">1,000,000,000 TYT</div>-->
          <!--<div class="item-title subtitle">TIME REMAINING</div>-->
          <!--<div class="item-title white">3DAY</div>-->
          <!--<div class="item-title subtitle">SUPPORTERS</div>-->
          <!--<div class="item-title white">779</div>-->
          <!--<div class="btn-2">COMMING SOON</div>-->
          <!--&lt;!&ndash;<div class="dis">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="dis-item"></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="dis-item"></div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="act-item line"></div>-->
        <!--<div class="act-item">-->
          <!--<div class="item-title">Air Drop</div>-->
          <!--<div class="act-item-right">-->
            <!--<div class="item-title subtitle">TYT(Stage No.1)</div>-->
            <!--<div class="progress">-->
              <!--<div class="progress-item bar"></div>-->
              <!--<div class="progress-item num">0%</div>-->
            <!--</div>-->
            <!--<div class="item-title subtitle">TOTAL</div>-->
            <!--<div class="item-title white">10,000,000 TYT</div>-->
            <!--<div class="item-title subtitle">SHARE</div>-->
            <!--<div class="item-title white">1,000 TYT</div>-->
            <!--<div class="item-title subtitle">TIME REMAINING</div>-->
            <!--<div class="item-title white">3DAY</div>-->
            <!--<div class="btn-2">COMMING SOON</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash;<div class="disclaimer">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="d-title">Detail:</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="d-desc">Balabalaba...</p>&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="d-desc">Balabalaba...</p>&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="d-desc">Balabalaba...</p>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="d-title">Disclaimer:</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="d-desc">Balabalaba...</p>&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="d-desc">Balabalaba...</p>&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="d-desc">Balabalaba...</p>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--</div>-->
    <div class="rm">
      <div class="module">项目信息</div>
      <div class="title rmp">路线图</div>
      <div class="time-line-point">
        <div class="time-desc">Q1/<span>2018</span></div>
        <div class="time-sep"></div>
        <div class="time-content">
          <p>启动项目</p>
          <p>设计区块链架构</p>
          <p>设计标准</p>
        </div>
      </div>
      <div class="time-line"></div>
      <div class="time-line-point">
        <div class="time-desc time-desc-left">Q2/<span>2018</span></div>
        <div class="time-sep time-sep-left"></div>
        <div class="time-content time-content-left">
          <p>设计核心机制：Token生成，奖励机制等</p>
          <p>设计共识机制</p>
          <p>设计/开发加密协议</p>
          <p>架构设计优化</p>
        </div>
      </div>
      <div class="time-line l"></div>
      <div class="time-line-point">
        <div class="time-desc ">Q3/<span>2018</span></div>
        <div class="time-sep "></div>
        <div class="time-content">
          <p>设计/开发重复检测引擎</p>
          <p>设计/开发TYT ID协议</p>
          <p>设计/开发TYT AI模块</p>
          <p>测试版本开发</p>
        </div>
      </div>
      <div class="time-line l"></div>
      <div class="time-line-point">
        <div class="time-desc time-desc-left">Q4/<span>2018</span></div>
        <div class="time-sep time-sep-left"></div>
        <div class="time-content time-content-left">
          <p>启动测试网络1.0</p>
          <p>测试Dapp开发平台</p>
          <p>引进50名泛文娱应用合作伙伴</p>
          <p>拥有10000+名社区成员</p>
          <p>全球范围内确定100+个合格的共识节点</p>
        </div>
      </div>
      <div class="time-line l"></div>
      <div class="time-line-point">
        <div class="time-desc ">NewYear/<span>2019</span></div>
        <div class="time-sep "></div>
        <div class="time-content">
          <p>TYT Chain v1.0 发布</p>
        </div>
      </div>
      <div class="time-line s"></div>
      <div class="time-line-point">
        <div class="time-desc time-desc-left"><span>2019</span></div>
        <div class="time-sep time-sep-left"></div>
        <div class="time-content time-content-left">
          <p>泛文娱应用合作伙伴达到500名</p>
          <p>社区成员达到1,000,000+名</p>
          <p>合格的共识节点达到1000个以上</p>
          <p>发布TYT Chain v2.0</p>
        </div>
      </div>
      <div class="time-line l"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .time-content{
    position: absolute;
    width: 500px;
    top: 30px;
    left: 30px;
    font-size: 14px;
    color: #838186;
  }
  .time-desc{
    position: absolute;
    color: #393741;
    top: -20px;
    left: 30px;
    line-height: 30px;
    width: 100px;
    /*background: red;*/
    font-weight: 600;
  }
  .time-desc span{
    font-size: 12px;
    /*font-weight: 300;*/
  }
  .time-sep{
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100px;
    height: 2px;
    background: #7c91a6;
  }
  .time-line{
    width: 5px;
    height: 100px;
    background: white;
    margin: 0 auto;
  }
  .time-desc-left{
    left: -80px;
  }
  .time-sep-left{
    left: -100px;
  }
  .time-content-left{
    left: -510px;
    text-align: right;
  }
  .l{
    height: 130px;
  }
  .s{
    height: 60px;
  }
  .time-line-point{
    position: relative;
    width: 20px;
    height: 20px;
    background: #7c91a6;
    margin: 0 auto;
    border-radius: 10px;
  }
  .rmp{
    margin-bottom: 40px;
  }
  .har{
    margin-left: 10px;
  }
  .mon{
    margin-left: 16px;
  }
  .f-d{
    padding: 15px;
  }
  .w-desc:first-child{
    margin-bottom: 10px;
  }
  .w-desc{
    width: 800px;
    margin: 0 auto;
    font-size: 16px;
    color: #838186;
  }
  .sep{
    width: 1000px;
    height: 1px;
    background-color: #eaebef;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .w-content{
    /*width: 800px;*/
    /*margin: 0 auto;*/
    padding: 20px;
    /*background-color: red;*/
  }
  .f-desc{
    /*width: 360px;*/
    /*margin: 0 auto;*/
    text-align: center;
    font-size: 14px;
    color: #838186;
  }
  .f-t{
    width: 100%;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-weight: 500;
    color: #393741;
    margin-bottom: 20px;
  }
  .fai{
    width: 90px;
    height: 90px;
    margin: 0 auto;
    color: #7c91a6;
  }
  .f-item{
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
  }
  .f-content{
    width: 1230px;
    /*height: 300px;*/
    /*background: red;*/
    margin: 0 auto;
    display: flex;
    padding: 20px 0;
  }
  .d-title{
    font-size: 12px;
    font-weight: 600;
    color: #67656e;
  }
  .d-desc{
    font-size: 12px;
    color: #838186;
  }
  .disclaimer{
    width: 1220px;
    margin: 0 auto;
    padding: 10px;
    height: 120px;
    border: 1px solid #c5c5c5;
  }
  .bar-inside{
    width: 100px;
    height: 20px;
    border-radius: 10px;
    background: #fe7447;
  }
  .act-item-right{
    margin-left: 49px;
  }
  .btn-2{
    width: 240px;
    height: 45px;
    text-align: center;
    color: white;
    background-color: #838186;
    /*background-color: #443f53;*/
    line-height: 45px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .btn-2:hover{
    cursor: not-allowed;
  }
  .num{
    width: 100px;
    text-align: center;
    line-height: 60px;
    color: #fe7447;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .bar{
    width: 500px;
    height: 20px;
    background: white;
    margin-top: 20px;
    border-radius: 10px;
  }
  .progress-item{
    float: left;
  }
  .progress{
    width: 600px;
    height: 60px;
    /*background: red;*/
  }
  /*.dis-item{*/
    /*float: left;*/
    /*width: 260px;*/
    /*height: 500px;*/
    /*background: yellow;*/
    /*margin-left: 20px;*/
    /*margin-right: 20px;*/
  /*}*/
  /*.dis{*/
    /*width: 600px;*/
    /*height: 500px;*/
    /*background: red;*/
    /*margin-top: 20px;*/
  /*}*/
  .store{
    position: absolute;
    z-index: 0;
    width: 400px;
    height: 700px;
    background: url("../assets/store.png") no-repeat;
    background-position: -140px 140px;
  }
  .module{
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    color: #737085;
  }
  .item-title{
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: #737085;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .subtitle{
    text-align: left;
  }
  .white{
    text-align: left;
    color: #fe7447;
    height: 30px;
    line-height: 30px;
    font-size: 25px;
    font-weight: 900;
  }
  .act-item{
    float: left;
    width: 619px;
    /*background: yellow;*/
    /*height: 300px;*/
    /*text-align: center;*/
    /*background-color: yellow;*/
  }
  .line{
    height: 250px;
    margin-top: 75px;
    width: 0;
    border-left: 1px solid #838186;
    /*background: #838186;*/
  }
  .act-content{
    width: 1240px;
    /*height: 390px;*/
    margin: 0 auto;
    /*display: flex;*/
    background: red;
  }
  .title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #393741;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .activity{
    width: 100%;
    height: 460px;
    background-color: #eaebef;
  }
  .btns{
    position: absolute;
    z-index: 50;
    width: 100%;
    top: 380px;
    /*width: 510px;*/
  }
  /*.btn:first-child{*/
    /*margin-right: 30px;*/
  /*}*/
  .btn{
    margin: 0 auto;
    /*float: left;*/
    width: 240px;
    height: 45px;
    text-align: center;
    color: white;
    background-color: #443f53;
    line-height: 45px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .btn:hover{
    background-color: #211c2c;
  }
  .desc{
    position: absolute;
    z-index: 50;
    width: 100%;
    height: 40px;
    font-size: 30px;
    color: #737085;
    text-align: center;
    line-height: 30px;
    top: 300px;
  }
  .desc2{
    margin-bottom: 40px;
  }
  .logo{
    position: absolute;
    z-index: 50;
    width: 100%;
    height: 200px;
    margin-top: 150px;
    line-height: 200px;
    font-size: 100px;
    font-weight: 700;
    color: #443f53;
    text-align: center;
    letter-spacing: 10px;
  }
  .gradient1{
    position: relative;
    overflow: hidden;
    height: 700px;
    width: 100%;
    background: #fefefe;
    /*background: -moz-linear-gradient(to left bottom,  #000000 0%, #ffffff 100%);*/
    /*background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#000000), color-stop(100%,#ffffff));*/
    /*background: -webkit-linear-gradient(top,  #000000 0%,#ffffff 100%);*/
    /*background: -o-linear-gradient(top,  #000000 0%,#ffffff 100%);*/
    /*background: -ms-linear-gradient(top,  #000000 0%,#ffffff 100%);*/
    background: linear-gradient(to right top,  #e6ebf3 0%,#fefefe 100%);
  }
  .gradient2{
    /*height: 400px;*/
    width: 100%;
    /*background: #ffffff;*/
    background: linear-gradient(top,  #fcfcfc 0%,#ffffff 100%);
    /*background-color: yellow;*/

  }
  .rm{
    /*height: 500px;*/
    padding-bottom: 40px;
    background-color: #eaebef;
  }
  @media all and (max-width: 767px) {
    .w-desc{
      width: 100%;
      /*width: 100px;*/
      /*margin: 0 auto;*/
      /*padding: 20px;*/
      /*background-color: red;*/
    }
    .sep{
      width: 100%;
    }
    .f-content{
      width: 100%;
      flex-direction: column;
    }
    .f-item{
      width: 100%;
    }
    .time-desc-left{
      left: 30px;
    }
    .time-sep-left{
      left: 10px;
    }
    .time-content-left{
      left: 30px;
      text-align: left;
      /*background: red;*/
    }
    .time-line-point{
      margin-left: 20px;
    }
    .time-line{
      margin-left: 28px;
    }
    .time-content{
      width: 320px;
    }
  }

</style>
