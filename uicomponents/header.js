import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from "../stylesheets/mainstyle.js"
import Icon from 'react-native-vector-icons/FontAwesome';
class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeftIcon} onPress={() => this.props.indexThis.drawer.openDrawer()}>
              <Icon name="bars" size={20} color="#ffffff" />
        </TouchableOpacity>
        <View style={styles.headerCenterView}>
          <Text style={styles.headerText}>
          header component
          </Text>
        </View>
        <View style={styles.headerRightIcon}>
          <Icon name="search" size={20} color="#ffffff"/>
        </View>
      </View>
    );
  }
}

export default HeaderComponent;
