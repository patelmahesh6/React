import React ,{ Component } from 'react';
import { StyleSheet, Text, View ,ActivityIndicator,Image ,SectionList,TextInput ,Button ,Alert ,ScrollView ,FlatList} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
   
    return (
      <ScrollView>

      <View style={styles.container} >
        <Text>Hello World!</Text>
        <Greeting name='  Coding! ' />
        <Blink text='I love Coding' />
        <Banana></Banana>
       
        
        <Blink text='I love Coding' />
             
      <TextInput
          style={{width: 300}}
          placeholder="Type Something"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 20}}>
          {this.state.text.split(' ').map((word) => word && 'V Loves M').join(' ')}
        </Text>

       <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', alignItems: 'stretch',}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>

      <Button
          onPress={() => {
            Alert.alert('You are Crazy ! Lady ');
          }}
          title="Press Me"
        />
        
        
        <FlatList style={{width: 300}}
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />


<FetchExample ></FetchExample>


      </View>





      </ScrollView>

      
    );
  }
}

class FetchExample  extends Component{
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }


}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
} 

class Banana extends Component {
  render() {
    let pic = {
      uri: 'https://i1.wp.com/thefreshimages.com/wp-content/uploads/2017/07/Love-Images-22.jpg'
    };
    return (
      <Image source={pic} style={{width: 300, height: 200}}/>
    );
  }
} 

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={styles.red} >{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 50
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontSize: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});

