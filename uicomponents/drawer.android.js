import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from "../stylesheets/mainstyle.js";
import Icon from 'react-native-vector-icons/FontAwesome';
class DrawerNavigationView extends Component {
  constructor(props){
    super(props);
    this.state = {items: ['Item1', 'Item2', 'Item3','Item4','Item5','Item6']}
  }
  render() {
    return (
            <View style={styles.drawerMain}>
               <ScrollView>
                   <View style={styles.profileContainer}>
                     <Icon name="user" size={100} color="#ffffff" style={styles.drawerIcon}/>
                     <Text style={styles.profileText}>Profile</Text>
                   </View>

                   {this.state.items.map(function(item, i) {
                        return (
                            <TouchableOpacity key={i} title={item} ref={'item' + i} style={styles.drawerItem}>
                              <Icon name="rocket" size={20} color="#ffffff" style={styles.drawerIcon}/>
                              <Text style={styles.drawerText}>
                                {item}
                              </Text>
                            </TouchableOpacity>
                        );
                    }, this)}
                 </ScrollView>
               </View>
            );
  }
}

export default DrawerNavigationView;
