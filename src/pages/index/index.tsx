import { View, Text, Image } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { Swiper } from "@nutui/nutui-react-taro";
import "./index.less";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="bear">
      <Swiper className="bear-swiper" autoPlay>
        <Swiper.Item>
          <Image src={img1} />
        </Swiper.Item>
        <Swiper.Item>
          <Image src={img2} />
        </Swiper.Item>
        <Swiper.Item>
          <Image src={img3} />
        </Swiper.Item>
      </Swiper>
      <View className="bear-app">
        <View className="app-item">
          <View className="item-icon"></View>
          <View className="item-text">xxx</View>
        </View>
        <View className="app-item">
          <View className="item-icon"></View>
          <View className="item-text">xxx</View>
        </View>
        <View className="app-item">
          <View className="item-icon"></View>
          <View className="item-text">xxx</View>
        </View>
        <View className="app-item">
          <View className="item-icon"></View>
          <View className="item-text">xxx</View>
        </View>
        <View className="app-item">
          <View className="item-icon"></View>
          <View className="item-text">xxx</View>
        </View>
      </View>
    </View>
  );
}
