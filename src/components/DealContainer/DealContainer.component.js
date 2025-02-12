import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './DealContainer.styles';

import DealItem from './DealItem/DealItem.component';

const DealContainer = (props) => {
  const { data } = props;
  const centerDealData = Math.floor(data.length / 2);
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data.slice(0, centerDealData)}
        renderItem={({item}) => <DealItem item={item}/>}
        keyExtractor={item => item.id}
      />

      <FlatList
        horizontal
        data={data.slice(centerDealData)}
        renderItem={({item}) => <DealItem item={item}/>}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default DealContainer;