import { useNavigate } from "react-router-dom";
import '../css/Categories.css'

export default function Categories() {
  const navigate = useNavigate();

  const categoriesUrl = [
    {
      Cname:"Mobile",
      normalBg:"https://api.digileas.com/attachments/admin/medias/87c5f127368369208a6d8c05fb2f5027.webp",
      hoverBg:"https://api.digileas.com/attachments/admin/medias/0f42758f307cf133cb11b4dfbf082eb4.webp"
    },
    {
      Cname:"Laptop",
      normalBg:"https://api.digileas.com/attachments/admin/medias/64bd00880dd7ad856459810c667fe982.webp",
      hoverBg:"https://api.digileas.com/attachments/admin/medias/0a50bc14c3de6315e7794547ec67cef3.webp"
    },
    {
      Cname:"Accessory",
      normalBg:"https://api.digileas.com/attachments/admin/medias/548677a8454e91ba337a25790dfefee8.webp",
      hoverBg:"https://api.digileas.com/attachments/admin/medias/f88f98ae11bb0c9f7b65bf0445d42a75.webp"
    },
    {
      Cname:"Gadget",
      normalBg:"https://api.digileas.com/attachments/admin/medias/6caa96765b1526c0bd740117678e84f1.webp",
      hoverBg:"https://api.digileas.com/attachments/admin/medias/fc9f3056befdc9c0c59787d8f054ee70.webp"
    },
    {
      Cname:"Cooler",
      normalBg:"https://api.digileas.com/attachments/admin/medias/e565acb22737fb7fa4941bce68a23707.webp",
      hoverBg:"https://api.digileas.com/attachments/admin/medias/eb4795ec33ea13bad269dd9f66971b1e.webp"
    },
    {
      Cname:"phoneCase",
      normalBg:"https://api.digileas.com/attachments/admin/medias/2cb450ae48e9b65f4a930d3310e91142.webp",
      hoverBg:"https://api.digileas.com/attachments/admin/medias/3f6a7b9bc142aea45b62c10a4868ce83.webp"
    },
  ];

  return (
    <div className="catContainer">
        <h2>دسته بندی محصولات</h2>
        <div className="catCardContainer">
            {categoriesUrl.map((cat, index) => {
                return (
                <div
                    key={index}
                    onClick={() => navigate(`/category/${cat.Cname}`)}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${cat.hoverBg})`)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${cat.normalBg})`)}
                    className="card"
                    style={{
                    backgroundImage: `url(${cat.normalBg})`,
                    }}
                />
                );
            })}
        </div>
    </div>
  );
}
