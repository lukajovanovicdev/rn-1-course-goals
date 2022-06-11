import { StyleSheet, View, Text, Pressable } from 'react-native';

export const GoalItem = ({ text, onDeleteItem, id }) => (
  <View style={styles.goalItem}>
    <Pressable
      onPress={onDeleteItem.bind(this, id)}
      android_ripple={{ color: '#210644' }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <Text style={styles.goalText}>{text}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});
