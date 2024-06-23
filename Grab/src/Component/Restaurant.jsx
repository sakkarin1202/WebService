import React from 'react'
import Card from './Card'

const Restaurant = () => {
    const restos = [
        {
            img: "https://food-cms.grab.com/compressed_webp/merchants/3-CZDJLKJEDAVAE2/hero/bca9070c0c964cb889dbe543eeef61d2_1587008101690373547.webp",
            title: "พระศุลีเกสทเฮ้าส์ - ถนนดินสอ",
            type: "อาหารตามสั่ง, สเต็ก, น้ำผลไม้"
        },
        {
            img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6BGBE5ZDFKGCE/hero/5ee85b45b5f247b192b1f665a44b1c77_1702977756190373814.webp",
            title: "ปากหม้อ พุพาน - ตะนาว",
            type: "ทานเล่น/ขนมขบเคี้ยว"
        },
        {
            img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6JJJFB1E4JJCX/hero/424f9474-b676-417d-9fab-3457d9d0f4bd__store_cover__2024__03__22__02__24__37.webp",
            title: "ครัวคุณติ๊ก - ถนนพระสุเมรุ",
            type: "ข้าวหน้า"
        },
           {
            img: "https://food-cms.grab.com/compressed_webp/merchants/3-CZMTKBDTT2XJAJ/hero/65641d0fcdc14d4a8961f56f0ead6fa5_1598847900883974941.webp",
            title: "ตี๋เย็นตาโฟรสเด็ด - ศาลาว่าการกรุงเทพฯ",
            type: "อาหารเส้น, ข้าวขาหมู, ทานเล่น"

        },
           {
            img: "https://food-cms.grab.com/compressed_webp/merchants/THGFIST00000258/hero/9e76ec58092249b2b0f1359562fa800a_1659608601087458384.webp",
            title: "ส. หน้าวัง - ถนนดินสอ",
            type: "อาหารเส้น, อาหารตามสั่ง"
        },
           {
            img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6NBAY3WAK4TUE/hero/25fbc67a-f2fa-4daa-a8b7-2ab274122eea__store_cover__2024__06__12__08__19__51.webp",
            title: "เกี๊ยวซ่าไดมารูเยาวราช - เยาวราช",
            type: "ติ่มซำ"
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {restos.map((resto, index)=> (<Card key={index} img={resto.img} title={resto.title} type={resto.type}/>))}
        </div>
    )
}

export default Restaurant