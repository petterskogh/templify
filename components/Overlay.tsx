import { View, StyleSheet, Pressable, Text } from "react-native";
import { ReactNode } from "react";
import { spacing } from "../utils/variables";

interface Props {
  children: ReactNode;
  show: boolean;
  closeOverlay: () => void;
}

export default function Overlay({ children, show, closeOverlay }: Props) {
  return (
    <View style={[styles.overlay, { display: show ? "flex" : "none"}]}>
      <View style={styles.bg} />
      <Pressable onPress={closeOverlay} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>x</Text>
      </Pressable>
      <View style={styles.children}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  bg: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    backgroundColor: 'black',
  },
  children: {
    flex: 1,
    margin: spacing.md,
  
  },
  closeButton: {
    alignSelf: 'flex-end',
    top: spacing.sm,
    right: spacing.md,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 32,
  }
});