import React from "react";
import '../css/Footer.css';
import logo from '../images/logo.webp'
import box from '../images/box.webp'
import clender from '../images/clender.webp'
import clock from '../images/clock.webp'

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="timeLine">
        <div className="thetimeLine">
          <div className="items">
            <div className="item">
              <div className="image">
                <img src={clock} alt="clock" />
              </div>
              <div className="note">
                <span className="title">24 ساعت شبانه روز</span>
                <span className="tip">7 روز هفته</span>
              </div>
            </div>
            <div className="item">
                <div className="image">
                  <img src={box} alt="box" />
                </div>
                <div className="note">
                  <span className="title">پرداخت در محل</span>
                  <span className="tip">امکان پرداخت در محل</span>
                </div>
            </div>
            <div className="item">
                <div className="image">
                  <img src={clender} alt="clender" />
                </div>
                <div className="note">
                  <span className="title">قیمت شگفت انگیز</span>
                  <span className="tip">همراه با تخفیفات ویژه</span>
                </div>
            </div>
            <div className="item">
                  <div className="image">
                    <img src={clock} alt="clock" />
                  </div>
                <div className="note">
                  <span className="title">تضمین اصالت کالا</span>
                  <span className="tip">1 سال گارانتی معتبر</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_container">
        <div className="footer_col">
            <div className="logo_foot">
                <img src={logo} alt="" />
            </div>
          <h4>درباره ما</h4>
          <p>
            ما فروشگاهی مشابه دیجی‌کالاییم، با این تفاوت که فقط کالای اصل و خارجی از آمازون و برندهای معتبر وارد می‌کنیم.
          </p>
        </div>
        <div className="footer_col">
          <h4>دسته‌بندی‌ها</h4>
          <ul>
            <li>اکسسوری</li>
            <li>کنسول</li>
            <li>کامپیوتر</li>
            <li>ایکس باکس</li>
          </ul>
        </div>
        <div className="footer_col">
          <h4>ارتباط با ما</h4>
          <ul>
            <li>ایمیل: info@gamestore.com</li>
            <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li>آدرس: تهران، خیابان بازی</li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        © 2025 GameStore - تمام حقوق محفوظ است
      </div>
    </footer>
  );
}
