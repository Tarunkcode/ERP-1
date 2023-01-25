import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../AppContext/ThemeContext';
import useFetch from '../Hooks/useFetch';
import NavTree from '../SideNav/nav-tree.component'

export default function Sidebar({ state }: any) {
    var [source, setSource]: any = useState([])
    //const roleStr : any = window.sessionStorage.getItem('roleCode')
    //const roleCode: number = parseInt(roleStr);

    const { theme } = React.useContext(ThemeContext);
    let api = useFetch();
    const renderNavTree = async () => {
        try {

            let path = `/api/LoadUserManuTree?RC=34`
            let { res, got } = await api(path)
           console.log('res', res)
            if (res.status === 200) {
                var r: string = got.data;
                setSource(JSON.parse(r));
            }
            else throw new Error('Bad Fetch 1')
        } catch (err) { alert(err) }

    }
    React.useEffect(() => {
        renderNavTree();

    }, [])
    return (
        <nav className="accordion active" id="sidebar">
            <ul className="list-unstyled components">
                <div className="sidebar-header" style={theme === 'dark' ? { margin: "0", display: "flex", flexDirection: "column", backgroundColor: "white", border: "6px solid #2c3968", padding: "0"}: { margin: "0", display: "flex", flexDirection: "column", backgroundColor: "white", border: "6px solid #798cd4", padding: "0" }}>


                <img src={'./assets/erpLogo.png'} style={{ width: "56vw", borderRadius: "6%", margin: "0" }} className="img-fluid erp-logo" alt="LOGO" />
            </div>

            <p className="text-center text-white" style={{ margin: '0', padding: '0' }}><span style={{ fontWeight: "bolder", color: "black", margin: '0' }}>FY :</span> {state.Fy}</p>
            {
                source.length !== 0 ? (<NavTree treeData={source} />) : null
            }
            
           </ul>
        </nav>
        )
}
