export const HIDE = 'HIDE';
export const SHOW = 'SHOW';

export const show = payload => ({ type: SHOW, ...payload });
export const hide = () => ({ type: HIDE });