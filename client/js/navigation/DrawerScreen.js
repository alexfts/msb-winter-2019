import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Platform,
  Image,
  Linking,
  TouchableHighlight,
  SafeAreaView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { clearUserToken } from '../config/models';
import OrangeButton from '../components/Buttons/OrangeButton';
import { colors } from '../config/styles';
import styles from './styles';

class DrawerScreen extends Component {
  static navigationOptions = {
    title: 'DrawerScreen'
  };

  navigateToScreen = route => {
    this.props.navigation.navigate(route);
    this.props.navigation.closeDrawer();
  };

  signOutAsync = async () => {
    await clearUserToken();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const ArrowIcon = () => (
      <Ionicons
        name={Platform.select({
          ios: 'ios-arrow-forward',
          android: 'md-arrow-forward'
        })}
        size={25}
      />
    );
    return (
      <View style={styles.drawerContainer}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <TouchableHighlight
            underlayColor={colors.neutralLight}
            onPress={() => this.navigateToScreen('Profile')}
          >
            <View style={styles.drawerItemWrapper}>
              <Text style={styles.drawerItem}>About You</Text>
              <ArrowIcon />
            </View>
          </TouchableHighlight>
          <View style={styles.hr} />
          <TouchableHighlight
            underlayColor={colors.neutralLight}
            onPress={() => this.navigateToScreen('FavBeers')}
          >
            <View style={styles.drawerItemWrapper}>
              <Text style={styles.drawerItem}>Your Favourites</Text>
              <ArrowIcon />
            </View>
          </TouchableHighlight>
          <View style={styles.hr} />
          <TouchableHighlight
            underlayColor={colors.neutralLight}
            onPress={() => this.navigateToScreen('Your Events')}
          >
            <View style={styles.drawerItemWrapper}>
              <Text style={styles.drawerItem}>Your Events</Text>
              <ArrowIcon />
            </View>
          </TouchableHighlight>
          <View style={styles.hr} />
          <TouchableHighlight
            underlayColor={colors.neutralLight}
            onPress={() => this.navigateToScreen('Contact')}
          >
            <View style={styles.drawerItemWrapper}>
              <Text style={styles.drawerItem}>Contact Us</Text>
              <ArrowIcon />
            </View>
          </TouchableHighlight>
          <View style={styles.hr} />
          <View style={styles.signOutWrapper}>
            <OrangeButton
              onPress={() => {
                this.signOutAsync();
              }}
            >
              Sign Out
            </OrangeButton>
          </View>
        </SafeAreaView>

        <Image
          source={require('../assets/images/Events/ig_image_1.png')}
          style={styles.igFeedImg}
        />
        <TouchableHighlight
          underlayColor={colors.neutralLight}
          onPress={() => {
            Linking.openURL('https://www.instagram.com/mainstreetbeer/');
          }}
        >
          <View style={styles.igWrapper}>
            <Image
              source={require('../assets/images/Icons/socialmedia_ig_icon.png')}
              style={styles.igLogo}
            />
            <Text style={styles.igHashtag}>#themainbeer</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default withNavigation(DrawerScreen);
