import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class RedeemInfoModal extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Cheers!</Text>
        <Text>{`You are about to redeem your points`}</Text>
        <Button
          onPress={() => {
            navigation.navigate('RedeemBarcode');
          }}
          title="Redeem"
        />
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title="Not right now"
        />
      </View>
    );
  }
}

export default withNavigation(RedeemInfoModal);
