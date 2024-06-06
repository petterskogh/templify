import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { commonStyles } from "../utils/styles";
import { useState } from "react";
import { colors, spacing } from "../utils/variables";

interface Props {
  onAdd: (text: string) => void;
}

export default function NewCheckboxInput({onAdd}: Props) {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={[commonStyles.yellowField, styles.inputContainer]}>
        <TextInput
          style={commonStyles.input}
          placeholder="Ny artikel"
          value={text}
          onChangeText={setText}
        />
      </View>
      <Pressable style={[commonStyles.yellowField]} onPress={() => { onAdd(text); setText(''); }}>
        <Text style={styles.buttonText}>+</Text>
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
  inputContainer: {
    flex: 1,
  },
  buttonText: {
    color: colors.contrast,
    fontSize: 32,
  }
});