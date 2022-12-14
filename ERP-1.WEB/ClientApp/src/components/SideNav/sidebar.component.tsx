import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavTree from '../SideNav/nav-tree.component'

export default function Sidebar({ state }: any) {
    var [source, setSource]: any = useState([])
    const roleStr : any = window.sessionStorage.getItem('roleCode')
    const roleCode : number = parseInt(roleStr);
    React.useEffect(() => {
        const url = `http://103.25.128.155:12019/api/LoadUserManuTree?RC=${roleCode}`
        console.log(url)
        var h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Content-Type', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append('FYear', '0');
        var req1: Request;
        req1 = new Request(url, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        try {
            fetch(req1).then(res => res.json()).then(r => { setSource(JSON.parse(r.data)); })

        } catch (err) {
            alert(err);
        }

    }, [])
    return (
        <nav className="accordion active" id="sidebar">
            <ul className="list-unstyled components">
            <div className="sidebar-header" style={{ margin: "0", display: "flex", flexDirection: "column", backgroundColor: "white", border: "6px solid #798cd4", padding: "0" }}>


                <img src={'./assets/erpLogo.png'} style={{ width: "56vw", borderRadius: "6%", margin: "0" }} className="img-fluid erp-logo" alt="Responsive image" />
            </div>

            <p className="text-center text-white" style={{ margin: '0', padding: '0' }}><span style={{ fontWeight: "bolder", color: "black", margin: '0' }}>FY :</span> {state.Fy}</p>
            {
                source.length !== 0 ? (<NavTree treeData={source} />) : null
            }
            
           </ul>
        </nav>
        )
}
