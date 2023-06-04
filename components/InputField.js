import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  filedButtonLabel,
  filedButtonFunction,
}) => {
  return (
    <View style={styles.container}>
      {icon}
      {
        (inputType = 'password' ? (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            style={{flex: 1, paddingVertical: 0}}
            secureTextEntry={true}
          />
        ) : (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            style={{flex: 1, paddingVertical: 0}}
          />
        ))
      }
      <TouchableOpacity onPress={filedButtonFunction}>
        <Text style={{color: '#ad40af', fontWeight: '700'}}>
          {filedButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
});
