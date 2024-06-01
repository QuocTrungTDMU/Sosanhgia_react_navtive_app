/**
 * @format
 */

import React from 'react';
import { Text } from 'react-native'

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Root from './navigation/UITab';
import test from './Screens (view)/test';
import ViewProducts from './Screens (view)/ViewProducts';
import ViewProducts_v2 from './Screens (view)/ViewProducts_v2';
import SamsungProducts from './Screens (view)/SamsungProducts';
import IphoneProducts from './Screens (view)/IphoneProducts';
import Welcome from './Screens (view)/Welcome';
import { root } from 'cheerio/lib/static';

AppRegistry.registerComponent(appName, () => Root);
