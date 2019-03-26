import React, { Component } from 'react';
import { Linking, View } from 'react-native';

import CustomIcon from '../../components/CustomIcon';
import styles from './styles';

class SocialIconsPopout extends Component {
  render() {
    return (
      <View style={styles.socialIcons}>
        <CustomIcon
          onPress={() =>
            Linking.openURL('https://www.facebook.com/MainStreetBeer/')
          }
          style={styles.socialIcon}
          source={require('../../assets/images/Icons/socialmedia_fb_icon.png')}
        />
        <CustomIcon
          onPress={() =>
            Linking.openURL('https://www.instagram.com/mainstreetbeer/')
          }
          style={styles.ig}
          source={require('../../assets/images/Icons/socialmedia_ig_icon.png')}
        />
        <CustomIcon
          onPress={() => Linking.openURL('https://twitter.com/mainstreetbeer')}
          style={styles.socialIcon}
          source={require('../../assets/images/Icons/socialmedia_twitter_icon.png')}
        />
      </View>
    );
  }
}

export default SocialIconsPopout;
