import { StyleSheet, View, StatusBar, TextInput } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import { colors, spacing } from './utils/variables';
import Checkbox from './components/Checkbox';

export default function App() {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.bg} />
      <Header />
      <View style={styles.checkboxes}>
        <Checkbox label='Shorts' />
        <Checkbox label='Byxor' />
        <Checkbox label='Tröja' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: spacing.md
  },
  checkboxes: {
    gap: spacing.sm
  }
});
