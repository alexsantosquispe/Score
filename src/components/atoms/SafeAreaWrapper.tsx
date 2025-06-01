import { ReactNode } from "react";
import { Platform, SafeAreaView as NativeSafeAreaView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../styles";

interface SafeAreaWrapperProps {
  children: ReactNode;
}

export default function SafeAreaWrapper({ children }: SafeAreaWrapperProps) {
  if (Platform.OS === "ios")
    return (
      <NativeSafeAreaView style={globalStyles.mainContainer}>
        {children}
      </NativeSafeAreaView>
    );

  return (
    <SafeAreaView style={globalStyles.mainContainer}>{children}</SafeAreaView>
  );
}
