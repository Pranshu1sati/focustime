import React, {useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing, fontSizes } from '../utils/size';
import { colors } from '../utils/colors';

export const Focus = ({addSubject}) => {
  const [subject , setSubject] = useState(null)
  return(
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput  label = "What would you like to Focus on?" onChangeText = {setSubject} style={styles.textInput}/>
      <View style={styles.button}>
      <RoundedButton title = "+" size={50} onPress={()=>addSubject(subject )} />
      </View>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex:1,
    marginRight : spacing.sm,
  },
inputContainer:{ 
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
button:{
  justifyContent:'center',
},
  text:{
  color:colors.white,
}
});
