import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

//parent
export default function NavTree({ treeData }: any) {
  
    return (
        <ul>
            {
                treeData != null && treeData.length != 0 ?

                    treeData.map((node: any) => (
                        <TreeNode node={node} />
                    )) : null
            }
        </ul>
    );
}
//child
function TreeNode({ node }: any) {
    const { children, label, key, type, address, mt, maddress } = node;
    var [showChildren, setShowChildren]: any = useState(false);
    const handleClick = (e: any) => {
        const list = document.querySelectorAll('.ram');

        list.forEach((curr: any) => {
            curr.style.backgroundColor = '#fff';
            curr.style.color = 'black';

        });
        document.getElementById(key)!.style.backgroundColor = 'pink';
        document.getElementById(key)!.style.color = '#fff';

        console.log('e', e.target.id);

        setShowChildren(!showChildren);
    };
    return (
        <>
            
            <ul>
                <li className="ram" id={key} style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                    {
                        type === '1' ? (<a className="p-1 pt-3 pb-3 level0" onClick={handleClick} key={type} id={key} ><span className="ml-1 nav-span">{label}</span><svg style={{ width: '10px', float: 'right', marginLeft: '10px', color: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                           </a>) : null
                    }
                    
                    {

                            type === '2' ? (

                            !children ? (<NavLink className="p-1 m-0 abascus" to={address}><span className=" ml-5 nav-span">{label}</span></NavLink>)

                                : (<a className="p-1 pt-2 pb-2 m-0 level1" onClick={handleClick} key={type} id={key}><span className="ml-3 nav-span">{label}</span><svg style={{ width: '10px', float: 'right', marginLeft: '10px', color: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></a>)

                        ) : null
                    }
                    
                   
                    {
                        type === '3' ? (
                            address === '/modify' || address == '/Tran-modify' ? ((<NavLink className="p-1 m-0 abascus" to={{ pathname: address + `/${mt}`, state: { mAdd: `${maddress}`, mT: `${mt}` } }}><span className=" ml-5 nav-span">{label}</span></NavLink>)) : address === '/list' || address === '/Tran-list' ?
                                ((<NavLink className="p-1 m-0 abascus" to={{ pathname: address + `/${mt}`, state: { mAdd: `${maddress}`, mT: `${mt}` } }}><span className=" ml-5 nav-span">{label}</span></NavLink>))
                                : (<NavLink className="p-1 m-0 abascus" to={address}><span className=" ml-5 nav-span">{label}</span></NavLink>)
                        ) : null


                        
                    }
                    
                 </li>
              </ul>
        
            <ul data-parent="#sidebar">
                {showChildren && <NavTree treeData={children} />}
            </ul>
        </>
    );
}