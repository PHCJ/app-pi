import { StyleSheet, View, ScrollView } from 'react-native';
import CardAttractions from '../components/CardAttractions';

const AttractionsList = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <CardAttractions title="Barca Girafa" imageUrl={require('../../assets/images/barcagirafa.jpg')} />
      <CardAttractions title="Montanha Russa" imageUrl={require('../../assets/images/montanharussa.jpg')} />
      <CardAttractions title="Carrinho Bate-Bate" imageUrl={require('../../assets/images/batebate.jpg')} />
      <CardAttractions title="Bate-bate Aquático" imageUrl={require('../../assets/images/batebateagua.jpg')} />
      <CardAttractions title="Piscina Rasa" imageUrl={require('../../assets/images/piscinarasa.jpg')} />
      <CardAttractions title="Gira Gira" imageUrl={require('../../assets/images/giragira.jpg')} />
      <CardAttractions title="Magnífico Castelo" imageUrl={require('../../assets/images/castelo.jpg')} />
      <CardAttractions title="Alimente Pássaros" imageUrl={require('../../assets/images/alimentapassaros.jpg')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25,
  },
});

export default AttractionsList;