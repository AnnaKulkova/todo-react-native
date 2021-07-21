import { ViewStyle } from 'react-native';
import { Route, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type Action<PayloadType = any> = {
  type: string;
  payload: {
    [arg: string]: PayloadType;
  };
};

export type TodoState = {
  id: string;
  title: string;
  description: string;
  color: string;
  completed: boolean;
}[];

export interface ITodoItem {
  id: string;
  color: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface ITodoList {
  items: ITodoItem[];
  onItemPress?: (item: ITodoItem) => void;
}

export interface IAddButton {
  style?: ViewStyle;
  onPress?: () => void;
}

type RootStackParamList = {
  Home: undefined;
  Edit: {
    item?: ITodoItem | null;
    status?: 'new' | 'changed' | null;
  };
};

export interface IEditScreen {
  route: RouteProp<RootStackParamList, 'Edit'>;
  navigation: StackNavigationProp<RootStackParamList, 'Edit'>;
}

export interface IHomeScreen {
  route: RouteProp<RootStackParamList, 'Home'>;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export interface IColorPicker {
  colors: string[];
  onColorPress: (color: string) => void;
  containerStyle?: ViewStyle;
}

export interface ISaveButton {
  onPress: () => void;
  style?: ViewStyle;
}
