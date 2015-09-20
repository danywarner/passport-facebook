module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'development':
            return {
            facebook: {
		FACEBOOK_APP_ID: '754657637972313',
		FACEBOOK_APP_SECRET: 'e4a2dc4d8b2af80389ec981c4f90945b'
	}};

        case 'production':
            return {
            	facebook: {
		FACEBOOK_APP_ID: '754657637972313',
		FACEBOOK_APP_SECRET: 'e4a2dc4d8b2af80389ec981c4f90945b'
	}};

        default:
            return {aaa:'bbb'};
    }
};