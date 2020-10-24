import * as React from 'react';
import {
  StatusBar,
  Animated,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import MaskedView from '@react-native-community/masked-view';
import { colors, links, routes } from '../../utils';
import { COLORS } from '../assets/utils/colors';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);
const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);

const { width, height } = Dimensions.get('window');
const fromCoords = { x: 0, y: height };
const toCoords = { x: width, y: 0 };

const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
};

const Drawer = ({ animation, onPress }) => {
  const polygonRef = React.useRef();

  React.useEffect(() => {
    const listener = animation.addListener((v) => {
      if (polygonRef?.current) {
        polygonRef.current.setNativeProps({
          points: `0,0 ${v.x}, ${v.y} ${width}, ${height} 0, ${height}`,
        });
      }
    });

    return () => {
      animation.removeListener(listener);
    };
  });

  const opacity = animation.x.interpolate({
    inputRange: [0, width],
    outputRange: [0, 1],
  });

  const translateX = animation.x.interpolate({
    inputRange: [0, width],
    outputRange: [-50, 0],
  });

  const [selectedRoute, setSelectedRoute] = React.useState('Get started');

  const onRoutePress = React.useCallback((route) => {
    setSelectedRoute(route);
    onPress(route);
    console.log(route);
  }, []);

  return (
    <MaskedView
      style={[styles.maskedContainer]}
      maskElement={
        <Svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          style={{ backgroundColor: 'transparent' }}
        >
          <AnimatedPolygon
            ref={polygonRef}
            points={`0,0 ${fromCoords.x}, ${fromCoords.y} ${width}, ${height} 0, ${height}`}
            fill='blue'
          />
        </Svg>
      }
    >
      <View style={styles.menuContainer}>
        <AntDesign
          onPress={onPress}
          name='close'
          size={32}
          color='white'
          style={{ position: 'absolute', top: 40, right: 30 }}
        />
        <LinearGradient
          // Background Linear Gradient
          colors={[COLORS.pinacall_orange, COLORS.pinacall_middle, COLORS.pinacall_pink_right, COLORS.pinacall_pink]}
          start={[0.0, 0.5]} end={[1.0, 0.5]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: height ,
          }}
        />
        <Animated.View
          style={[styles.menu, { opacity, transform: [{ translateX }] }]}
        >
          <View>
            {routes.map((route, index) => {
              return (
                <Button
                  key={route}
                  title={route}
                  style={[
                    styles.button,
                    {
                      textDecorationLine:
                        route === selectedRoute ? 'line-through' : 'none',
                      color: COLORS.white,
                    },
                  ]}
                  onPress={() => onRoutePress(route)}
                />
              );
            })}
          </View>

          <View>
            {links.map((link, index) => {
              return (
                <Button
                  key={link}
                  title={link}
                  style={[
                    styles.buttonSmall,
                    { color: colors[index + routes.length + 1] },
                  ]}
                  onPress={onPress}
                />
              );
            })}
          </View>
        </Animated.View>
      </View>
    </MaskedView>
  );
}

export default function HomeScreen() {
  const animation = React.useRef(new Animated.ValueXY(fromCoords)).current;
  const [selectedRoute, setSelectedRoute] = React.useState('Get started');
  const [content, setContent] = React.useState(true);
  const animate = (toValue) => {
    return Animated.spring(animation, {
      toValue: toValue === 1 ? toCoords : fromCoords,
      useNativeDriver: true,
      bounciness: 2,
      speed: 10,
    });
  };
  const opacity = animation.x.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const onCloseDrawer = React.useCallback((formState) => {
    //StatusBar.setBarStyle('dark-content', true);
    setSelectedRoute(formState);
    setContent(true);
    animate(0).start();
  }, []);
  const onOpenDrawer = React.useCallback(() => {
    //StatusBar.setBarStyle('light-content', true);
    setContent(false);
    animate(1).start();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Drawer animation={animation} onPress={onCloseDrawer} />
      <StatusBar backgroundColor="white"/>
      <AnimatedAntDesign
        onPress={onOpenDrawer}
        name='menufold'
        size={32}
        color={COLORS.pinacall_pink}
        style={{ opacity, position: 'absolute', top: 40, right: 30 }}
      />
      {content ? (
        <View style={{ position: 'absolute', top: 38, left: 30}}>
          <Text style={{fontSize: 27, color: COLORS.placeholder}}>{selectedRoute}</Text>
        </View>) : <View></View>
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  maskedContainer: {
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    //backgroundColor: '#FFF',
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  menu: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  button: {
    fontSize: 32,
    color: '#fdfdfd',
    lineHeight: 32 * 1.5,
  },
  buttonSmall: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fdfdfd',
  },
});