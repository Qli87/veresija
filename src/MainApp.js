import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Login from './components/Login';
import App from './App';
import PrivateRoute from './components/PrivateRoute';
import {getTranslations} from './actions'
import { connect } from "react-redux";
import { renderToStaticMarkup } from "react-dom/server"; 
import { withLocalize, Translate, setActiveLanguage, addTranslation, getTranslate, initialize } from "react-localize-redux";
import Select from 'react-select';
import store from './store'


class MainApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            slag: 'lt',
            translations : {
                pocetna: ['Početna', 'Почетна'],
                farewell: ['Dovidjenja', 'Довиђења']
            }
        }

        // const translations =  {
        //     pocetna: ['Početna', 'Bonjour'],
        //     farewell: ['Goodbye', 'Au revoir']
        // };

        this.props.initialize({
            languages: [
                {name: "Latinica", code: "lt"},
                {name: "Cirilica", code: "cr"}
            ],
            // translation: translations,        
            // translation: this.props.translations,        
            // translation: this.state.trans,        
            options: {
                renderToStaticMarkup,
                defaultLanguage: 'lt'
            }
        });
        this.props.addTranslation(this.state.translations);
        this.props.setActiveLanguage(this.state.slag);
        // console.log('active language: ', this.state.slag)
        this.onChangeLanguage = this.onChangeLanguage.bind(this);

        console.log('props in constructor: ', this.props)

    }

    componentDidMount() {
        // store.dispatch(setActiveLanguage('cr'));
        // this.props.getTranslations();
        // this.props.setActiveLanguage('cr');
        // this.props.setActiveLanguage(this.state.slag)
        // store.dispatch(addTranslation(this.props.translations));
        // this.props.addTranslation(this.props.translations);
        // this.props.setActiveLanguage('lt')
    }

    onChangeLanguage(_slag) {
        console.log('onChangeLanguage: ', _slag.value)
        // localStorage.setItem('language', _slag.value);
        this.setState({slag: _slag.value})
        this.props.setActiveLanguage(this.state.slag);
        // store.dispatch(setActiveLanguage(_slag))
        // console.log('props: ',this.props);
    }


    render() {

        console.log('state in render: ', this.state)
        console.log('props in render: ', this.props)


        const languageInSelect = [
            { label: 'Latinica', value: 'lt' },
            { label: 'Cirilica', value: 'cr' }
          ];

        return(
            <Router>
                {/* Lucida Console, Monaco, monospace */}
                <div className="container-fluid" style={{'fontFamily':'Arial'}}>
                   <Route path='/login' component={Login} />
                   <PrivateRoute path='/' component={App} />
                   
                   <div style={{'width': '300px', 'marginLeft': '645px'}}>
                        <Translate id="pocetna"></Translate>
                        <Select 
                            onChange={this.onChangeLanguage}
                            options={languageInSelect}
                            defaultValue={{label: 'Latinica', value: 'lt'}}
                        />
                   </div>

                </div>

            </Router>
        );
    }
}



const mapStateToProps = state => ({
    // translate: getTranslate(state.mainReducer),
    // translations: state.mainReducer.translations
})

const mapDispatchToProps = dispatch => ({
    // getTranslations : () => dispatch(getTranslations())
})



export default withLocalize(connect(mapStateToProps, mapDispatchToProps)(MainApp));