import PImg1 from '../../assets/Shopping_Flat.png'
import CImg1 from '../../assets/Shopping_Flat.png'
import PImg2 from '../../assets/hotel project.jpeg'
import CImg2 from '../../assets/LinkedIn_Flatline.png'
import PImg3 from '../../assets/dashboard.jpeg'
import CImg3 from '../../assets/LinkedIn_Two Color.png'
import PImg4 from '../../assets/portfolio.png'
import CImg4 from '../../assets/Notifications_Monochromatic.png'

const Datas = [
  {
    id: 1,
    projectName: 'فروشگاه کشاورزی',
    href: 'http://behnam-ecommerce-website.herokuapp.com/',
    projectImage: PImg1,
    category:{
      categoryName: 'فروشگاهی',
      categoryImage: CImg1
    }
  },
  {
    id: 2,
    projectName: 'معرفی هتل',
    href: 'https://behnam-hotel-project.netlify.app/',
    projectImage: PImg2,
    category:{
      categoryName: 'شرکتی',
      categoryImage: CImg2
    }
  },
  {
    id: 3,
    projectName: 'پنل ادمین',
    href: 'https://behnam-dashboard-admin.netlify.app/',
    projectImage: PImg3,
    category:{
      categoryName: 'مدیریت',
      categoryImage: CImg3
    }
  },
  {
    id: 4,
    projectName: 'وبسایت شخصی',
    href: '#',
    projectImage: PImg4,
    category:{
      categoryName: 'شخصی',
      categoryImage: CImg4
    }
  },
]

export default Datas