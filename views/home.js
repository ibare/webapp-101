import Woowahan from 'woowahan';
import template from './home.hbs';

export default Woowahan.View.create('home', {
  template,

  viewWillMount(renderData) {
    renderData.caption = '김민태';
    
    return renderData;
  }
});
