const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000";
export const UPLOAD_API = API_ENDPOINT + '/api/upload';
export const LANG_API = API_ENDPOINT + '/api/lang';
export const SENTIMENT_API = API_ENDPOINT + '/api/sentiment';
export const ENTITIES_API = API_ENDPOINT + '/api/entities';