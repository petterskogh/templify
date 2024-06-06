import { View, StyleSheet } from "react-native";
import Overlay from "./Overlay";

export interface Props {
  show: boolean;
  closeOverlay: () => void;
}

export default function HandleListOverlay({ show, closeOverlay }: Props) {
  return (
    <Overlay show={show} closeOverlay={closeOverlay}>
      <View>
        {/* Add your content here */}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  
});