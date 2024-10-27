import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.bodyParent}>
      <View style={[styles.body, styles.bodyPosition]}>
        <View style={styles.bodyChild} />
        <Text style={[styles.inculcate, styles.timeTypo]}>
          <Text style={styles.in}>in.</Text>
          <Text style={styles.culcate}>{`culcate
`}</Text>
        </Text>
        <Text style={[styles.poweredByMeta, styles.metaTypo]}>
          Powered By Meta 3.1
        </Text>
        <Text style={[styles.agnikMisra, styles.agnikMisraTypo]}>
          Agnik Misra
        </Text>
        <Text style={[styles.someTopicsTo, styles.metaTypo]}>
          Some topics to get you started
        </Text>
        <View style={styles.useMeta31Parent}>
          <Text style={[styles.useMeta31, styles.metaTypo]}>Use Meta 3.1</Text>
          <View style={[styles.ellipseWrapper, styles.statusBarFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          </View>
        </View>
        <View style={styles.screenshot20240123At2125Parent}>
          <Image
            style={styles.screenshot20240123At2125}
            resizeMode="cover"
            source={require("../assets/screenshot-20240123-at-2125-1.png")}
          />
          <Text style={[styles.whoWereThe, styles.textTypo]}>
            Who were the unsung heroes of India’s independence?
          </Text>
        </View>
        <View style={[styles.parent, styles.groupShadowBox]}>
          <Text style={[styles.text, styles.textTypo]}>🤔</Text>
          <Text style={[styles.exploreIndiasForgotten, styles.textTypo]}>
            Explore India’s forgotten freedom fighters
          </Text>
        </View>
        <View style={[styles.group, styles.groupShadowBox]}>
          <Text style={[styles.text, styles.textTypo]}>🎓</Text>
          <View style={styles.screenshot20240123At21251} />
          <Text style={[styles.ancientIndianScholars, styles.textTypo]}>
            Ancient Indian scholars and their contributions
          </Text>
        </View>
        <View style={styles.askMeAnythingParent}>
          <Text style={[styles.askMeAnything, styles.textTypo]}>
            Ask me anything...
          </Text>
          <Image
            style={styles.unionIcon}
            resizeMode="cover"
            source={require("../assets/union.png")}
          />
          <Image
            style={styles.unionIcon1}
            resizeMode="cover"
            source={require("../assets/union1.png")}
          />
        </View>
        <View style={styles.bodyItem} />
        <Image
          style={styles.bodyInner}
          resizeMode="cover"
          source={require("../assets/group-3.png")}
        />
        <Image
          style={styles.unionIcon2}
          resizeMode="cover"
          source={require("../assets/union2.png")}
        />
        <Image
          style={styles.siriLogoSmallBackgroundRem}
          resizeMode="cover"
          source={require("../assets/sirilogo-small-background-removed-1.png")}
        />
        <Image
          style={styles.img13874Icon}
          resizeMode="cover"
          source={require("../assets/img-1387-41.png")}
        />
        <View style={[styles.lineView, styles.lineViewPosition]} />
        <Image
          style={[styles.lineIcon, styles.lineIconPosition]}
          resizeMode="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.bodyChild1, styles.lineIconPosition]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <View style={[styles.bodyChild2, styles.lineViewPosition]} />
      </View>
      <View style={[styles.statusBar, styles.statusBarFlexBox]}>
        <Text style={[styles.time, styles.timeTypo]}>
          <Text style={styles.text2}>9:4</Text>1
        </Text>
        <View style={styles.statusBarChild} />
        <View style={styles.rightStuff}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              resizeMode="cover"
              source={require("../assets/cap.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <View style={styles.homeBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  metaTypo: {
    fontFamily: FontFamily.interRegular,
    color: Color.textDark,
    textAlign: "center",
  },
  agnikMisraTypo: {
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  statusBarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
  },
  groupShadowBox: {
    paddingHorizontal: Padding.p_smi_5,
    width: 320,
    marginLeft: -160,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGoldenrod,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  lineViewPosition: {
    borderTopWidth: 1,
    left: 11,
    borderColor: Color.black,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  lineIconPosition: {
    maxHeight: "100%",
    left: 11,
    position: "absolute",
  },
  batteryPosition: {
    right: 0,
    position: "absolute",
  },
  bodyChild: {
    top: 14,
    left: 106,
    borderRadius: 17,
    width: 136,
    height: 33,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  in: {
    color: Color.colorGoldenrod,
  },
  culcate: {
    color: Color.textDark,
  },
  inculcate: {
    top: 165,
    left: 85,
    fontSize: 40,
    position: "absolute",
  },
  poweredByMeta: {
    top: 223,
    left: 96,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  agnikMisra: {
    top: 19,
    left: 139,
    color: Color.textDark,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  someTopicsTo: {
    top: 390,
    left: 78,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  useMeta31: {
    letterSpacing: 0.1,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
  },
  frameChild: {
    height: 13,
    width: 13,
  },
  ellipseWrapper: {
    borderWidth: 0.8,
    padding: Padding.p_10xs,
    width: 37,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGoldenrod,
    borderStyle: "solid",
    flexDirection: "row",
  },
  useMeta31Parent: {
    marginLeft: -84.5,
    top: 313,
    paddingVertical: 10,
    gap: 22,
    paddingHorizontal: Padding.p_xs_5,
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGoldenrod,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  screenshot20240123At2125: {
    width: 26,
    height: 27,
  },
  whoWereThe: {
    width: 272,
    fontSize: FontSize.size_sm,
    color: Color.textDark,
  },
  screenshot20240123At2125Parent: {
    top: 428,
    gap: 7,
    paddingVertical: Padding.p_xs,
    width: 320,
    marginLeft: -160,
    paddingHorizontal: Padding.p_xs_5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGoldenrod,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    fontSize: FontSize.size_xl,
    color: Color.black,
  },
  exploreIndiasForgotten: {
    width: 274,
    fontSize: FontSize.size_sm,
    color: Color.textDark,
  },
  parent: {
    top: 504,
    paddingVertical: 11,
    gap: 5,
  },
  screenshot20240123At21251: {
    height: 21,
    marginLeft: -6,
    width: 23,
  },
  ancientIndianScholars: {
    marginLeft: -6,
    fontSize: FontSize.size_sm,
    color: Color.textDark,
    flex: 1,
  },
  group: {
    top: 560,
    paddingVertical: Padding.p_xs,
  },
  askMeAnything: {
    color: Color.textgrey,
    fontSize: FontSize.size_sm,
    flex: 1,
  },
  unionIcon: {
    height: 17,
    width: 18,
  },
  unionIcon1: {
    height: 19,
    width: 13,
  },
  askMeAnythingParent: {
    marginLeft: -114,
    top: 665,
    borderRadius: 30,
    backgroundColor: "#fafafa",
    borderColor: Color.colorWhite,
    width: 279,
    paddingLeft: Padding.p_smi_5,
    paddingTop: Padding.p_smi,
    paddingRight: 18,
    paddingBottom: Padding.p_smi,
    gap: 21,
    justifyContent: "center",
    borderWidth: 1,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
  },
  bodyItem: {
    top: 649,
    height: 1,
    backgroundColor: Color.colorGainsboro,
    width: 360,
    left: 0,
    position: "absolute",
  },
  bodyInner: {
    top: 671,
    left: 15,
    height: 37,
    width: 37,
    position: "absolute",
  },
  unionIcon2: {
    height: 4,
    width: 18,
  },
  siriLogoSmallBackgroundRem: {
    top: 112,
    left: 142,
    width: 77,
    height: 41,
    position: "absolute",
  },
  img13874Icon: {
    top: 15,
    left: 110,
    borderRadius: Border.br_71xl,
    width: 25,
    height: 25,
    position: "absolute",
  },
  lineView: {
    top: 23,
    width: 23,
  },
  lineIcon: {
    top: 28,
    width: 19,
  },
  bodyChild1: {
    top: 33,
    width: 16,
  },
  bodyChild2: {
    top: 38,
    width: 14,
  },
  body: {
    top: 40,
    height: 726,
  },
  text2: {
    letterSpacing: 0,
  },
  time: {
    fontSize: FontSize.size_base,
    width: 67,
    color: Color.black,
  },
  statusBarChild: {
    borderRadius: 40,
    width: 105,
    height: 31,
    backgroundColor: Color.black,
  },
  border: {
    right: 2,
    borderRadius: 3,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    borderColor: Color.black,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    height: 7,
    backgroundColor: Color.black,
    width: 18,
    position: "absolute",
  },
  battery: {
    width: 24,
    height: 11,
    top: 0,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  rightStuff: {
    height: 11,
    width: 67,
  },
  statusBar: {
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingTop: 9,
    paddingBottom: Padding.p_10xs,
    top: 0,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeBar: {
    top: 763,
    left: 125,
    width: 110,
    height: 6,
    backgroundColor: Color.black,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  bodyParent: {
    borderRadius: Border.br_5xl,
    width: "100%",
    height: 779,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Frame;
