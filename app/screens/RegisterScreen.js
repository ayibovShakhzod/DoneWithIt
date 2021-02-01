import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  SubmitButton
} from '../components/forms';
import Screen from '../components/Screen';

export default function RegisterScreen() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string()
      .required()
      .min(4)
      .label('Password')
  });
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/logo-red.png')}
      />
      <AppForm
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Name"
          icon="account"
          autoCapitalize="none"
          autoCorrect={false}
          name="name"
          textContentType="name"
        />
        <AppFormField
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
});
