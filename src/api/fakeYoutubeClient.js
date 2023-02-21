import axios from 'axios';

// Mock Data 사용하여 JSON 로 읽는 파일
export default class FakeYoutubeClient {
    async search({params}){
        return params.relatedToVideoId 
            ? axios.get('/videos/related.json') 
            : axios.get('/videos/search.json');
    }
    async videos(){
        return axios.get('/videos/popular.json');
    }
    async channels() {
        return axios.get('/videos/channel.json');
    }
}