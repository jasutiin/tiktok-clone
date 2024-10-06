import { View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { useState, useRef } from 'react';
import { Video, ResizeMode } from 'expo-av';
import { EXPO_VID_URL } from '@env';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function VideoItem({ content }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: EXPO_VID_URL,
        }}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay={true}
        onPlaybackStatusUpdate={(status) => {
          setStatus(() => status);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  text: {
    color: 'white',
    marginTop: 10,
  },
  video: {
    flex: 1,
    width: '100%',
    height: 'auto',
  },
});

export default VideoItem;
