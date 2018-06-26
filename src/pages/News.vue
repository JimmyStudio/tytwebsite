/**
 * Created by Jimmy on 2018/6/25.
 */
<template>
  <div>
    <div class="ct">
      <div class="news">
        <div class="n-t">工信部发布区块链白皮书系统阐述我国区块链技术应用落地情况</div>
        <div class="n-i">
          <font-awesome-icon class="fai" :icon="['fas','clock']"></font-awesome-icon>
          <span class="n-i-s">2018/06/26  由</span>
          <span class="n-i-t">TYT</span>
        </div>
        <div class="cover">
          <img src="https://tyt.io/images/2018062601/01.png"/>
        </div>
        <div class="brief">
          从2017年起,“区块链+”概念话题一直持续不断,到了2018年后,区块链应用进入爆发状态,从国家到地区与各行各业都产生了密切的联系。日前,工业和信息化部信息中心总工程师童晓民、工业和信息化部信息中心工业经济研究所所长于佳宁、起风财经创始人罗智勇发布了《2018中国区块链产业白皮书》(简称《白皮书》),这是今年国内第一份官方发布的区块链产业白皮书。
        </div>
        <div class="more" @click="more(2018062601)">阅读全文<font-awesome-icon class="rm" :icon="['fas','angle-right']"></font-awesome-icon></div>
      </div>
      <div class="news">
        <div class="n-t">蚂蚁金服推出全球首个区块链跨境汇款服务</div>
        <div class="n-i">
          <font-awesome-icon class="fai" :icon="['fas','clock']"></font-awesome-icon>
          <span class="n-i-s">2018/06/25  由</span>
          <span class="n-i-t">TYT</span>
        </div>
        <div class="cover">
          <img src="https://tyt.io/images/2018062501/01.png"/>
        </div>
        <div class="brief">
          在区块链技术的支持下，跨境汇款从此能做到像本地转账一样，实时到账、省钱、省事、安全、透明。这也是继公益捐款、食品溯源、租房管理之后，蚂蚁金服在区块链应用场景的又一次创新探索。蚂蚁金服全球首个区块链跨境汇款服务是如何做到的呢？背后都有哪些技术难点？
        </div>
        <div class="more" @click="more(2018062501)">阅读全文<font-awesome-icon class="rm" :icon="['fas','angle-right']"></font-awesome-icon></div>
      </div>
      <div class="news">
        <div class="n-t">TYT Chain 中国区代表参加第一届数字经济发展论坛</div>
        <div class="n-i">
          <font-awesome-icon class="fai" :icon="['fas','clock']"></font-awesome-icon>
          <span class="n-i-s">2018/06/24  由</span>
          <span class="n-i-t">TYT</span>
        </div>
        <div class="cover">
          <img src="https://tyt.io/images/2018062401/201806250101.png"/>
        </div>
        <div class="brief">
          区块链已被公认为第二代互联网，全球下一代技术革命浪潮的关键力量，正在席卷金融、物联网、社交通讯、电商、保险等多个行业，对传统商业世界和经济价值进行颠覆和重构。 </div>
        <div class="more" @click="more(2018062401)">阅读全文<font-awesome-icon class="rm" :icon="['fas','angle-right']"></font-awesome-icon></div>
      </div>
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
  .more:hover{
    color: #00d9a4;
    background: #00263f;
  }
  .more{
    color: white;
    background: #00d9a4;
    text-align: center;
    width: 130px;
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    border-radius: 3px;
    margin-bottom: 30px;
  }
  .rm{
    margin-left: 5px;
    color: white;
  }
  .brief{
    color: #00263f;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .cover img{
    width: 100%;
    height: 100%;
    /*height: 400px;*/
    /*background: red;*/
  }
  .n-i-s{
    font-size: 14px;
  }
  .n-i{
    color: #b4b2b2;
    margin-bottom: 15px;
  }
  .fai{
    color: #00263f;
  }
  .n-i-t{
    color: #00263f;
    font-weight: 500;
    font-size: 12px;
  }
  .n-t{
    font-size: 25px;
    line-height: 40px;
    font-weight: 600;
    color: #00263f;
  }
  .news{
    margin: 40px 20px 10px 20px;
    border-bottom: 1px solid #dddddd;
    cursor: pointer;
    /*background: red;*/
  }
  .ct{
    width: 1200px;
    margin: 0 auto;
  }
  @media all and (max-width: 768px) {
    .ct{
      width: 100%;
    }
  }
</style>
