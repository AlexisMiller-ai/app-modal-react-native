import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function ModalScreen() {
  return (
    <View style={styles.overlay}>
      <View style={styles.modalBox}>
        <Text style={styles.modalTitle}>Mais sobre mim</Text>

        <Text style={styles.modalText}>
          Atualmente curso Sistemas para Internet e venho desenvolvendo projetos
          acadêmicos e práticos com foco em programação e tecnologia.
        </Text>

        <Text style={styles.modalText}>
          Tenho interesse em desenvolvimento mobile, front-end e criação de
          soluções digitais úteis para pessoas e empresas.
        </Text>

        <Text style={styles.modalText}>
          Meu objetivo é evoluir como desenvolvedor, aprender novas ferramentas
          e construir aplicações cada vez melhores.
        </Text>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Fechar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalBox: {
    width: "100%",
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 24,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16,
    textAlign: "center",
  },

  modalText: {
    fontSize: 16,
    color: "white",
    marginBottom: 12,
    lineHeight: 22,
    textAlign: "center",
  },

  button: {
    marginTop: 10,
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});