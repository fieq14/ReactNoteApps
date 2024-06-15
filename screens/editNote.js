import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const EditNote = ({ setCurrentPage, editNote, editingNote }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDesc(editingNote.desc);
    }
  }, [editingNote]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Judul</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Deskripsi</Text>
      <TextInput
        style={styles.input}
        value={desc}
        onChangeText={setDesc}
      />
      <Button
        title="Simpan"
        onPress={() => {
          editNote(editingNote.id, title, desc);
          setCurrentPage('home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default EditNote;
