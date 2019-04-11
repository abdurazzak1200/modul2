import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createNews } from '../../store/action/news';

class AddNews extends Component {
    state = {
        title: '',
        text: ''
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmitHandler = e => {
        e.preventDefault();

        const news = {
            title: this.state.title,
            text: this.state.text,
            date: new Date().getTime()
        }

        this.props.onCreateNews(news);
    }

    render() {
        return (
            <div className='add-news'>
                <div className="container">
                    <form className="news-form" onSubmit={this.onSubmitHandler}>
                        <h3 className="add-news__title">Введите заголовок</h3>
                        <input className='title-block' type="text" name='title' onChange={this.changeHandler}/>
                        <h3 className="add-news__text">Введите статью</h3>
                        <textarea className='text-block' name="text"  onChange={this.changeHandler}/>
                        <button className='btn12'>ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>
        );
    }
    
}

// const mapStateToProps = state => {
//     return {

//     }
// };

const mapDispatchToProps = dispatch => {
    return {
        onCreateNews: news => dispatch(createNews(news))
    }
};

export default connect(null, mapDispatchToProps)(AddNews); 
