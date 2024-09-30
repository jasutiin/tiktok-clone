import { View, Text, StyleSheet } from 'react-native';

function Friends() {
  return (
    <View style={styles.container}>
      <Text>Friends</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Friends;
