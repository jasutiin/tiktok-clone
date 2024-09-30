import { View, Text, StyleSheet, FlatList } from 'react-native';
import VideoItem from './components/VideoItem';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Friends() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'VIDEO 1' },
          { key: 'VIDEO 2' },
          { key: 'VIDEO 3' },
          { key: 'VIDEO 4' },
        ]}
        renderItem={({ item }) => <VideoItem content={item.key} />}
        style={styles.list}
        snapToInterval={windowHeight} // Snap to each item (height of screen)
        snapToAlignment="start" // Start each item from the top of the screen
        decelerationRate="fast" // Fast snapping
        pagingEnabled // Enables paging to make it scroll one item at a time
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  list: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  },
});

export default Friends;
