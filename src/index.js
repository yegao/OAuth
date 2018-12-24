import { state } from './state.js';
import { authorize, getAuthorizeUri } from './qq.js';

let authorizeObject = authorize({
    client_id:'100410602',
    redirect_uri:'http://www.jianshu.com/users/auth/qq_connect/callback',
    state,
    style:'mobile'
});

console.log(authorizeObject,getAuthorizeUri(authorizeObject));