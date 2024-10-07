import { View, StyleSheet, FlatList } from 'react-native';
import VideoItem from '../components/VideoItem';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[{ key: 'VIDEO 1' }]}
        renderItem={({ item }) => <VideoItem content={item.key} />}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        snapToInterval={windowHeight} // Snap to each item (height of screen)
        snapToAlignment="start" // Start each item from the top of the screen
        decelerationRate="fast" // Fast snapping
        pagingEnabled // Enables paging to make it scroll one item at a time
        scrollEventThrottle={16}
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
});

export default Home;
