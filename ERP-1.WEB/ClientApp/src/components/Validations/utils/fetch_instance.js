import { useContext } from "react";
import AuthContext from "../../../AppContext/AuthContext";

let baseURL = `${window.localStorage.getItem('url')}:${window.localStorage.getItem('port')}`;

const ServerRequest = async (url, config) => {
    url = `${baseURL}${url}`
    let response = await fetch(url, config)
    let data = await response.json()
    console.log('REQUESTING:', data)
    return { response, data }
}

const FetchWrapper = async (url, config = {}) => {
    let { authTokens } = useContext(AuthContext);

    config['headers'] = {
        Authorization: `Bearer ${authTokens}`
    }
    let { response, data } = await ServerRequest(url, config)
    return { response, data }
}
export default FetchWrapper;
