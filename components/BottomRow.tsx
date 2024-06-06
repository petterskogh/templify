import { View, Text, StyleSheet, Pressable } from "react-native";
import { commonStyles } from "../utils/styles";
import { colors, spacing } from "../utils/variables";
import NewCheckboxInput from "./NewCheckboxInput";

interface Props {
  onAdd: (text: string) => void;
  openHandleListOverlay: () => void;
}

export default function BottomRow({onAdd, openHandleListOverlay}: Props) {
  return (
    <View style={styles.container}>
      <NewCheckboxInput onAdd={onAdd} />
      <Pressable style={[commonStyles.yellowField, styles.listButton]} onPress={openHandleListOverlay}>
        <Text style={styles.listButtonText}>🗒️</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md
  },
  listButton: {
    height: 58,
    alignContent: 'center',
    justifyContent: 'center',
  },
  listButtonText: {
    color: colors.contrast,
    fontSize: 22,
  }
});