import { View, Text, StyleSheet, Pressable, TouchableNativeFeedback, TouchableHighlight } from "react-native";
import { colors, fontSize, spacing } from "../utils/variables";
import { useState } from "react";

interface CheckboxProps {
  label: string;
}

export default function Checkbox({ label }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Pressable style={[styles.checkboxContainer]} onPress={() => setChecked(!checked)}>
      <View style={styles.checkbox}>
        {checked && 
          <Text style={styles.checkmark}>✔</Text>
        }
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.primary,
    shadowColor: colors.contrast,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 2
  },
  checkboxInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.contrast,
  },
  checkmark: {
    position: 'absolute',
    top: -4,
    color: colors.contrast,
    fontSize: fontSize.sm,
  },
  label: {
    color: colors.contrast,
    fontSize: fontSize.md,
    marginLeft: spacing.sm,
  }
});