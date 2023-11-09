import React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  ButtonProps,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import AppText from "../text/AppText";
import { font } from "themes/fonts/style";
import { Colors } from "schemas/themes/Colors";
import useColors from "hooks/themes/useColors";

interface Props extends ButtonProps {
  processing?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const AppButton: React.FC<Props> = (props: Props) => {
  const { children, style = {}, processing = false } = props;
  const colors = useColors();
  const styles = Styles(colors, processing);

  return (
    <TouchableOpacity {...props} style={[style, styles.buttonStyles]}>
      <AppText style={[styles.buttonTextStyles, font.medium_bold]}>
        {children}
      </AppText>
      {processing && <ActivityIndicator />}
    </TouchableOpacity>
  );
};

const Styles = (colors: Colors, processing: boolean) =>
  StyleSheet.create({
    buttonStyles: {
      gap: 10,
      padding: 12,
      borderRadius: 8,
      marginVertical: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      opacity: processing ? 0.8 : 1,
    },
    buttonTextStyles: {
      color: colors.text.primary,
    },
  });

export default AppButton;
