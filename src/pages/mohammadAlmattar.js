import Header from "../comp/header";

const MohammadAlmattar = () => {
  return (
    
<>
  <Header />
  <main>
    <section>
      <span>
        <h2>الأسم الثلاثي</h2>
      </span>
      <h1 className="data">محمد إسماعيل المطر</h1>
    </section>
    <section>
      <span>
        <h2>الرقم الأكاديمي</h2>
      </span>
      <h1 className="data">222434750</h1>
    </section>
    <section>
      <span>
        <h2>رقم الجوال</h2>
      </span>
      <h1 className="data">0554909663</h1>
    </section>
    <section>
      <span>
        <h2>البريد الإلكتروني</h2>
      </span>
      <h1 className="data">moh@gmail.com</h1>
    </section>
  </main>
  <footer>
    <h1>روابط مهمة</h1>
    <hr />
    <a className="link" href="#">
      الدعم الفني
    </a>
    <a className="link" href="#">
      الأستفسارات والأقتراحات
    </a>
    <section id="socal-media">
      <a target="_blank" href="https://twitter.com/AB_KFU">
        <i className="fa-brands fa-twitter" />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCAjLHk2pohrCYq_e8Eo8aNQ"
      >
        <i className="fa-brands fa-youtube" />
      </a>
      <a
        target="_blank"
        href="https://instagram.com/ab_kfu?igshid=YmMyMTA2M2Y="
      >
        <i className="fa-brands fa-instagram" />
      </a>
      <a target="_blank" href="https://www.tiktok.com/@ab_kfu">
        <i className="fa-brands fa-tiktok" />
      </a>
    </section>
    <h2>جميع الحقوق محفوظة لنادي أدِيب 2023</h2>
    <h3>1.0.0v تحديث</h3>
  </footer>
  <nav className="navigation">
    <ul className="nav-list">
      <li className="list">
        <a target="_blank" href="https://www.youtube.com/">
          <span className="icon">
            <i className="fa-solid fa-heart" />
          </span>
          <span className="text">مُشاركاتي</span>
        </a>
      </li>
      <li className="list active">
        <a href="#">
          <span className="icon">
            <i className="fa-solid fa-user" />
          </span>
          <span className="text">أنا</span>
        </a>
      </li>
      <li className="list">
        <a target="_blank" href="https://www.twitter.com/">
          <span className="icon">
            <i className="fa-solid fa-key" />
          </span>
          <span className="text">المُشرف</span>
        </a>
      </li>
      <span className="indicator" />
    </ul>
  </nav>;
</>

  );
}

let list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach(item => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach(item => item.addEventListener("click", activeLink));

export default MohammadAlmattar;