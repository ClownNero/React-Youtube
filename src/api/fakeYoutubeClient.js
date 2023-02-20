import axios from 'axios';

// Mock Data 사용하여 JSON 로 읽는 파일
export default class FakeYoutubeClient {
    async search(){
        return axios.get('/videos/search.json');
    }
    async videos(){
        return axios.get('/videos/popular.json');
    }
}