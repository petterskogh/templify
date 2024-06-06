import { colors, spacing } from "./variables";
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  yellowField:{
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
  input: {
    backgroundColor: colors.inputBg,
    borderRadius: 8,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    flex: 1
  }
});