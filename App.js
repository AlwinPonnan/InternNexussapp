/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
// import Index from './components/index/index';
import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
// import Index from './Components/Index/Index';
import Login from './Components/Index/Login';



const App: () => React$Node = () => {
  return (
    <>
      <Login/>
    </>
  );
};
const styles = StyleSheet.create({
});
export default App;