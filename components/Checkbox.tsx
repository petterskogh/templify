import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors, fontSize, spacing } from "../utils/variables";
import { useState } from "react";
import { commonStyles } from "../utils/styles";

interface CheckboxProps {
  label: string;
  onRemove: () => void;
}

export default function Checkbox({ label, onRemove }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Pressable style={[commonStyles.yellowField, styles.button]} onPress={onRemove}>
        <Text style={styles.buttonText}>🗑</Text>
      </Pressable>
      <Pressable style={[commonStyles.yellowField, styles.checkboxContainer]} onPress={() => setChecked(!checked)}>
        <View style={styles.checkbox}>
          {checked && 
            <Text style={styles.checkmark}>✔</Text>
          }
        </View>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm
  },
  checkboxContainer: {
    flex: 1
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
  },
  button: {
    paddingHorizontal: spacing.sm
  },
  buttonText: {
    fontSize: fontSize.md,
  }
});