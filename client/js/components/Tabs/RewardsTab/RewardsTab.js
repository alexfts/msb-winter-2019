import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { ALL_REWARDS_QUERY, USER_QUERY } from '../../../apollo/queries';
import { Query } from 'react-apollo';
import { getLoggedInUser } from '../../../config/models';
import RedeemRewardButton from '../../RedeemRewardButton';
import styles from './styles';

class RewardsTab extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  render() {
    return (
      <Query query={ALL_REWARDS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>Error</Text>;
          const allRewards = data.allRewards;

          return (
            <Query
              query={USER_QUERY}
              variables={{ id: this.state.viewerId }}
              fetchPolicy="network-only"
            >
              {({ loading, error, data }) => {
                if (loading) return <ActivityIndicator />;
                if (error) return <Text>Error</Text>;
                const user = data.allUsers && data.allUsers[0];
                if (!user) return <ActivityIndicator />;
                return (
                  <View>
                    {allRewards.map(reward => {
                      return (
                        <RedeemRewardButton
                          key={reward.id}
                          reward={reward}
                          user={user}
                        />
                      );
                    })}
                  </View>
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default RewardsTab;
