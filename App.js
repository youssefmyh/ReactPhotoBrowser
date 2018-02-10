/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PhotoRepository from './Repository/PhotoRepository'; 
import PhotoBrowser from 'react-native-photo-browser';
import { Provider } from 'react-redux';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActionSheetIOS
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {

   constructor(props){
      super(props);

      this.state = { dataSource: [], visible: true};


      this.loadPhotos(this);
    

    }

    loadPhotos(appObject){

      PhotoRepository.getInstance()
      .getPhotosList().then(function(photos){

        const media = [];
       photos._photos.forEach(d =>
       media.push(d));
       appObject.setState({dataSource:media});

      },function(reject)
      {
         alert('Error in Loading Photos');
      });


    }

  onSelectionChanged = (media, index, selected) => {
    alert(`${media.photo} selection status: ${selected}`);
  };

  onActionButton = (media, index) => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showShareActionSheetWithOptions(
        {
          url: media.photo,
          message: media.caption,
        },
        () => {},
        () => {},
      );
    } else {
      alert(`handle sharing on android for ${media.photo}, index: ${index}`);
    }
  };

  render() {

    const {
      initialIndex,
      displayNavArrows=true,
      displayActionButton=true,
      displaySelectionButtons,
      startOnGrid=true,
      enableGrid=true,
      alwaysDisplayStatusBar
    } = this.state;

    return (
      <PhotoBrowser
        mediaList={this.state.dataSource}
        initialIndex={initialIndex}
        displayNavArrows={displayNavArrows}
        displaySelectionButtons={displaySelectionButtons}
        displayActionButton={displayActionButton}
        startOnGrid={startOnGrid}
        enableGrid={enableGrid}
        onSelectionChanged={this.onSelectionChanged}
        onActionButton={this.onActionButton}
        alwaysDisplayStatusBar={alwaysDisplayStatusBar}
        customTitle='' />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
