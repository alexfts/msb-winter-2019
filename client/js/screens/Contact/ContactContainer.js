import React, { Component } from 'react';
import { View } from 'react-native';

import Contact from './Contact';
import styles from './styles';

class ContactContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Contact />;
  }
}

export default ContactContainer;