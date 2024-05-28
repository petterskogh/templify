import { StyleSheet, View, StatusBar, TextInput } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import { colors, spacing } from './utils/variables';

export default function App() {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header />
      <TextInput
        style={styles.textarea}
        multiline={true}
        textAlignVertical='top'
        numberOfLines={50}
        onChangeText={setText}
        value={text}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  textarea: {
    color: colors.contrast,
    fontSize: 18,
    margin: spacing.md
  }
});
