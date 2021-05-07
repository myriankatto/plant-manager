import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';

import { Button } from '../components/Button';
import illustration from '../assets/illustration.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'tree' | 'done';
  nextScreen: string;
}

const emojis = { tree: '🌳', done: '🍀' };

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const { title, subtitle, buttonTitle, icon, nextScreen } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={illustration} style={styles.image} resizeMode="contain" />
      <View style={styles.content}>
        {/* <Text style={styles.emoji}>{emojis[icon]}</Text> */}

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'space-around' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 30 },
  image: { width: 500 },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 38,
    marginTop: -300,
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text,
    paddingVertical: 10,
  },

  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
