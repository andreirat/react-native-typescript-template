import { NavigatorScreenParams } from '@react-navigation/native';

import { AuthenticatedStackParamsList } from './Authenticated/AuthenticatedNavigator.types';
import { FeedStackParamsList, ProfileStackParamsList } from './Authenticated/TabNavigator/TabNavigator.types';
import { UnauthenticatedStackParamsList } from './Unauthenticated/UnauthenticatedNavigator.types';

export interface RootStackParamsList {
  Authenticated: AuthenticatedStackParamsList;
  Unauthenticated: UnauthenticatedStackParamsList;
}

export interface MainStackParamList {
  Feed: NavigatorScreenParams<FeedStackParamsList>;
  Profile: NavigatorScreenParams<ProfileStackParamsList>;
  Unauthenticated: NavigatorScreenParams<UnauthenticatedStackParamsList>;
}
