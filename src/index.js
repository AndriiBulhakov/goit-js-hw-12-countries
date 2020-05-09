import './styles.css';
import countries from './template/countries.hbs'
import countriesList from './template/countriesList.hbs'
import fetchSearchContries from './fetchCountries.js'
import debounce from 'lodash';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import 'pnotify/dist/PNotifyBrightTheme.css'
const searchForm = document.querySelector('.js-search-form');
const ulRef = document.querySelector('.js-countries');
const inputRef = document.querySelector('.search-input')

const debounceInputCallback = _.debounce(event =>{
    event.preventDefault();
    ulRef.innerHTML = ''
    const inputValue = inputRef.value
    fetchSearchContries(inputValue).then(countriesMarkup)
},500)
    


searchForm.addEventListener('input', debounceInputCallback  )

function countriesMarkup(data){
    let markup;
    if(data.length > 1 && data.length < 10){
        markup = countriesList(data)
    }else{
        markup = countries(data)
    }
    
    ulRef.insertAdjacentHTML('beforeend', markup)
    if(data.length > 10){
        PNotify.error({
            text: 'Too many matches found. Please enter a more specific query!'
          });
    }
}







