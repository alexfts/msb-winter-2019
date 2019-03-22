import React, { Component } from 'react';
import { Text } from 'react-native';
import { Query } from 'react-apollo';

import { EVENT_QUERY } from '../../apollo/queries';
import Loader from '../../components/Loader';
import Event from './Event';

class EventContainer extends Component {
  static navigationOptions = {
    title: 'Event',
    headerRight: null,
    headerStyle: {
      backgroundColor: '#000',
      height: 75
    }
  };

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('eventId');

    return (
      <Query query={EVENT_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          return (
            <Event event={data.allEvents[0]} navigation={{ navigation }} />
          );
        }}
      </Query>
    );
  }
}

export default EventContainer;