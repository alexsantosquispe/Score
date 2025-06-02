import {
  SafeAreaView as NativeSafeAreaView,
  Platform,
  StyleProp,
  ViewStyle
} from "react-native";

import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../styles";

interface SafeAreaWrapperProps {
  children: ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}

export default function SafeAreaWrapper({
  children,
  customStyles = {}
}: SafeAreaWrapperProps) {
  if (Platform.OS === "ios")
    return (
      <NativeSafeAreaView style={[globalStyles.mainContainer, customStyles]}>
        {children}
      </NativeSafeAreaView>
    );

  return (
    <SafeAreaView style={[globalStyles.mainContainer, customStyles]}>
      {children}
    </SafeAreaView>
  );
}
