/**
 * Created by Jimmy on 2018/6/25.
 */
<template>
  <div>
    <!--<h1> params.id：{{ $route.params }}</h1>-->
    <div class="ct">
      <div class="t">{{news[$route.params.id].title}}</div>
      <div class="n-i">
        <font-awesome-icon class="fai" :icon="['fas','clock']"></font-awesome-icon>
        <span class="n-i-s">{{news[$route.params.id].time}}  由</span>
        <span class="n-i-t">TYT</span>
      </div>
      <div class="nc" v-html="news[$route.params.id].content">
        {{news[$route.params.id].content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: {
        '2018062601': {
          id: 2018062601,
          title: '工信部发布区块链白皮书系统阐述我国区块链技术应用落地情况',
          time: '2018/06/25',
          content: '<img style="width: 100%; height: 100%;" src="https://tyt.io/images/2018062601/01.png"/>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">1、我国区块链产业生态初步形成,产业集聚效应明显</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">据悉,《白皮书》系统分析了我国区块链产业发展现状,并明确指出:“目前,我国区块链技术持续创新,区块链产业初步形成,开始在供应链金融、征信、产品溯源、版权交易、数字身份、电子证据等领域快速应用,有望推动我国经济体系实现技术变革,组织变革和效率变革,为构建现代化经济体系作出重要贡献”。</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">此外,《白皮书》还显示,截止到2018年3月底,我国以区块链业务为主营业务的区块链公司数量已经达到了456 家,产业初步形成规模。其中,为金融行业应用服务的公司数量达到86家,为实体经济应用服务公司数量达到109家。此外,区块链解决方案、底层平台、区块链媒体及社区领域的相关公司数量均在40家以上。这就说明了,区块链领域正在吸引越来越多的创业者和资本入场,成为创新创业的新高地。</p>' +
          '<img style="width: 100%; height: 100%;" src="https://tyt.io/images/2018062601/02.png"/>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">2、区块链应用呈现多元化,从金融延伸到实体领域</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">伴随着区块链技术的快速发展,区块链应用不仅受到了互联网巨头企业广泛关注,还受到了互联网创业企业的青睐。国内知名企业、中小型企业也纷纷拓展区块链业务,就拿腾讯、阿里巴巴、京东、杭州淘游科技有限公司为例,看看它们是如何实现区块链技术的研究与场景应用。</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">阿里巴巴:2017年3月与普华永道合作共同开发一种基于区块链技术的系统来减少食品假冒。2017年11月8日,阿里巴巴集团、蚂蚁金服集团与雄安新区签署了战略合作协议,阿里巴巴与蚂蚁金服将承建数字雄安区块链实施平台。2018年1月12日,阿里巴巴上线“蚂蚁区块链”,主打“区块链”+“公益”,溯源每一笔善款。</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">腾讯:2017年4月,腾讯发布区块链方案白皮书,旨在打造区块链生态。同时,腾讯的区块链行业解决方案也于官方网站正式发布,另外,还发布了自己的区块链项目:可信区块链。2017年9月,腾讯和英特尔在无锡召开的世界物联网博览会上宣布达成合作,双方将共同开发区块链技术,用于腾讯TUSI安全实验室,以推动物联网应用场景中安全防护能力的建立。</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">京东:2017年12月,京东联合沃尔玛、IBM、清华大学等多家单位成立中国安全食品区块链溯源联盟,旨在进一步加强食品追踪、可追溯性和安全性合作,同时京东区块链平台与IBM存在着技术合作,在区块链上,京东也拥有自研能力,不会受限于开源产品,目前研发团队规模达30人,后续还会再扩张。</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">淘游:2018年5月,杭州淘游科技有限公司上线一款基于类区块链挖矿赚钱app--宝石星球,宝石星球主要通过区块链加密存储技术帮助用户管理数字资产,让普通人也能利用平常的空闲时间随手点点就能收获挖矿收益。同时,在星球基地中进行蓝钻提现,秒速到账的操作,让您的时间变得更有价值。</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">未来,区块链技术在产业互联网上的应用将极大改变实体企业与金融企业之间的协作方式,必将对提升产业运作效率、资金流通效率带来深远的影响。</p>'
        },
        '2018062501': {
          id: 2018062501,
          title: '蚂蚁金服推出全球首个区块链跨境汇款服务',
          time: '2018/06/25',
          content: '<img style="width: 100%; height: 100%;" src="https://tyt.io/images/2018062501/01.png"/>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">6月25日下午，蚂蚁金服在香港宣布，联同GCash推出了应用支付宝区块链技术的跨境汇款功能。据悉，这是全球首个跨电子钱包的区块链汇款服务，将首先应用在香港与菲律宾之间的个人转账业务上。</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">据介绍，支付宝此次将区块链技术引进电子钱包，可令跨境转账速度加快、大幅度降低成本的同时，还可提升交易过程的透明度。</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">此技术将率先应用在支付宝香港钱包（AlipayHK）和GCash上。GCash是有着“菲律宾支付宝”之称的虚拟电子钱包产品。在服务试行的前三个月内，将免除用户的手续费。即日起，AlipayHK用户只需在电子钱包内进行几步简单操作，就可在数秒内将钱转到GCash用户的电子钱包内。</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">同时，渣打银行亦在此发布会上宣布，成为蚂蚁金服的核心伙伴银行，为推出的此项区块链技术为基础的跨境汇款服务提供结算服务。</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">区块链技术的应用能够彻底改善汇款的速度和效率。根据区块链智能合约，用户一旦提交汇款申请，所有交易环节的参与机构，包括AlipayHK、GCash和渣打银行，都会收到通知。在转账过程中，每个环节的参与机构都会同时执行和验证交易。运用区块链技术，汇款人和收款人可以清楚地追踪到资金流向，包括汇款申请从何处提出，汇款人何时成功收到汇款等。同时，所有被储存、共享及上传至区块链汇款平台的信息，都会做加密处理，以保障用户隐私。</p>' +
          '<img style="width: 100%; height: 100%;" src="https://tyt.io/images/2018062501/02.png"/>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">蚂蚁金服董事长兼CEO井贤栋在现场还为蚂蚁金服的区块链定下边界“三做三不做”。用区块链来解决有社会价值的实际问题；不断攻克区块链通向大规模实际应用的技术障碍；与合作伙伴一起共建开放的区块链生态。不做没有任何真实价值的“空气币”；不做违反法律法规的技术应用；不做任何伤害用户数据安全和隐私的行为。</p>'
        },
        '2018062401': {
          id: 2018062401,
          title: 'TYT Chain 中国区代表参加第一届数字经济发展论坛',
          time: '2018/06/24',
          content: '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px; text-indent:20px">主办单位：全链盟、共链会、炼金石财经、CCTV财富零距离栏目、中国国际财经</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px;  text-indent:20px">协办单位：触动集团、东盟区块链协会、宏链财经、全球大学生区块链联盟、上海玺骏投资有限公司、一道资本</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px;  text-indent:20px">媒体协办方：炼金石财经、宏链财经、共享财经、海豚区块链、鸵鸟区块链、币计、币圈邦德、火球财经、算力财经</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px;  text-indent:20px">区块链已被公认为第二代互联网，全球下一代技术革命浪潮的关键力量，正在席卷金融、物联网、社交通讯、电商、保险等多个行业，对传统商业世界和经济价值进行颠覆和重构。</p>' +
          '<p style="margin-bottom: 10px; color: #00263f; font-size: 14px;  text-indent:20px">在此态势下，2018共链会首届区块链生态大会，6月24日在上海正式亮相。本次大会，国内区块链领域的知名人物以及一线实战专家，着眼2018区块链最新技术和应用成果，聚焦未来行业发展趋势。TYT Chain作为区块链的新兴进入者，与炼金石财经一起协办了会议。</p>' +
          '<img style="width: 100%; height: 100%;" src="https://tyt.io/images/2018062401/201806250101.png"/>' +
          '<img style="width: 100%; height: 100%;" src="https://tyt.io/images/2018062401/201806250102.png"/>' +
          '<img style="width: 100%; height: 100%;" src="https://tyt.io/images/2018062401/201806250103.png"/>' +
          '<img style="width: 100%; height: 100%;" src="https://tyt.io/images/2018062401/201806250104.png"/>'

        }
      }
    }
  }
}
</script>

<style scoped>
  .nc{
    margin: 0 20px 20px 20px;
  }
  .n-i-s{
    font-size: 14px;
  }
  .n-i{
    color: #b4b2b2;
    margin: 20px;
  }
  .fai{
    color: #00263f;
  }
  .n-i-t{
    color: #00263f;
    font-weight: 500;
    font-size: 12px;
  }
  .t{
    margin-top: 20px;
    font-size: 25px;
    line-height: 60px;
    font-weight: 600;
    color: #00263f;
    /*height: 60px;*/
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: 1px solid #dddddd;
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
