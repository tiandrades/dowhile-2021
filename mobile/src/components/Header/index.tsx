import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import LogoSvg from '../../assets/logo.svg';

import { UserPhoto } from '../UserPhoto';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

export function Header() {
  const { signOut, user } = useAuth();

  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        {
          user && (
            <TouchableOpacity
              onPress={signOut}
            >
              <Text style={styles.logoutText}>
                Sair
              </Text>
            </TouchableOpacity>
          )
        }

        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
