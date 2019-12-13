
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import './index.scss'
// import chuck from '../../assets/images/chuck.png'
import { bindActionCreators } from 'redux';
// import {saveJokeAction} from '../../Actions/index'

class RandomJokeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            joke : 'test'
        }
    }


    componentDidMount(){
        this.getAJoke();
    }
    getAJoke(){
        fetch('https://api.chucknorris.io/jokes/random')
        .then(result => result.json())
        .then(data => {
            this.setState({
                joke : data.value
            })
        })

    }

    saveJoke(){
        this.props.saveJokeAction(this.state.joke)
    }

    render(){
        return(
                <div className="joke-generator card" style={{backgroundColor: "gray"}}>
                    <p  className="joke-generator__content">{this.state.joke}</p>
                    <div className="btn-container">
                        <button  className="joke-generator__button cta" onClick={() => this.getAJoke()} >C'mon !</button>
                        <button  className="joke-generator__button cta" onClick={() => this.saveJoke()} >Save It!</button>
                    </div>
                </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({saveJokeAction}, dispatch)



// export default connect(null, mapDispatchToProps)(RandomJokeContainer);
export default connect(null, )(RandomJokeContainer);
