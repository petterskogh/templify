import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import { colors, spacing } from './utils/variables';
import Checkbox from './components/Checkbox';
import HandleListOverlay from './components/HandleListOverlay';
import BottomRow from './components/BottomRow';

export default function App() {
  const [checkboxes, setCheckboxes] = useState<string[]>([]);
  const [showListOverlay, setShowListOverlay] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.bg} />
      <Header />
      <View style={styles.checkboxes}>
        {checkboxes.map((checkbox, index) => 
          <Checkbox 
            key={index}
            label={checkbox}
            onRemove={() => setCheckboxes(checkboxes.filter((_, i) => i !== index))} />
        )}
      </View>
      <BottomRow onAdd={(text) => setCheckboxes([...checkboxes, text])} openHandleListOverlay={() => setShowListOverlay(true)} />
      <HandleListOverlay show={showListOverlay} closeOverlay={() => setShowListOverlay(false)} />
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
