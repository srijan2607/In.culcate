import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <Image
        style={styles.loginChild}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <Image
        style={styles.loginItem}
        contentFit="cover"
        source={require("../assets/ellipse-47.png")}
      />
      <View style={[styles.loginInner, styles.loginLayout]} />
      <View style={[styles.loginButton, styles.loginLayout]} />
      <View style={[styles.rectangleView, styles.loginChildShadowBox]} />
      <View style={[styles.loginChild1, styles.loginChildShadowBox]} />
      <View style={[styles.loginChild2, styles.loginChildShadowBox]} />
      <View style={[styles.loginChild3, styles.loginLayout]} />
      <Text style={[styles.enterEmailId, styles.loginFlexBox]}>
        Enter email i’d
      </Text>
      <Text style={[styles.enterPassword, styles.loginFlexBox]}>
        Enter password
      </Text>
      <Text style={[styles.login1, styles.login1Clr]}>{`Login `}</Text>
      <Text style={[styles.loginAccount, styles.accountTypo]}>
        Login Account
      </Text>
      <Text style={[styles.welcomeBack, styles.welcomeBackTypo]}>
        Welcome back !
      </Text>
      <Text style={[styles.forgetPassword, styles.welcomeBackTypo]}>
        Forget Password ?
      </Text>
      <Image
        style={styles.googleLogoIcon}
        contentFit="cover"
        source={require("../assets/google-logo.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.loginChild4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Text style={[styles.orSignUp, styles.loginFlexBox]}>
        Or sign up with
      </Text>
      <Text style={[styles.notRegisterYetContainer, styles.welcomeBackTypo]}>
        <Text style={styles.notRegisterYet}>{`Not register yet ? `}</Text>
        <Text style={[styles.createAccount, styles.accountTypo]}>
          Create Account
        </Text>
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.indiaInIcon}
        contentFit="cover"
        source={require("../assets/india-in.png")}
      />
      <View style={[styles.rectangle37Copy14Parent, styles.rectangle37Layout]}>
        <View style={[styles.rectangle37Copy14, styles.rectangle37Layout]} />
        <Image
          style={styles.caretdownIcon}
          contentFit="cover"
          source={require("../assets/caretdown.png")}
        />
      </View>
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <View style={styles.inculcate}>
        <Text style={styles.inculcate1}>
          <Text style={styles.i}>i</Text>
          <Text style={styles.i}>n.</Text>
          <Text style={styles.culcate}>culcate</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 48,
    width: 328,
    left: 26,
    position: "absolute",
  },
  loginChildShadowBox: {
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 580,
    height: 48,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  loginFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  login1Clr: {
    color: Color.colorBlack,
    fontFamily: FontFamily.outfitRegular,
  },
  accountTypo: {
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
  },
  welcomeBackTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    width: 105,
    top: 540,
    maxHeight: "100%",
    position: "absolute",
  },
  rectangle37Layout: {
    height: 11,
    width: 11,
    position: "absolute",
  },
  loginChild: {
    top: -210,
    left: -37,
    width: 445,
    height: 406,
    position: "absolute",
  },
  loginItem: {
    top: -175,
    left: 207,
    width: 342,
    height: 342,
    position: "absolute",
  },
  loginInner: {
    top: 294,
    borderWidth: 0.6,
    borderColor: Color.colorDimgray_200,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 48,
    width: 328,
    left: 26,
  },
  loginButton: {
    top: 447,
    backgroundColor: Color.colorGoldenrod,
    height: 48,
    width: 328,
    left: 26,
    borderRadius: Border.br_5xl,
  },
  rectangleView: {
    left: 54,
    width: 76,
    borderRadius: Border.br_5xl,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 580,
  },
  loginChild1: {
    left: 149,
    width: 75,
    borderRadius: Border.br_5xl,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 580,
  },
  loginChild2: {
    left: 252,
    borderRadius: 20,
    width: 67,
  },
  loginChild3: {
    top: 353,
    borderWidth: 0.6,
    borderColor: Color.colorDimgray_200,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 48,
    width: 328,
    left: 26,
  },
  enterEmailId: {
    top: 308,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    left: 43,
    textAlign: "left",
    fontFamily: FontFamily.outfitRegular,
  },
  enterPassword: {
    top: 367,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    left: 43,
    textAlign: "left",
    fontFamily: FontFamily.outfitRegular,
  },
  login1: {
    top: 459,
    left: 167,
    fontSize: 18,
    textAlign: "left",
    position: "absolute",
  },
  loginAccount: {
    top: 56,
    fontSize: 24,
    left: 23,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  welcomeBack: {
    top: 91,
    left: 23,
    color: Color.colorBlack,
    fontFamily: FontFamily.outfitRegular,
  },
  forgetPassword: {
    top: 405,
    left: 247,
    color: Color.colorBlack,
    fontFamily: FontFamily.outfitRegular,
  },
  googleLogoIcon: {
    top: 591,
    left: 79,
    width: 27,
    height: 27,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    height: "2.84%",
    width: "6.67%",
    top: "70.5%",
    right: "48.97%",
    bottom: "26.66%",
    left: "44.36%",
  },
  vectorIcon: {
    left: 45,
  },
  loginChild4: {
    left: 238,
  },
  orSignUp: {
    top: 530,
    left: 154,
    fontSize: 12,
    color: "#757171",
    fontFamily: FontFamily.outfitRegular,
  },
  notRegisterYet: {
    color: "#636363",
    fontFamily: FontFamily.outfitRegular,
  },
  createAccount: {
    color: "#0c1f22",
  },
  notRegisterYetContainer: {
    top: 681,
    left: 91,
  },
  vectorIcon1: {
    height: "3.08%",
    width: "5.64%",
    top: "70.02%",
    right: "24.1%",
    bottom: "26.9%",
    left: "70.26%",
  },
  indiaInIcon: {
    top: 61,
    left: 332,
    borderRadius: 60,
    width: 24,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  rectangle37Copy14: {
    top: 0,
    left: 0,
  },
  caretdownIcon: {
    top: 2,
    left: 1,
    width: 10,
    height: 6,
    position: "absolute",
  },
  rectangle37Copy14Parent: {
    top: 67,
    left: 361,
    opacity: 0.65,
  },
  userIcon: {
    top: 62,
    left: 182,
    width: 22,
    height: 22,
    position: "absolute",
  },
  i: {
    color: Color.colorGoldenrod,
  },
  culcate: {
    color: "#1e242a",
  },
  inculcate1: {
    top: "0%",
    left: "0%",
    fontSize: 48,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  inculcate: {
    top: 167,
    left: 76,
    width: 227,
    height: 58,
    position: "absolute",
  },
  login: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xl,
  },
});

export default Login;
