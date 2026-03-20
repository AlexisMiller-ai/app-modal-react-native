import { View, Text, Image, StyleSheet, Pressable } from "react-native";

type ProfileProps = {
  onOpenModal: () => void;
};

export default function Profile({ onOpenModal }: ProfileProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Alexis.jpeg")}
        style={styles.image}
      />

      <Text style={styles.name}>Alexis Gonçalves</Text>

      <Text style={styles.bio}>
        Sou estudante de tecnologia e desenvolvimento mobile. Estou aprendendo
        React Native e criando meus primeiros aplicativos. Gosto de programar e
        explorar novas tecnologias.
      </Text>

      <Pressable style={styles.button} onPress={onOpenModal}>
        <Text style={styles.buttonText}>Ver mais</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 20,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },

  bio: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 30,
    color: "white",
    lineHeight: 22,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});