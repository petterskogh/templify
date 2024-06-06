import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { commonStyles } from "../utils/styles";
import { useState } from "react";
import { colors, spacing } from "../utils/variables";

interface Props {
  onAdd: (text: string) => void;
}

export default function NewCheckboxInput({onAdd}: Props) {
  const [text, setText] = useState<string>('');

  function handleSubmit() {
    if (text !== '') {
      onAdd(text);
      setText('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={[commonStyles.yellowField, styles.inputContainer]}>
        <TextInput
          style={commonStyles.input}
          placeholder="Ny artikel"
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
        />
      </View>
      <Pressable style={[commonStyles.yellowField]} onPress={handleSubmit}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: spacing.sm
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: spacing.sm
  },
  buttonText: {
    color: colors.contrast,
    fontSize: 32,
  }
});