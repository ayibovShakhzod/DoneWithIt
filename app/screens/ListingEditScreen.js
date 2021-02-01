import React from 'react';
import { StyleSheet } from 'react-native';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker
} from '../components/forms';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';

export default function ListingEditScreen() {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number()
      .required()
      .min(1)
      .max(10000)
      .label('Price'),
    description: Yup.string()
      .nullable()
      .label('Description'),
    category: Yup.object()
      .required()
      .nullable()
      .label('Category')
  });
  const categories = [
    {
      label: 'Furniture',
      value: 1,
      backgroundColor: 'red',
      icon: 'apps'
    },
    {
      label: 'Clothing',
      value: 2,
      backgroundColor: 'green',
      icon: 'email'
    },
    {
      label: 'Camera',
      value: 3,
      backgroundColor: 'blue',
      icon: 'lock'
    }
  ];
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null
        }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="title"
          placeholder="Title"
          width={120}
        />
        <AppFormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          items={categories}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          placeholder="Category"
          width="50%"
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          placeholder="Description"
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10
  }
});
