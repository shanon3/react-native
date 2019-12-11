import React from 'react';
import { View, Button, FlatList, TouchableOpacity, Text } from 'react-native';
import { URL_API } from '../service/serviceUrl'; //import URL API

class ListTodo extends React.Component {
  static navigationOptions = {
    title: 'Fetch List Todo',
    headerStyle: {
      backgroundColor: '#73C6B6',
    },
  };
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: '' };
  }
  componentDidMount() {
    this.fetchTodo();
  }

  fetchTodo = async () => {
    try {
      let respon = await fetch(URL_API + 'todo/list');
      respon = await respon.json();
      console.log('respon api');
      console.log(respon.content);
      this.setState({
        isLoading: false,
        dataSource: respon.content, //tampung data dalam state.dataSource
      });
    } catch (error) {
      console.log('oop ' + error);
    }
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };

  listTodo() {
    let titleBar = 'List Todos';
    let countTodo = this.state.dataSource.length; //hitung jumlah data
    if (countTodo == 0) {
      //jika data api kosong tampilkan pesan
      titleBar = 'Todo Empty';
    }
    if (this.state.isLoading) {
      //jika state isLoading true jalankan perintah ini jika tidak tampilkan data
      return (
        <View style={{ flex: 4, padding: 20 }}>
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <Text style={{ paddingTop: 30, paddingLeft: 30 }}>{titleBar}</Text>
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Text>title: {item.title}</Text>
                <Text>description: {item.description}</Text>
                <Text>Completed Status: {JSON.stringify(item.completed)}</Text>
                <Text>dateActivity: {item.dateActivity}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={({ id }) => id}
          />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        {this.listTodo()}
        <Button
          title="Go to new Profile"
          onPress={() => this.props.navigation.push('Profile')}
        />
      </View>
    );
  }
}
export default ListTodo;
