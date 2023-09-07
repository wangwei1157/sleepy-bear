import { View, Text, Image } from "@tarojs/components";
import { useLoad, useDidShow } from "@tarojs/taro";
import { Tabs, Popup } from "@nutui/nutui-react-taro";
import "./index.less";
import { useRef, useState } from "react";
// import Sidebar from "@/components/sidebar";
export default function Index() {
  useLoad(() => {
    setMenuList(
      list.map((e, i) => ({
        select: i == 0,
        id: i,
        src: "//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg",
        name: "大闸蟹",
        num: 0,
      }))
    );
  });
  const list = Array.from(new Array(10));
  const [active, setActive] = useState("0");
  const [menuList, setMenuList]: [any, Function] = useState([]);
  const [selectList, setSelectList]: [any, Function] = useState([]);
  const [selectNum, setSelectNum]: [any, Function] = useState(0);
  const [showBottom, setShowBottom] = useState(false);
  const box = useRef(null) as any;

  const onChange = (val: string) => {
    setActive(val);
  };
  const createBall = (left, top) => {
    const ball = document.createElement("div");
    ball.style.position = "absolute";
    ball.style.left = left - 10 + "px";
    ball.style.top = top - 10 + "px";
    ball.style.width = "20px";
    ball.style.height = "20px";
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "red";
    ball.style.transition =
      "left .6s linear, top .6s cubic-bezier(0.5,-0.5,1,1)";

    document.body.appendChild(ball);

    // 使用 requestAnimationFrame 替代 setTimeout
    requestAnimationFrame(() => {
      ball.style.left =
        box.current.offsetLeft + box.current.offsetWidth / 2 + "px";
      ball.style.top = box.current.offsetTop + "px";
    });

    ball.ontransitionend = function () {
      ball.remove();
    };
  };

  const handleAddToCart = (event, item) => {
    const { clientX, clientY } = event;
    createBall(clientX, clientY);
    const arr = menuList.map((j) => {
      if (j.id === item.id) {
        return { ...j, num: j.num + 1 };
      } else {
        return j;
      }
    });
    setSelectNum(selectNum + 1);
    setMenuList(arr);
    if (!selectList.find((e) => e === item.id)) {
      setSelectList([...selectList, item.id]);
    }
  };
  const handleDelete = (item) => {
    selectNum && setSelectNum(selectNum - 1);
    if (!selectList.find((e) => e === item.id)) {
      setSelectList([...selectList, item.id]);
    }
    const arr = menuList.map((j) => {
      if (j.id === item.id) {
        if (j.num == 0) {
          return j;
        } else {
          if (j.num - 1 == 0) {
            setSelectList(selectList.filter((e) => e !== item.id));
          }
          return { ...j, num: j.num - 1 };
        }
      } else {
        return j;
      }
    });
    setMenuList(arr);
  };

  useDidShow(() => {
    console.log(menuList);
  });
  return (
    <View className="bear-dish">
      <View className="dish-top">
        <Tabs
          className="dish-tabs"
          direction="vertical"
          value={active}
          onChange={onChange.bind(this)}
        >
          {menuList.map((item) => (
            <Tabs.TabPane key={item.id} title={`${item.name}`}></Tabs.TabPane>
          ))}
        </Tabs>
        <View className="dish-list">
          {menuList?.map((item: any) => (
            <View className="dish-card" key={item.id}>
              <Image src={item.src}></Image>
              <View className="card-right">
                <View className="card-content">
                  <View className="card-name">{item.name}</View>
                  <View className="month-num">
                    月售50
                    {/* <View className="num-text">月售</View>
                  <View className="num-text">{item.id}</View> */}
                  </View>
                </View>
                <View className="card-btn">
                  {item.num > 0 ? (
                    <>
                      <View
                        className="btn del"
                        onClick={handleDelete.bind(this, item)}
                      ></View>
                      <View className="num">{item.num}</View>
                    </>
                  ) : (
                    <></>
                  )}
                  <View
                    className="btn add"
                    onClick={(e) => handleAddToCart(e, item)}
                  ></View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View className="dish-bottom">
        <View
          className="dish-bottom-left"
          onClick={() => {
            setShowBottom(true);
          }}
        >
          <View className="shop-car" ref={box}></View>
          <View className="num">总计{selectNum}</View>
        </View>
        <View className="dish-bottom-right">去结算</View>
      </View>
      <Popup
        visible={showBottom}
        style={{ height: "50%" }}
        position="bottom"
        onClose={() => {
          setShowBottom(false);
        }}
      >
        <View className="dish-popup dish-list">
          {menuList
            .filter((e) => selectList.includes(e.id))
            ?.map((item: any) => (
              <View className="dish-card" key={item.id}>
                <Image src={item.src}></Image>
                <View className="card-right">
                  <View className="card-content">
                    <View className="card-name">{item.name}</View>
                    <View className="month-num">月售50</View>
                  </View>
                  <View className="card-btn">
                    {item.num > 0 ? (
                      <>
                        <View
                          className="btn del"
                          onClick={handleDelete.bind(this, item)}
                        ></View>
                        <View className="num">{item.num}</View>
                      </>
                    ) : (
                      <></>
                    )}
                    <View
                      className="btn add"
                      onClick={(e) => handleAddToCart(e, item)}
                    ></View>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </Popup>
    </View>
  );
}
