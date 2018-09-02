import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CardFinan from '../components/CardFinan';
import { fonts } from '../resources/Fonts';
import { colors } from '../resources/Colors';
import renderIf from 'render-if';
import { newUserText1, newUserText2, newUserText3, newUserText4 } from '../resources/Constants';
import CardUser from '../components/CardUser';
import CardInput from '../components/CardInput';

export default class NewAccountContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cpf: '',
            showCpf: false
        };
    }

    handleName(name) {
        this.setState({ name });
    }

    handleSubmitName(){
        this.setState({ showCpf: true });
    }

    handleCpf(cpf){
        if (/^\d+$/.test(cpf)) {
            this.setState({ cpf });
        }
    }

    render() {
        const topo = '../../assets/img/topo_azul.png';

        return (
            <View style={ styles.container }>

                <Image 
                    style={{ width: 412, height: 174, position: 'absolute' }}
                    source={ require(topo) }
                />
                
                <Text style={ styles.topText }>
                    Conta Sicredi
                </Text>

                <CardFinan text={newUserText1} />
                <CardFinan text={newUserText2} />
                <CardUser text={'Legal!'} />
                <CardFinan text={newUserText3} />

                <CardInput 
                    autoCapitalize
                    value={this.state.name}
                    maxLength={30}
                    onChangeText={value => this.handleName(value)}
                    onSubmitEditing={this.handleSubmitName.bind(this)}
                    width={250}
                />
                {
                    renderIf(this.state.showCpf)(
                        <View>
                            <CardFinan text={newUserText4} />

                            <CardInput 
                                value={this.state.cpf}
                                maxLength={11}
                                keyboardType={'numeric'}
                                onChangeText={value => this.handleCpf(value)}
                                width={120} 
                            />
                        </View>
                    )
                }                

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundBase
    },
    topText: {
        fontSize: 24,
        fontFamily: fonts.circularStdBold,
        color: colors.white,
        marginTop: 16,
        marginLeft: 28,
        marginBottom: 29
    }
})