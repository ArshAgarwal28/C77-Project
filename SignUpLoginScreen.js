import * as React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class SignUpLoginScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			emailId: '',
			password: '',
		};
	}

	signIn = async () => {
		var response = await firebase.auth().signInWithEmailAndPassword(this.state.emailId, this.state.password);
		if (response) {
			alert('Sign In Successful!');
		} else {
			alert('Incorrect Email ID or Password!');
		}
	};
	signUp = async () => {
		var response = await firebase.auth().createUserWithEmailAndPassword(this.state.emailId, this.state.password);
		if (response) {
			alert('Account Made!');
		} else {
			alert('Error Occured');
		}
	};

	render() {
		return (
			<View>
				<View>
					<TextInput
						style={styles.UserInput}
						placeholder='Email ID...'
						onChangeText={(text) => {
							this.setState({
								emailId: text,
							});
						}}
						value={this.state.emailId}
					/>
					<TextInput
						secureTextEntry={true}
						style={styles.UserInput}
						placeholder='Password...'
						onChangeText={(text) => {
							this.setState({
								password: text,
							});
						}}
						value={this.state.password}
					/>
				</View>

				<View style={styles.ButtonRow}>
					<TouchableOpacity
						style={styles.SubmitButton}
						onPress={() => {
							this.signIn();
						}}>
						<Text> Login </Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.SubmitButton}
						onPress={() => {
							this.signUp();
						}}>
						<Text> Sign Up </Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	UserInput: {
		borderWidth: 2,
		textAlign: 'center',
		alignSelf: 'center',
		width: 200,
		padding: 5,
		margin: 5,
	},

	SubmitButton: {
		borderWidth: 2,
		backgroundColor: 'cyan',
		alignSelf: 'center',
		alignItems: 'center',
		width: 75,
		padding: 5,
		margin: 5,
	},
	ButtonRow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
