import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker
} from '../components/forms';
import * as Yup from 'yup';

import UploadScreen from './UploadScreen';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import listingsApi from '../api/listings';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number()
    .required()
    .min(1)
    .max(10000)
    .label('Price'),
  description: Yup.string().nullable().label('Description'),
  category: Yup.object()
    .required()
    .nullable()
    .label('Category'),
  images: Yup.array().min(
    1,
    'Please select at least one image.'
  )
});
const categories = [
  {
    label: 'Furniture',
    value: 1,
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp'
  },
  {
    label: 'Cars',
    value: 2,
    backgroundColor: '#fd9644',
    icon: 'car'
  },
  {
    label: 'Cameras',
    value: 3,
    backgroundColor: '#fed330',
    icon: 'camera'
  },
  {
    label: 'Games',
    value: 4,
    backgroundColor: '#26de81',
    icon: 'cards'
  },
  {
    label: 'Clothing',
    value: 5,
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel'
  },
  {
    label: 'Sports',
    value: 6,
    backgroundColor: '#45aaf2',
    icon: 'basketball'
  },
  {
    label: 'Movie & Music',
    value: 7,
    backgroundColor: '#4b7bec',
    icon: 'headphones'
  },
  {
    label: 'Books',
    value: 8,
    backgroundColor: '#a55eea',
    icon: 'book-open-variant'
  }
];

export default function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      {
        ...listing,
        location
      },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save the listing');
    }

    resetForm();
  };
  return (
    <Screen style={styles.screen}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: []
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <AppFormField
          maxLength={255}
          name="title"
          placeholder="Title"
        />
        <AppFormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          width={120}
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
