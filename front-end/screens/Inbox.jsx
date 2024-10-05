import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const StoriesItem = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function Inbox() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'black',
  },
  item: {
    backgroundColor: 'black',
    padding: 20,
    marginVertical: 8,
    color: 'white',
  },
  header: {
    fontSize: 32,
    backgroundColor: 'black',
    color: 'white',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
});

export default Inbox;
