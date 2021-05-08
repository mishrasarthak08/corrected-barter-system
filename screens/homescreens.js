import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Home Screen</Text>
            </View>
        )
    }
}