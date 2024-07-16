import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import NavOptions from "../../components/NavOptions";
import Ionicons from "react-native-vector-icons/Ionicons";

const SCREEN_WIDTH = Dimensions.get("window").width;

const DATA = [
  {
    name: "Rides",
    image: require("@/assets/images/yellow-hatchback-car-yellow-background-vector.png"),
    id: "0",
  },
  {
    name: "Food",
    image: require("@/assets/images/delicious-hamburger-soft-drink.png"),
    id: "1",
  },
  {
    name: "Market",
    image: require("@/assets/images/shopping-basket-full-vegreables-realistic-image.png"),
    id: "2",
  },
  // { name: "Reserve", image: require('@/assets/images/yellow-hatchback-car-yellow-background-vector.png'), id: "3" }
];

const DATA1 = [
  {
    name: "Rentals",
    image: require("@/assets/images/map-travel-elements-with-flat-design.png"),
    id: "0",
  },
  {
    name: "Flash",
    image: require("@/assets/images/illustrated-cash-delivery-concept.png"),
    id: "1",
  },
  {
    name: "Trucks",
    image: require("@/assets/images/hand-drawn-delivery-concept-with-truck.png"),
    id: "2",
  },
  {
    name: "Scan N'Go",
    image: require("@/assets/images/smartphone-scanning-qr-code.png"),
    id: "3",
  },
];



export default function Index() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: "100%",
        backgroundColor: "#FCBB4B",
      }}
    >
      <Text
        style={{
          fontFamily: "Nunito Sans",
          fontSize: 16,
          color: "000000",
          paddingVertical: 40,
          marginLeft: 10,
          // paddingBottom:20,
          paddingTop: 100,
        }}
      >
        Good Morning, umesha wickckramararchchi
      </Text>

      <View
        style={{
          backgroundColor: "#FFF",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: 1200,
          paddingHorizontal: 35,
        }}
      >
        {/* <NavOptions /> */}
        {/* <TouchableOpacity style={styles.button}>
        <Text>Press Here</Text>
      </TouchableOpacity> */}

        <View>
          <FlatList
            data={DATA}
            numColumns={3}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() =>  {(item.id)}}>
                <View style={styles.card}>
                  <View style={styles.view1}>
                    <Image style={styles.image1} source={item.image} />
                  </View>
                  <View>
                    <Text>{item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View>
          <FlatList
            data={DATA1}
            numColumns={4}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.card1}>
                <View style={styles.view2}>
                  <Image style={styles.image2} source={item.image} />
                </View>
                <View>
                  <Text>{item.name}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View>
          <Text style={styles.text1}>Where are you going?</Text>
        </View>

        <View>
          <TextInput
            placeholder="Enter Your Destination!"
            placeholderTextColor="#7E7878"
            style={{
              fontSize: 16,
              width: "100%",
              padding: 10,
              height: 60,
              borderColor: "#7E7878",
              marginTop: 10,
              backgroundColor: "#DDDDDD",
              borderRadius: 20,
            }}
          />
        </View>

        <View>
          <Image
            source={require("@/assets/images/home2  .jpeg")}
            style={{
              height: 200,
              width: 350,
              marginTop: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
          />
        </View>

        <View>
          <Text style={styles.text1}>
            PickMe Food, now Delivering Happiness!
          </Text>

          <Text style={styles.text2}>
            Bringing the joy of Food and Happiness to you in the from of your
            most favorite dishes
          </Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.button1}>
              <Text style={styles.button1Text}>Check</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={require("@/assets/images/output.png")}
            style={{ height: 200, width: 350, marginTop: 20 }}
          />
        </View>
        <View>
          <Text style={styles.text1}>
            Unlimited FREE Delivery from PickMe Pass
          </Text>

          <Text style={styles.text2}>
            Enjoy the convenience of FREE Food & Market delivery for RS.549. Get
            your free trial today!
          </Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.button1}>
              <Text style={styles.button1Text}>Check</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },

  image2: {
    height: 60,
    width: 70,
    borderRadius: 30,
  },

  image1: {
    height: 60,
    width: 80,
    borderRadius: 30,
  },

  card: {
    alignItems: "center",
    margin: SCREEN_WIDTH / 25,
  },

  card1: {
    alignItems: "center",
    margin: SCREEN_WIDTH / 52,
  },

  view1: {
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: "#DDDDDD",
  },

  view2: {
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: "#DDDDDD",
  },

  text1: {
    fontWeight: "bold",
    marginTop: 10,
  },

  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    paddingHorizontal: 10,
  },

  text2: {
    marginLeft: 10,
    marginTop: 10,
  },

  button1: {
    height: 40,
    width: 150,
    backgroundColor: "#FFC60B",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 200,
  },

  button1Text: {
    color: "#FFFFFF",
    fontSize: 17,
    fontFamily: "Nunito Sans",
    marginTop: -2,
  },

  images: {},
});
