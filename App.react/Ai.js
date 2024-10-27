import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Login = () => {
  return (
    <View style={styles.login}>
      <Image
        style={[styles.loginChild, styles.loginPosition]}
        resizeMode="cover"
        source="Ellipse 48.png"
      />
      <Image
        style={[styles.loginItem, styles.loginPosition]}
        resizeMode="cover"
        source="Ellipse 47.png"
      />
      <View style={[styles.loginInner, styles.loginLayout]} />
      <View style={[styles.rectangleView, styles.loginLayout]} />
      <View style={[styles.loginChild1, styles.loginChildShadowBox]} />
      <View style={[styles.loginChild2, styles.loginChildShadowBox]} />
      <View style={[styles.loginChild3, styles.timeLightLayout]} />
      <View style={[styles.loginChild4, styles.loginLayout]} />
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
        resizeMode="cover"
        source="google logo.png"
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source="Group.png"
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source="Vector 2.png"
      />
      <Image
        style={[styles.loginChild5, styles.vectorIconLayout]}
        resizeMode="cover"
        source="Vector 3.png"
      />
      <Text style={[styles.orSignUp, styles.loginFlexBox]}>
        Or sign up with
      </Text>
      <View style={[styles.statusBar, styles.notchPosition1]}>
        <View style={[styles.notch, styles.notchPosition]} />
        <View style={styles.statusIcons}>
          <Image
            style={styles.networkSignalLight}
            resizeMode="cover"
            source="Network Signal / Light.png"
          />
          <Image
            style={styles.wifiSignalLight}
            resizeMode="cover"
            source="WiFi Signal / Light.png"
          />
          <Image
            style={styles.batteryLight}
            resizeMode="cover"
            source="Battery / Light.png"
          />
        </View>
        <View style={[styles.indicator, styles.indicatorLayout]} />
        <Image
          style={[styles.timeLight, styles.timeLightLayout]}
          resizeMode="cover"
          source="Time / Light.png"
        />
      </View>
      <Text style={[styles.notRegisterYetContainer, styles.welcomeBackTypo]}>
        <Text style={styles.notRegisterYet}>{`Not register yet ? `}</Text>
        <Text style={[styles.createAccount, styles.accountTypo]}>
          Create Account
        </Text>
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source="Vector.png"
      />
      <Image
        style={styles.indiaInIcon}
        resizeMode="cover"
        source="India (IN).png"
      />
      <View style={[styles.rectangle37Copy14Parent, styles.rectangle37Layout]}>
        <View style={[styles.rectangle37Copy14, styles.rectangle37Layout]} />
        <Image
          style={[styles.caretdownIcon, styles.indicatorLayout]}
          resizeMode="cover"
          source="caretdown.png"
        />
      </View>
      <Image style={styles.userIcon} resizeMode="cover" source="User.png" />
      <Text style={styles.inculcate}>
        <Text style={styles.i}>i</Text>
        <Text style={styles.i}>n.</Text>
        <Text style={styles.culcate}>culcate</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPosition: {
    opacity: 0.2,
    position: "absolute",
  },
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
    backgroundColor: "#fff",
  },
  timeLightLayout: {
    borderRadius: 20,
    position: "absolute",
  },
  loginFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  login1Clr: {
    color: "#000",
    fontFamily: "Outfit-Regular",
  },
  accountTypo: {
    fontFamily: "Outfit-SemiBold",
    fontWeight: "600",
  },
  welcomeBackTypo: {
    fontSize: 13,
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
  notchPosition1: {
    right: 0,
    position: "absolute",
  },
  notchPosition: {
    left: 0,
    top: 0,
  },
  indicatorLayout: {
    height: 6,
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
  },
  loginItem: {
    top: -175,
    left: 207,
    width: 342,
    height: 342,
  },
  loginInner: {
    top: 294,
    borderWidth: 0.6,
    borderColor: "#6c6a6a",
    borderStyle: "solid",
    borderRadius: 8,
    width: 328,
    left: 26,
  },
  rectangleView: {
    top: 447,
    backgroundColor: "#ffc34a",
    width: 328,
    left: 26,
    borderRadius: 24,
  },
  loginChild1: {
    left: 54,
    width: 76,
    position: "absolute",
    borderRadius: 24,
    shadowOpacity: 1,
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
    left: 149,
    width: 75,
    position: "absolute",
    borderRadius: 24,
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 580,
  },
  loginChild3: {
    left: 252,
    width: 67,
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
    backgroundColor: "#fff",
  },
  loginChild4: {
    top: 353,
    borderWidth: 0.6,
    borderColor: "#6c6a6a",
    borderStyle: "solid",
    borderRadius: 8,
    width: 328,
    left: 26,
  },
  enterEmailId: {
    top: 308,
    color: "#6d6a6a",
    fontSize: 15,
    left: 43,
    textAlign: "left",
    fontFamily: "Outfit-Regular",
  },
  enterPassword: {
    top: 367,
    color: "#6d6a6a",
    fontSize: 15,
    left: 43,
    textAlign: "left",
    fontFamily: "Outfit-Regular",
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
    color: "#000",
    textAlign: "left",
    position: "absolute",
  },
  welcomeBack: {
    top: 91,
    left: 23,
    color: "#000",
    fontFamily: "Outfit-Regular",
  },
  forgetPassword: {
    top: 405,
    left: 247,
    color: "#000",
    fontFamily: "Outfit-Regular",
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
  loginChild5: {
    left: 238,
  },
  orSignUp: {
    top: 530,
    left: 154,
    fontSize: 12,
    color: "#757171",
    fontFamily: "Outfit-Regular",
  },
  notch: {
    height: 30,
    right: 0,
    position: "absolute",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
    height: 14,
  },
  batteryLight: {
    width: 25,
    height: 14,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    position: "absolute",
  },
  indicator: {
    top: 8,
    right: 71,
    width: 6,
  },
  timeLight: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    overflow: "hidden",
  },
  statusBar: {
    left: -11,
    height: 44,
    top: 0,
    right: 0,
    overflow: "hidden",
  },
  notRegisterYet: {
    color: "#636363",
    fontFamily: "Outfit-Regular",
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
    left: 0,
    top: 0,
  },
  caretdownIcon: {
    top: 2,
    left: 1,
    width: 10,
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
    color: "#ffc34a",
  },
  culcate: {
    color: "#1e242a",
  },
  inculcate: {
    top: 167,
    left: 76,
    fontSize: 48,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  login: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderRadius: 24,
  },
});

export default Login;
