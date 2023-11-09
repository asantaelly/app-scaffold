import React, { LegacyRef } from "react";
import {
  Text,
  TextProps,
  TextStyle,
  StyleProp,
  StyleSheet,
} from "react-native";

import { font } from "themes/fonts/style";
import { Colors } from "types/themes/Colors";
import useColors from "hooks/themes/useColors";

interface Props extends TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<Props> = React.forwardRef(
  (props: Props, ref: LegacyRef<Text> | undefined) => {
    const { children, style = {} } = props;

    const colors = useColors();
    const styles = Styles(colors);

    return (
      <Text ref={ref} style={[font.base_regular, styles.default, style]}>
        {children}
      </Text>
    );
  }
);

const Styles = (colors: Colors) =>
  StyleSheet.create({
    default: {
      color: colors.text.secondary,
    },
  });

export default AppText;
