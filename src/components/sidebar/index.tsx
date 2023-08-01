import { View, Text } from "@tarojs/components";
import { useLoad, useDidShow } from "@tarojs/taro";
import "./index.less";
import { useEffect, useState } from "react";
export default function Index(props) {
  // const selectReducer = (state, action) => {
  //   switch (action.type) {
  //     case "select":
  //       return {
  //         ...state,
  //         select: true,
  //       };
  //   }
  // };
  const [menuList, setMenuList] = useState([]);
  const onSelect = (item: any) => {
    menuList.forEach((e: any) => (e.select = false));
    item.select = true;
    setMenuList([...menuList]);
  };
  useEffect(() => {
    setMenuList(props.list);
  });
  return (
    <View className="sidebar">
      {menuList?.map((item: any) => (
        <View
          className={`menu-item ${item.select ? "select" : ""}`}
          key={item.id}
          onClick={onSelect?.bind(this, item)}
        >
          <Text>{item.name}</Text>
        </View>
      ))}
    </View>
  );
}
