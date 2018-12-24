export const authorize = ({client_id,redirect_uri,state,scope,style}) => {
    return {
        url:'https://graph.qq.com/oauth2.0/authorize',
        client_id,
        redirect_uri,
        state,
        scope, //get_user_info,list_album,upload_pic,do_like
        style
    }
};

export const getAuthorizeUri = ({url,client_id,redirect_uri,state,scope,style}) => {
    return `${url}?client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&scope=${scope}&style=${style}`
};
