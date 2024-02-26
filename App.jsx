import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
      });
  }, []);

  const fetchRandomDog = () => {
    setIsLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
      });
  };

  return(
    <View style={styles.contenedor}>
      <Text style={styles.tittle}>Imagenes de perros aleatorias</Text>
      <View style={styles.contenedor2}>
        <Image src={imageUrl} alt="Perrito aleatorio" />
      </View>
      <View style={styles.contenedor3}>
        <TouchableOpacity style={styles.button} onClick={fetchRandomDog}>
          <Text>Generar otra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles =StyleSheet.create({
  contenedor:{
      flex: 1,
      backgroundColor: '#416D19',
      alignItems: 'center',
      justifyContent: 'center',
  },
  contenedor2:{
    backgroundColor: '#416D19',
    alignItems: 'center',
    padding: 10
  },
  contenedor3:{
    backgroundColor: '#416D19',
    alignItems: 'center',
    padding: 10
  },
  contenedor4:{
    backgroundColor: '#416D19',
    alignItems: 'center',
    padding: 10
  },
  tittle: {
    textAlign: 'center',
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#BFEA7C',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
  button: {
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#BFEA7C',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 40,
    padding: 10
  },
});