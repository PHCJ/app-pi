import { StyleSheet, View, Image } from 'react-native';
import Zoomable from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';


export default function Map() {
  return (
    <View style={styles.container}>
      <Zoomable       
        minZoom={0.725}
        maxZoom={2}
        zoomStep={1}
        initialZoom={1.2}
        inicialOffsetX={-500}
      >
        <Image source={require('../../assets/mapa-parque.gif')} style={styles.image}></Image>
      </Zoomable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 1400,
    height:500,
    resizeMode:'contain',
  },
});