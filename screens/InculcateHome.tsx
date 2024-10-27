import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const InculcateHome = () => {
  return (
    <View style={styles.inculcateHome}>
      <View style={[styles.parent, styles.parentLayout]}>
        <View style={[styles.view, styles.viewPosition]} />
        <Text style={[styles.ingage, styles.ingageTypo]}>
          <Text style={styles.in}>In.</Text>
          <Text style={styles.gage}>Gage</Text>
        </Text>
        <View style={[styles.view1, styles.viewPosition]} />
        <View style={[styles.view2, styles.viewPosition]} />
        <View style={[styles.view, styles.viewPosition]} />
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-4435.png")}
        />
        <View style={[styles.view, styles.viewPosition]} />
        <View style={[styles.view, styles.viewPosition]} />
        <Image
          style={[styles.icon, styles.viewPosition1]}
          resizeMode="cover"
          source={require("../assets/5314767-8.png")}
        />
      </View>
      <View style={[styles.topBar, styles.icon1Layout]}>
        <View style={[styles.background, styles.topBarLayout]} />
        <Image
          style={[styles.icon1, styles.icon1Layout]}
          resizeMode="cover"
          source={require("../assets/5314767-1.png")}
        />
        <Image
          style={styles.img13874Icon}
          resizeMode="cover"
          source={require("../assets/img-1387-4.png")}
        />
        <Text style={[styles.inculcate, styles.inculcateTypo]}>
          <Text style={styles.in}>i</Text>
          <Text style={styles.in}>n.</Text>
          <Text style={styles.gage}>{`culcate
`}</Text>
        </Text>
        <Text style={[styles.welcomeAgnik, styles.inculcateTypo]}>
          <Text style={styles.welcome}>{`Welcome `}</Text>
          <Text style={styles.in}>Agnik!</Text>
        </Text>
        <Text style={[styles.letsGetInculcatedContainer, styles.ingageTypo]}>
          <Text style={styles.welcome}>{`Lets Get `}</Text>
          <Text style={styles.in}>in.</Text>
          <Text style={styles.welcome}>culcated!</Text>
        </Text>
      </View>
      <View style={styles.barsHomeIndicator}>
        <View style={styles.background1} />
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.discoverParent, styles.discoverParentPosition]}>
        <Text style={[styles.discover, styles.ingageTypo]}>
          <Text style={styles.in}>D</Text>
          <Text style={styles.welcome}>iscover</Text>
        </Text>
        <Image
          style={[styles.icon, styles.viewPosition1]}
          resizeMode="cover"
          source={require("../assets/5314767-8.png")}
        />
      </View>
      <Image
        style={[
          styles.images7RemovebgPreview1Icon,
          styles.discoverParentPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/images--7-removebgpreview-1.png")}
      />
      <View style={[styles.inculcateAiParent, styles.groupShadowBox]}>
        <Text style={[styles.inculcateAi, styles.ingageTypo]}>
          <Text style={styles.in}>in.</Text>
          <Text style={styles.welcome}>culcate</Text>
          <Text style={styles.in}> Ai</Text>
        </Text>
        <View style={[styles.view1, styles.viewPosition]} />
        <View style={[styles.view2, styles.viewPosition]} />
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/rectangle-4429.png")}
        />
        <Image
          style={styles.icon3}
          resizeMode="cover"
          source={require("../assets/5314767-8.png")}
        />
      </View>
      <View style={[styles.group, styles.groupPosition]}>
        <Image
          style={[styles.icon, styles.viewPosition1]}
          resizeMode="cover"
          source={require("../assets/5314767-8.png")}
        />
        <Text style={[styles.sochbox, styles.ingageTypo]}>
          <Text style={styles.in}>Soch.</Text>
          <Text style={styles.welcome}>Box</Text>
        </Text>
        <View style={[styles.view2, styles.viewPosition]} />
      </View>
      <Image
        style={[styles.stickyNotes1Icon, styles.groupPosition]}
        resizeMode="cover"
        source={require("../assets/stickynotes-1.png")}
      />
      <View style={styles.tabBar}>
        <Image
          style={styles.tabBarIcon}
          resizeMode="cover"
          source={require("../assets/tabbar.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 368,
    left: 0,
  },
  viewPosition: {
    opacity: 0.05,
    top: 0,
    height: 118,
    position: "absolute",
  },
  ingageTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  viewPosition1: {
    left: -15,
    width: 383,
  },
  icon1Layout: {
    height: 268,
    position: "absolute",
  },
  topBarLayout: {
    width: 414,
    shadowOpacity: 1,
    left: 0,
  },
  inculcateTypo: {
    fontSize: FontSize.size_15xl,
    textAlign: "center",
    position: "absolute",
  },
  discoverParentPosition: {
    top: 281,
    position: "absolute",
  },
  groupShadowBox: {
    borderBottomLeftRadius: Border.br_mini,
    left: 46,
    borderTopLeftRadius: Border.br_mini,
    height: 118,
    width: 368,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  groupPosition: {
    top: 416,
    position: "absolute",
  },
  view: {
    width: 383,
    left: -15,
  },
  in: {
    color: Color.colorGoldenrod,
  },
  gage: {
    color: Color.colorGray_100,
  },
  ingage: {
    left: 41,
    fontSize: FontSize.size_11xl,
    top: 41,
    textAlign: "center",
  },
  view1: {
    width: 368,
    left: 0,
  },
  view2: {
    left: -8,
    width: 376,
  },
  frameChild: {
    left: 232,
    width: 136,
    height: 115,
    top: 0,
    position: "absolute",
  },
  icon: {
    width: 383,
    top: 0,
    height: 118,
    position: "absolute",
  },
  parent: {
    top: 550,
    backgroundColor: "rgba(180, 240, 255, 0.68)",
    height: 118,
    borderBottomRightRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowOpacity: 1,
    width: 368,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    position: "absolute",
  },
  background: {
    shadowColor: "#bdc5cd",
    shadowRadius: 0,
    elevation: 0,
    backgroundColor: "#fff7d5",
    height: 281,
    top: 0,
    position: "absolute",
  },
  icon1: {
    left: -109,
    width: 622,
    top: 0,
  },
  img13874Icon: {
    top: 98,
    left: 169,
    borderRadius: 90,
    width: 76,
    height: 72,
    position: "absolute",
  },
  inculcate: {
    top: 55,
    left: 136,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_15xl,
  },
  welcome: {
    color: Color.colorBlack,
  },
  welcomeAgnik: {
    top: 174,
    left: 71,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  letsGetInculcatedContainer: {
    top: 215,
    left: 127,
    fontSize: 16,
  },
  topBar: {
    marginTop: -448,
    top: "50%",
    borderBottomRightRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    width: 414,
    shadowOpacity: 1,
    left: 0,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 268,
    overflow: "hidden",
  },
  background1: {
    height: "700%",
    width: "297.84%",
    top: "-360%",
    right: "-99.28%",
    bottom: "-240%",
    left: "-98.56%",
    position: "absolute",
  },
  homeIndicator: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 100,
    backgroundColor: "#101010",
    position: "absolute",
    width: "100%",
  },
  barsHomeIndicator: {
    top: 878,
    left: 137,
    width: 139,
    height: 5,
    position: "absolute",
    overflow: "hidden",
  },
  discover: {
    left: 31,
    fontSize: FontSize.size_11xl,
    top: 41,
    textAlign: "center",
  },
  discoverParent: {
    backgroundColor: "rgba(255, 156, 158, 0.34)",
    height: 118,
    width: 368,
    left: 0,
    borderBottomRightRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  images7RemovebgPreview1Icon: {
    left: 202,
    width: 174,
    height: 122,
  },
  inculcateAi: {
    left: 175,
    fontSize: FontSize.size_11xl,
    top: 41,
    textAlign: "center",
  },
  frameItem: {
    top: 10,
    left: 33,
    width: 104,
    height: 88,
    position: "absolute",
  },
  icon3: {
    width: 383,
    top: 0,
    height: 118,
    left: 0,
    position: "absolute",
  },
  inculcateAiParent: {
    top: 684,
    backgroundColor: "rgba(255, 226, 189, 0.64)",
    position: "absolute",
  },
  sochbox: {
    left: 195,
    fontSize: FontSize.size_11xl,
    top: 41,
    textAlign: "center",
  },
  group: {
    backgroundColor: "#e7ffd5",
    borderBottomLeftRadius: Border.br_mini,
    left: 46,
    borderTopLeftRadius: Border.br_mini,
    height: 118,
    width: 368,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  stickyNotes1Icon: {
    left: 79,
    width: 138,
    height: 107,
  },
  tabBarIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    height: 89,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    overflow: "hidden",
    width: "100%",
  },
  tabBar: {
    marginLeft: -206,
    bottom: 0,
    left: "50%",
    width: 413,
    height: 81,
    position: "absolute",
  },
  inculcateHome: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default InculcateHome;
