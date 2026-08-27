import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text>Café do Código</Text>
          <Text>Seu café, uma linha por vez</Text>
        </View>

        <View>
          <Ionicons name="person" size={20} color="#000000ff"></Ionicons>
        </View>
      </View>
      {/* Header */}
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7ff'
  },
  header: {
    width: "100%",
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
