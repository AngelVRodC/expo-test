import React from 'react';
import { Spinner, View } from 'native-base';

const Loader = () => {

  return (
    <View  style={{
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
    }}>
      <Spinner color='blue' />
    </View>
  )
};

export default Loader;
  