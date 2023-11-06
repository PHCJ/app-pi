import { View, Text, Image, StyleSheet } from 'react-native';

const CardAttractions = ({ title, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 3, // Para tornar a imagem com cantos arredondados
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CardAttractions;
