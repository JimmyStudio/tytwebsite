/**
 * Created by Jimmy on 2018/6/5.
 */
<template>
  <div>
    <div class="features">
      <div class="f-c">
        <div class="f-i">
          <div class="i-icon">
            <img src="../assets/1.svg"/>
          </div>
          <div class="i-s-t">自治社区</div>
          <p class="i-s-p">社区治理，技术标准，激励制度由社区投票共同决定</p>
          <p class="i-s-p">TYT将激励DApp开发者以及社区服务提供者</p>
          <p class="i-s-p">区块链代码开源</p>
        </div>
        <div class="f-i">
          <div class="i-icon">
            <img src="../assets/2.svg"/>
          </div>
          <div class="i-s-t">基础设施</div>
          <p class="i-s-p">TYTChain：在TYT生态系统中作为DApps提供分布式记账服务</p>
          <p class="i-s-p">TYT DApp平台：提供各种标准化的模块，协议和开发工具</p>
          <p class="i-s-p">TYT分布式文件系统：允许用户更安全地存储内容并更快地访问内容</p>
        </div>
        <div class="f-i">
          <div class="i-icon">
            <img src="../assets/3.svg"/>
          </div>
          <div class="i-s-t">核心模块与协议</div>
          <p class="i-s-p">TYT ID：标识协议允许用户在TYT生态系统的不同应用场景中使用同一个ID</p>
          <p class="i-s-p">AI模块：人工智能模块使用机器学习/神经网络算法挖掘基础架构和应用层的数据，以最大化数据价值</p>
          <p class="i-s-p">查重引擎：将内容与数字签名和相似性度算法进行比较以控制盗版</p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="sec-t">新闻</div>
      <div class="sec-s"></div>
      <div class="n-c">
        <div class="n-i" @click="more(2018062601)">
          <div class="n-i-i">
            <img src="https://tyt.io/images/2018062601/01.png"/>
          </div>
          <div class="n-i-t">工信部发布区块链白皮书系统阐述我国区块链技术应用落地情况</div>
          <div class="n-i-nt">由<span class="n-i-nt-s"> TYT </span>2018/06/25</div>
          <div class="n-i-p">从2017年起,“区块链+”概念话题一直持续不断,到了2018年后,区块链应用进入爆发状态,从国家到地区与各行各业都产生了密切的联系。日前,工业和信息化部信息中心总工程师童晓民、工业和信息化部信息中心工业经济研究所所长于佳宁、起风财经创始人罗智勇发布了《2018中国区块链产业白皮书》(简称《白皮书》),这是今年国内第一份官方发布的区块链产业白皮书。</div>
          <div class="more">查看全文
            <font-awesome-icon class="fai" :icon="['fas','chevron-right']"></font-awesome-icon>
          </div>
        </div>
        <div class="n-i" @click="more(2018062501)">
          <div class="n-i-i">
            <img src="https://tyt.io/images/2018062501/01.png"/>
          </div>
          <div class="n-i-t">蚂蚁金服推出全球首个区块链跨境汇款服务</div>
          <div class="n-i-nt">由<span class="n-i-nt-s"> TYT </span>2018/06/25</div>
          <div class="n-i-p">在区块链技术的支持下，跨境汇款从此能做到像本地转账一样，实时到账、省钱、省事、安全、透明。这也是继公益捐款、食品溯源、租房管理之后，蚂蚁金服在区块链应用场景的又一次创新探索。蚂蚁金服全球首个区块链跨境汇款服务是如何做到的呢？背后都有哪些技术难点？</div>
          <div class="more">查看全文
            <font-awesome-icon class="fai" :icon="['fas','chevron-right']"></font-awesome-icon>
          </div>
        </div>
        <div class="n-i" @click="more(2018062401)">
          <div class="n-i-i">
            <img src="https://tyt.io/images/2018062401/201806250101.png"/>
          </div>
          <div class="n-i-t">TYT Chain 中国区代表参加第一届数字经济发展论坛</div>
          <div class="n-i-nt">由<span class="n-i-nt-s"> TYT </span>2018/06/24</div>
          <div class="n-i-p">区块链已被公认为第二代互联网，全球下一代技术革命浪潮的关键力量，正在席卷金融、物联网、社交通讯、电商、保险等多个行业，对传统商业世界和经济价值进行颠覆和重构。
          </div>
          <div class="more">查看全文
            <font-awesome-icon class="fai" :icon="['fas','chevron-right']"></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="section dk">
      <div class="sec-t">路线图</div>
      <div class="sec-s"></div>
      <div class="r-c">
        <div class="r-i">
          <div class="r-se">Q1</div>
          <div class="r-ye">2018</div>
          <div class="r-i-c">
            <div class="r-p">项目启动</div>
            <div class="r-p">底层构架选择</div>
            <div class="r-p">核心机制设计</div>
          </div>
        </div>
        <div class="r-i">
          <div class="r-se">Q2</div>
          <div class="r-ye">2018</div>
          <div class="r-i-c">
            <div class="r-p">设计核心机制:Token 生成、奖励机制等</div>
            <div class="r-p">设计共识机制</div>
            <div class="r-p">设计开发加密协议</div>
            <div class="r-p">推进基本生态服务均等化制度建设</div>
            <div class="r-p">拓展生态领域用户创造者群体</div>
          </div>
        </div>
        <div class="r-i">
          <div class="r-se">Q3</div>
          <div class="r-ye">2018</div>
          <div class="r-i-c">
            <div class="r-p">设计开发协议层模块，如钱包模块等</div>
            <div class="r-p">设计开发 TYT ID 协议</div>
            <div class="r-p">设计开发 TYT AI 模块</div>
            <div class="r-p">测试版本开发</div>
            <div class="r-p">升级生态服务体制 1.0</div>
          </div>
        </div>
        <div class="r-i">
          <div class="r-se">Q3</div>
          <div class="r-ye">2018</div>
          <div class="r-i-c">
            <div class="r-p">设计开发协议层模块，如钱包模块等</div>
            <div class="r-p">设计开发 TYT ID 协议</div>
            <div class="r-p">设计开发 TYT AI 模块</div>
            <div class="r-p">测试版本开发</div>
            <div class="r-p">升级生态服务体制 1.0</div>
          </div>
        </div>
        <div class="r-i">
          <div class="r-se">Q4</div>
          <div class="r-ye">2018</div>
          <div class="r-i-c">
            <div class="r-p">完善 API/SDK</div>
            <div class="r-p">邀请第一批内容方入驻</div>
            <div class="r-p">引进代表性的若干应用合作伙伴</div>
            <div class="r-p">拥有 100 万社区成员</div>
          </div>
        </div>
        <div class="r-i">
          <div class="r-se">New year</div>
          <div class="r-ye">2019</div>
          <div class="r-i-c">
            <div class="r-p">TYT Chain V1.0 测试版发布</div>
          </div>
        </div>
        <div class="r-i">
          <div class="r-se">全年</div>
          <div class="r-ye">2019</div>
          <div class="r-i-c">
            <div class="r-p">全球共识节点达到 500+</div>
            <div class="r-p">生态应用合作伙伴达到 50 名</div>
            <div class="r-p">拥有 1 亿社区成员</div>
          </div>
        </div>
        <div class="r-i">
          <div class="r-se">全年</div>
          <div class="r-ye">2020</div>
          <div class="r-i-c">
            <div class="r-p">全球共识节点达到 3000+</div>
            <div class="r-p">生态应用合作伙伴达到 300 名</div>
            <div class="r-p">拥有 3 亿社区成员</div>
            <div class="r-p">完善 TYT Chain 生态社区 2.0</div>
            <div class="r-p">启动日本、东南亚等海外市场</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="ps"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    more (id) {
      scrollTo(0, 0)
      this.$router.push('/news/' + id)
    }
  }
}
</script>

<style scoped>
  .ps{
    width: 1200px;
    height: 200px;
    margin: 0 auto;
  }
  .r-ye{
    /*color: white;*/
    font-size: 40px;
    font-weight: 500;
  }
  .r-se{
    /*color: white;*/
    font-size: 14px;
    font-weight: 500;
  }
  .r-i{
    margin: 20px;
    color: #00263f;
    width: 360px;
  }
  .r-i-c{
    background: white;
    border-radius: 4px;
    padding: 20px;
    font-size: 14px;
    height: 100px;
    cursor: pointer;
  }
  .r-i-c:hover{
    /*box-shadow:0 0 2px 2px rgba(0,216,166, 1);*/
    background: #00263f;
    color: white;
    /*box-shadow:0 0 2px 2px rgba(0,38,62, 1);*/
  }
  .r-c{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    /*flex-direction: column;*/
  }
  .dk{
    background: #f2f2f2;
  }
  .more{
    margin: 10px 20px 20px 20px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    /*background: red;*/
  }
  .n-i-t{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 400;
    color: #00263f;
  }
  .n-i-nt{
    margin-left: 20px;
    font-size: 12px;
    color: #b4b2b2;
    margin-bottom: 15px;
  }
  .n-i-nt-s{
    color: #00263f;
    font-weight: 600;
  }
  .n-i-p{
    margin: 0 20px;
    color: #00263f;
    font-size: 14px;
    /*background: yellow;*/
    /*height: 60px;*/
    overflow: hidden;
    text-overflow : ellipsis;
  }
  .n-i-i{
    margin:0 20px;
    /*height: 200px;*/
    /*background: url("https://tyt.io/images/201806250101.png") no-repeat center;*/
    /*background-size: 100% 100%;*/
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .n-i-i img{
    width: 100%;
    height: 100%;
  }
  .n-i{
    /*height: 380px;*/
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
    cursor: pointer;
    margin-bottom: 20px;
    /*background: red;*/
  }
  /*.n-i:hover .n-i-i{*/
    /*background-size: 110% 110%;*/
  /*}*/
  .n-i:hover .more{
    color: #00263f;
  }
  .n-i:hover .fai{
    color: #00d8a4;
  }
  .n-c{
    width: 1200px;
    margin: 0 auto;
    display: flex;
  }
  .sec-t{
    width: 100%;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    color: #00263f;
    letter-spacing: 5px;
    margin-top: 40px;
  }
  .sec-s{
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background: #00d8a4;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .section{
    overflow:hidden;
    width: 100%;
  }
  .i-s-p{
    margin-left: 30px;
    margin-right: 30px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 10px;
  }
  .i-s-t{
    margin-left: 30px;
    height: 30px;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .f-c{
    width: 1200px;
    border-top: 1px solid #696d79;
    margin: 0 auto;
    display: flex;
  }
  .f-i{
    border-top: 2px solid transparent;
    height: 330px;
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
    color: white;
    cursor: pointer;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    /*background: red;*/
  }
  .f-i:hover{
    border-top: 2px solid #00d8a4;
    background: white;
    color: #00263f;
  }
  .i-icon{
    margin-left: 30px;
    margin-top: 40px;
    margin-bottom: 20px;
    height: 50px;
    width: 50px;
    font-size: 50px;
    line-height: 50px;
    color: #00d8a4;
    /*background: red;*/
  }
  .i-icon img{
    width: 100%;
    height: 100%;
  }
  .features{
    position: relative;
    width: 100%;
    padding-bottom: 40px;
    /*height: 440px;*/
    /*background: red;*/
    background: url("../assets/top_screen.jpg") 0 -200px;
  }
  @media all and (max-width: 768px) {
    .f-c{
      border: none;
      width: 100%;
      flex-direction: column;
    }
    .f-i{
      margin: 0 20px;
    }
    .features{
      position: relative;
      width: 100%;
      padding-bottom: 40px;
      background: url("../assets/top_screen.jpg");
    }
    .n-c{
      width: 100%;
      flex-direction: column;
    }
    .r-c{
      width: 100%;
    }
    .r-i-c{
      height: auto;
    }
    .r-i{
      width: 100%;
    }
  }
</style>
