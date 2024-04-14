import axios from 'axios';

async function HttpRequest(url="/") {

    let response = null;

    const instance = axios.create({
        baseURL: 'https://api.github.com/repos/angular/angular-cli/',
        headers: {
             'Authorization': process.env.REACT_APP_API_KEY,
        }
    });

    if(url === "/") return;

    response = await instance.get(url);

    return response;
};

export default HttpRequest;