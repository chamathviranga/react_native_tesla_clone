import React from 'react';
import {Text, View, ImageBackground, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItem';

import styles from './styles';
import cars from './cars.js';


const CarsList = (props) => {

  return (
      
      <View style={styles.container}> 
          <FlatList 
            data = {cars}
            // renderItem={(object)=> {
            //   return <CarItem key={object.item.name} car={object.item} />
            // }}
            renderItem={(object)=> <CarItem key={object.item.name} car={object.item} />}
            keyExtractor={(object, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={5}
            snapToInterval={Dimensions.get('window').height}
          />
      </View>

      

  );
}

export default CarsList
