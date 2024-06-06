import { StyleSheet, View, StatusBar, TextInput } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import { colors, spacing } from './utils/variables';
import Checkbox from './components/Checkbox';
import NewCheckboxInput from './components/NewCheckboxInput';

export default function App() {
  const [checkboxes, setCheckboxes] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.bg} />
      <Header />
      <View style={styles.checkboxes}>
        {checkboxes.map((checkbox, index) => <Checkbox key={index} label={checkbox} />)}
      </View>
      <NewCheckboxInput onAdd={(text) => setCheckboxes([...checkboxes, text])} />
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
    gap: spacing.sm,
    flexDirection: 'column',
    flex: 1
  }
});
