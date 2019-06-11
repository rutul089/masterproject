//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../constants';
import { Text } from '../components';


// create a component
class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text note h1>Search</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
    },
});

//make this component available to the app
export default Search;
