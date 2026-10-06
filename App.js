
import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import StylesDemo from './components/StylesDemo';
import InputDemo from './components/InputDemo';
import FormDemo from './components/FormDemo';
import ListDemo from './components/ListDemo';
import GridDemo from './components/GridDemo';
import ComponentFlatlistLoop from './components/ComponentFlatlistLoop';
import SectionListDemo from './components/SectionListDemo';
import ClassCompDemo from './components/ClassCompDemo';
import HooksDemo from './components/HooksDemo';
import ResponsiveLayoutDemo from './components/ResponsiveLayoutDemo';
import ButtonStylesDemo from './components/ButtonStylesDemo';
import RadioButtonManual from './components/RadioButtonManual';
import Loader from './components/Loader';
import ModalDemo from './components/ModalDemo';
import PressableDemo from './components/PressableDemo';
import StatusBarDemo from './components/StatusBarDemo';
import PlatformDemo from './components/PlatformDemo';
import CustomModal from './components/CustomModal';
import GetAPIDemo from './components/GetAPIDemo';
import ListWithAPIDemo from './components/ListWithAPIDemo';
import FlatListWithAPIDemo from './components/FlatListWithAPIDemo';
import APIWithJsonServer from './components/APIWithJsonServer';
import PostAPIDemo from './components/PostAPIDemo';
import PostAPIForm from './components/PostAPIForm';



function App() {


  return (
    <View>
      <ScrollView>
        {/* <User name={name} />
        <StylesDemo/>
        <InputDemo/>
        <FormDemo/>
        <ListDemo />
        <GridDemo/>
        <ComponentFlatlistLoop/>
        <SectionListDemo/>
        <ClassCompDemo address="Gaindakot"/> 
        <HooksDemo/>
        <ButtonStylesDemo/>
        <RadioButtonManual/> 
        <Loader/>
        <ModalDemo/>
        <PressableDemo/>
        //WebViewComponent cha euta Error vayera not installed
        
        <GetAPIDemo/>
         <ListWithAPIDemo/> 
        <FlatListWithAPIDemo/>
        <APIWithJsonServer/>
        <PostAPIDemo/>
        <PostAPIForm/>
        <PlatformDemo/>
        */}
        <FormDemo/>
      </ScrollView>
    </View>
  );
}




export default App;
