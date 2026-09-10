import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Café do Código</Text>
          <Text style={styles.headerSubtitle}>Seu café, uma linha por vez</Text>
        </View>

        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={20} color="#000000ff"></Ionicons>
        </View>
      </View>
      {/* Header */}
      {/* Main */}
      <View style={styles.Main}>
        <View>
           <Text style={styles.MainTitle}>Bom Dia!</Text>
          <Text style={styles.MainSubtitle}>Que tal um café hoje?</Text>
        </View>

        <View style={styles.featured}>
          <Image
          source={require('./assets/coffee.jpg')} style={styles.image}>
          </Image>
          <Text style={styles.produto}>Cappucino Especial</Text>
          <Text style={styles.descricao}>Cremoso e delicioso</Text>
          <Text style={styles.preco}>R$ 12,90</Text>
        </View>
        <Text style={styles.sectionTitle}>Nosso cardápio</Text>
      </View>
      <View style={styles.cards}>
        <View style={styles.carditem}>
          <Text style={styles.cardtitle}>Expresso</Text>
          <Text style={styles.carddesc}>Puro e Forte</Text>
          <Text style={styles.cardprice}>R$ 7,00</Text>
        </View>
        <View style={styles.carditem}>
          <Text style={styles.cardtitle}>Cappuccino</Text>
          <Text style={styles.carddesc}>Puro e Forte</Text>
          <Text style={styles.cardprice}>R$ 12,90</Text>
        </View>
        <View style={styles.carditem}>
          <Text style={styles.cardtitle}>Latte</Text>
          <Text style={styles.carddesc}>Puro e Forte</Text>
          <Text style={styles.cardprice}>R$ 11,50</Text>
        </View>
        <View style={styles.carditem}>
          <Text style={styles.cardtitle}>Mocha</Text>
          <Text style={styles.carddesc}>Puro e Forte</Text>
          <Text style={styles.cardprice}>R$ 13,50</Text>
        </View>
      </View>
      {/* Main */}
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
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: "#2f2d2c"
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },
  MainTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: "#2f2d2c"
  },
  Main: {
    width: "100%",
    paddingTop: 10,
    paddingHorizontal: 24,
    paddingBottom: 10,
},
  MainSubtitle: {
    fontSize: 16, 
    color: "#9b9b9b",
    marginTop: 8
},
  featured: {
    backgroundColor: "#ffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.05,
    elevation: 4 
  },
  image: {
    width: "100%",
    height: 188,
    borderRadius: 16,
    marginBottom: 16
  },
  produto: {
    fontSize: 20,
    fontWeight:'800',
    color:"#2f2d2c"
  },
  descricao: {
    fontSize: 14,
    color:"#9b9b9b",
    marginTop: 4
  },
  preco: {
    fontSize: 20,
    color:'#c67c4e',
    fontWeight:'800',
    marginTop: 12
  },

  sectionTitle:{
    fontSize: 22,
    fontWeight: '800',
    color:"#2f2d2c",
    marginBottom: 16
  },

  carditem: {
    width: "44%",
    backgroundColor: "#ffffffff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#0000000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.05,
    elevation: 3,
    marginBottom: 16
  },

  cardtitle:{
    fontSize: 16,
    fontWeight: "700",
    color:"#2f2d2c"
  },
  
  carddesc:{
    fontSize: 12,
    color: "#9b9b9b",
    marginTop: 4,
    lineHeight: 16
  },
  
  cardprice:{
    fontSize: 16,
    color:'#c67c4e',
    fontWeight:'800',
    marginTop: 12
  },

  cards:{
    display:"flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-evenly',
  }

})
