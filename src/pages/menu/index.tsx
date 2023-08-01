import { View, Text, Image } from "@tarojs/components";
import { useLoad, useDidShow } from "@tarojs/taro";
import { Tabs, Card, Price, Tag } from "@nutui/nutui-react-taro";
import "./index.less";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
export default function Index() {
  useLoad(() => {
    setMenuList(
      list4.map((e, i) => ({
        select: i == 0,
        id: i,
        src: "//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg",
        title:
          "【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水",
        price: "388",
        vipPrice: "378",
        shopDescription: "自营",
        delivery: "厂商配送",
        shopName: "阳澄湖大闸蟹自营店>",
        name: "test",
      }))
    );
    console.log("menu loaded.");
  });
  const [tab4value, setTab4value] = useState("0");
  const list4 = Array.from(new Array(10));
  const [menuList, setMenuList]: [any, Function] = useState([]);
  useDidShow(() => {
    console.log(menuList);
  });
  return (
    <View className="bear-menu">
      <Sidebar list={menuList}></Sidebar>
      <View className="list">
        {menuList?.map((item: any) => (
          <Card
            key={item.id}
            src={item.src}
            title={item.title}
            price={item.price}
            vipPrice={item.vipPrice}
            shopDescription={item.shopDescription}
            delivery={item.delivery}
            shopName={item.shopName}
          />
        ))}
      </View>
    </View>
  );
}
