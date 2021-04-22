import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity, Platform } from 'react-native';

import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { SvgFromUri } from 'react-native-svg';
import { useRoute, useNavigation } from '@react-navigation/core';
import { format, isBefore } from 'date-fns';

import waterDrop from '../assets/waterdrop.png';
import { PlantProps, savePlant } from '../libs/storage';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
  plant: PlantProps;
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;

  const navigation = useNavigation();

  function handleChangeTime(_: Event, dateTime: Date | undefined) {
    const currentDate = new Date();
    const isBeforeCurrentDate = dateTime && isBefore(dateTime, currentDate);

    if (Platform.OS === 'android') {
      setShowDatePicker((oldValue) => !oldValue);
    }

    if (isBeforeCurrentDate) {
      setSelectedDateTime(currentDate);
      return Alert.alert('Escolha uma hora no futuro!');
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker((oldValue) => !oldValue);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate('Confirmation', {
        title: 'All good!',
        subtitle: `We will help you to take care of your plants.`,
        buttonTitle: 'Thanks 🌻',
        icon: 'done',
        nextScreen: 'MyPlants',
      });
    } catch {
      Alert.alert('Não foi possível salvar. 😢');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri={plant.photo} height={150} width={150} />
        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantAbout}>{plant.about}</Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterDrop} style={styles.tipImage} />
          <Text style={styles.tipText}>{plant.water_tips}</Text>
        </View>
        <Text style={styles.alertLabel}>Escolha o melhor horário para ser lembrado</Text>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}
        {Platform.OS === 'android' && (
          <TouchableOpacity
            onPress={handleOpenDateTimePickerForAndroid}
            style={styles.dateTimePickerButton}
          >
            <Text style={styles.dateTimePickerText}>{`${format(selectedDateTime, 'HH:mm')}`}</Text>
          </TouchableOpacity>
        )}
        <Button title="Cadastrar Planta" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.shape,
  },
  controller: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20,
    backgroundColor: colors.white,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10,
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: 60,
  },
  tipImage: { height: 56, width: 56 },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: 'justify',
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
  dateTimePickerButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 40,
  },
  dateTimePickerText: { color: colors.heading, fontSize: 24, fontFamily: fonts.text },
});
