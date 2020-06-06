import { HIDE, SHOW } from 'actions';

const initial = {
  msg: '',
  isShow: false,
  category: 'normal',
}

export default function store(state = initial, {type, category, msg}) {  
  switch (type) {
    case SHOW:
      return {
        msg,
        category,
        isShow: true,
      }
    case HIDE:
      return {
        ...state,
        isShow: false,
      }
    default:
      return state;
  }
}
