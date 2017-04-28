import ICard from './src/card';

ICard.install = Vue => {
    Vue.component(ICard.name,ICard);
};

export default ICard;
