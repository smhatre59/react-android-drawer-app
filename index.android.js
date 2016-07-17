/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// uicomponents and styles
import styles from "./stylesheets/mainstyle.js"
import HeaderComponent from "./uicomponents/header.js"
import DrawerNavigationView from "./uicomponents/drawer"
class interviewkeeda extends Component {
  render() {
    const navigationView = (
      <View style={[styles.container, {backgroundColor: '#fff'}]}>
      <DrawerNavigationView />
      </View>
        );
    return (
      <DrawerLayoutAndroid ref={(drawer) => { return this.drawer = drawer }}
                            drawerWidth={300}
                            drawerPosition={DrawerLayoutAndroid.positions.Left}
                            renderNavigationView={() => navigationView}>
       <View style={styles.container}>
          <HeaderComponent indexThis={this}/>
            <View style={styles.mainContent} >
                <Text>
                  Sample android app with navigation drawer.
                </Text>

            </View>
        </View>
        </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('interviewkeeda', () => interviewkeeda);
