import React, { useContext } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { Link } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import { styles } from './LocationDetailScreen.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'
import { UserContext } from '../../contexts/UserContext'

export const LocationDetailScreen = ({ route }) => {
  const { item } = route.params
  const { currentUser} = useContext(UserContext)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, idx) => (
            <Image key={idx} source={image} style={styles.image} resizeMode='cover' />
          ))}
        </ScrollView>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name='star' size={20} color={COLORS.primary} />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
        {currentUser && (
          <Link style={styles.webButton} to={{ screen: 'LocationDetailWeb', params: { url: item.url } }}>
            Ir a la web
          </Link>
        )}

        <Text style={styles.description}>{item.description}</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: item.locationCoordinates.latitude,
          longitude: item.locationCoordinates.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002
        }}
      >
        <Marker
          coordinate={{
            latitude: item.locationCoordinates.latitude,
            longitude: item.locationCoordinates.longitude
          }}
          title={item.title}
        />
      </MapView>
    </ScrollView>
  )
}
