import Image from "next/image";

import { BookingForm } from "./BookingForm";

const reviews = [
  {
    name: "豆包主人",
    pet: "比熊 · 2 岁",
    text: "以前洗澡会紧张发抖，这次美容师一直慢慢安抚，回家还蓬蓬香香的。",
  },
  {
    name: "奶茶主人",
    pet: "英短 · 4 岁",
    text: "圆脸修得很自然，没有剪成模板脸。护理记录也很细，发现耳朵有点红及时提醒了。",
  },
  {
    name: "Lucky 主人",
    pet: "金毛 · 9 岁",
    text: "接送很省心，过程照片发得及时。老年犬也没有被催，整体体验很安心。",
  },
  {
    name: "芝麻主人",
    pet: "泰迪 · 5 岁",
    text: "毛结处理得很耐心，没有硬扯。造型清爽好打理，第二天带去公园还有邻居问在哪剪的。",
  },
  {
    name: "糯米主人",
    pet: "布偶 · 3 岁",
    text: "猫咪很怕吹风，店里分段休息慢慢吹，回家状态很放松，脚毛和指甲也修得干净。",
  },
  {
    name: "可乐主人",
    pet: "柯基 · 1 岁",
    text: "第一次到店提前问了性格和过敏史，洗完会讲皮肤状态和换毛护理，比单纯洗干净更放心。",
  },
  {
    name: "团子主人",
    pet: "博美 · 6 岁",
    text: "到店不用排很久，玻璃洗护区能看到过程。美容师手法温柔，团子离店时尾巴还在摇。",
  },
  {
    name: "奥利奥主人",
    pet: "雪纳瑞 · 7 岁",
    text: "胡子和眉毛修得有精神但不夸张，细节沟通很顺。价格也提前确认，没有临时加项。",
  },
];

export default function Home() {
  const reviewItems = [...reviews, ...reviews];

  return (
    <>
<header className="site-header">
    <nav className="nav" aria-label="主导航">
      <a className="brand" href="#top" aria-label="沐爪宠物洗护首页">
        <span className="brand-mark" aria-hidden="true">爪</span>
        <span>沐爪宠物洗护</span>
      </a>
      <div className="nav-links" aria-label="页面导航">
        <a href="#services">服务</a>
        <a href="#prices">套餐</a>
        <a href="#process">流程</a>
        <a href="#reviews">口碑</a>
        <a href="#location">位置</a>
      </div>
      <a className="nav-action" href="#booking">预约洗护</a>
    </nav>
  </header>

  <section className="hero" id="top">
    <Image className="hero-image" src="/images/hero-pet-grooming.png" alt="洗护后的宠物狗披着毛巾坐在明亮宠物洗护店内" fill priority sizes="100vw" />
    <div className="hero-inner">
      <div className="eyebrow">宠物洗澡 · 精修造型 · 皮毛护理</div>
      <h1>把每一次洗护，变成毛孩子安心的小假期</h1>
      <p className="hero-copy">一宠一消毒、低敏护理用品、透明可视洗护区。我们照顾的不只是干净好看，还有它在整个过程里的放松与安全感。</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#booking">立即预约</a>
        <a className="button button-ghost" href="#prices">查看套餐</a>
      </div>
    </div>
  </section>

  <div className="hero-stats" aria-label="门店数据">
    <div className="stat">
      <strong>45min</strong>
      <span>小型犬基础洗护最快完成</span>
    </div>
    <div className="stat">
      <strong>1v1</strong>
      <span>专属美容师全程照看</span>
    </div>
    <div className="stat">
      <strong>24h</strong>
      <span>支持线上预约与改期</span>
    </div>
  </div>

  <main>
    <section id="services">
      <div className="section-inner">
        <div className="section-heading">
          <h2>按毛孩子状态定制护理</h2>
          <p>从日常清洁到敏感肌舒缓，再到赛级风格修剪，每一步都先观察皮肤、毛量、情绪和习惯。</p>
        </div>
        <div className="service-grid">
          <article className="service-card">
            <div className="icon" aria-hidden="true">浴</div>
            <h3>基础洗澡</h3>
            <p>温水冲洗、低敏香波、吹干梳顺、耳眼清洁和指甲修剪。</p>
          </article>
          <article className="service-card">
            <div className="icon" aria-hidden="true">剪</div>
            <h3>精修造型</h3>
            <p>根据品种、脸型和生活习惯设计更好打理的日常造型。</p>
          </article>
          <article className="service-card">
            <div className="icon" aria-hidden="true">护</div>
            <h3>皮毛养护</h3>
            <p>针对干燥、打结、换毛期和异味问题，使用分区护理方案。</p>
          </article>
          <article className="service-card">
            <div className="icon" aria-hidden="true">接</div>
            <h3>接送预约</h3>
            <p>周边 3 公里可安排接送，到店前后同步照片与护理记录。</p>
          </article>
        </div>
      </div>
    </section>

    <section className="band" id="prices">
      <div className="section-inner">
        <div className="section-heading">
          <h2>清楚明白的套餐价格</h2>
          <p>最终价格会根据体型、毛量、打结程度和特殊护理需求确认，到店前先沟通，不临时加价。</p>
        </div>
        <div className="price-grid">
          <article className="price-card">
            <h3>轻松洗护</h3>
            <p>适合短毛或定期护理宠物</p>
            <div className="price">¥88 <small>起</small></div>
            <ul className="feature-list">
              <li>基础洗澡吹干</li>
              <li>耳眼清洁与指甲修剪</li>
              <li>护理后照片反馈</li>
            </ul>
          </article>
          <article className="price-card">
            <h3>蓬松焕毛</h3>
            <p>适合长毛、换毛期或轻微打结</p>
            <div className="price">¥168 <small>起</small></div>
            <ul className="feature-list">
              <li>深层清洁与护毛素</li>
              <li>开结梳理与蓬松吹护</li>
              <li>皮肤状态记录</li>
            </ul>
          </article>
          <article className="price-card">
            <h3>精致造型</h3>
            <p>适合需要修剪、圆脸或品种造型</p>
            <div className="price">¥268 <small>起</small></div>
            <ul className="feature-list">
              <li>全套洗护加精修</li>
              <li>脸部、脚部、身体线条设计</li>
              <li>护理建议与下次周期提醒</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="process">
      <div className="section-inner process">
        <div className="process-panel">
          <h2>先让它放心，再让它漂亮</h2>
          <p>胆小、第一次到店、老年宠物都可以提前备注。美容师会控制节奏，减少等待、噪音和陌生环境压力。</p>
        </div>
        <div className="steps">
          <article className="step">
            <div className="step-number">01</div>
            <div>
              <h3>预约沟通</h3>
              <p>确认宠物体型、毛况、疫苗情况、性格和需要重点照顾的位置。</p>
            </div>
          </article>
          <article className="step">
            <div className="step-number">02</div>
            <div>
              <h3>到店检查</h3>
              <p>检查皮肤、耳道、脚垫和打结情况，确认护理方案与预计时长。</p>
            </div>
          </article>
          <article className="step">
            <div className="step-number">03</div>
            <div>
              <h3>温柔洗护</h3>
              <p>一宠一浴巾一消毒工具，分段吹干，尽量降低噪音刺激。</p>
            </div>
          </article>
          <article className="step">
            <div className="step-number">04</div>
            <div>
              <h3>交付反馈</h3>
              <p>发送成片和护理记录，提醒耳朵、皮肤、换毛期等居家注意事项。</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="band" id="reviews">
      <div className="section-inner">
        <div className="section-heading">
          <h2>附近宠主的真实反馈</h2>
          <p>我们喜欢把小事做扎实：准时、干净、沟通清楚，宠物离店时状态轻松。</p>
        </div>
        <div className="review-carousel" aria-label="宠主评价轮播">
          <div className="review-track">
            {reviewItems.map((review, index) => (
              <article className="testimonial" key={`${review.name}-${index}`}>
                <div className="testimonial-header">
                  <strong>{review.name}</strong>
                  <span>{review.pet}</span>
                </div>
                <p>{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="booking" id="booking">
      <div className="section-inner">
        <div className="booking-content">
          <h2>今天给毛孩子约一场清爽护理</h2>
          <p>留下宠物品种、体重、毛况和期望时间，我们会在营业时间内尽快确认档期。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:13800000000">电话预约</a>
            <a className="button button-ghost" href="mailto:hello@muzhua.example">邮件咨询</a>
          </div>
          <aside className="booking-box" aria-label="门店信息">
            <div className="booking-line">
              <span>营业时间</span>
              <strong>周一至周日 10:00-20:00</strong>
            </div>
            <div className="booking-line">
              <span>门店地址</span>
              <strong>幸福路 88 号宠物生活馆 1F</strong>
            </div>
            <div className="booking-line">
              <span>预约电话</span>
              <strong>138-0000-0000</strong>
            </div>
            <div className="booking-line">
              <span>温馨提示</span>
              <strong>到店请携带牵引绳或航空箱</strong>
            </div>
          </aside>
        </div>
        <BookingForm />
      </div>
    </section>

    <section className="location" id="location">
      <div className="section-inner location-layout">
        <div className="location-info">
          <h2>到店位置</h2>
          <p>门店位于幸福路宠物生活圈，临近社区公园和地铁口。到店前可电话确认停车位或接送范围。</p>
          <ul className="location-list">
            <li>
              <span>址</span>
              <div>
                <strong>幸福路 88 号宠物生活馆 1F</strong>
                <small>导航搜索“沐爪宠物洗护”即可到达</small>
              </div>
            </li>
            <li>
              <span>行</span>
              <div>
                <strong>地铁 A 口步行约 6 分钟</strong>
                <small>店门口可短暂停靠，方便接送宠物</small>
              </div>
            </li>
            <li>
              <span>停</span>
              <div>
                <strong>幸福生活广场地下停车场</strong>
                <small>消费满 168 元可咨询前台领取停车券</small>
              </div>
            </li>
          </ul>
        </div>
        <div className="map-card">
          <Image
            className="location-map-image"
            src="/images/location-map-ai.png"
            alt="沐爪宠物洗护门店位置 AI 插画地图，标注幸福路、社区公园、地铁 A 口和门店地址"
            fill
            sizes="(max-width: 920px) 100vw, 58vw"
          />
        </div>
      </div>
    </section>
  </main>

  <footer className="footer">
    <div className="footer-inner">
      <span>© 2026 沐爪宠物洗护</span>
      <span>温柔、洁净、透明可视的宠物洗护体验</span>
    </div>
  </footer>
    </>
  );
}


