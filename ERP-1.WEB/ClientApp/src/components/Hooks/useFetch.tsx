
 
function useFetch() {

    let baseURL: string = `http://${window.localStorage.getItem('url')}:${window.localStorage.getItem('port')}`;
  
    const ServerRequest = async (req: any) => {
        //url = `${baseURL}${url}`
       
        let response = await fetch(req)
        let data = await response.json()
        //console.log('REQUESTING:', data)

        return { response, data }
    }

   
    let callFetch = async (url: string, label: string, body: any) => {

    const token: any = window.sessionStorage.getItem('token1');
        const urlStr = baseURL + url
        var req: Request;
        let h = new Headers();
        h.append('Accept', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append("Content-Type", "application/json");
        h.append('FYear', '0');
        h.append('Authorization', `Bearer ${token}`)
        if (label === 'POST') {
            req = new Request(urlStr, {
                method: 'POST',
                headers: h,
                body: JSON.stringify(body),
                mode: 'cors'
            });

        }else {
            req = new Request(urlStr, {
                method: 'GET',
                headers: h,
                mode: 'cors',

            });


        } 

        let { response, data } = await ServerRequest(req)
        return { res: response, got: data }
    }
    

    return callFetch
}

export default useFetch;

