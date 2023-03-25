import * as React from 'react';
import { useState } from 'react';
import "./tree.styles.css"
//parent
export default function Tree({ treeData, GetAddNew, viewAddNew, getParentCode}: any) {
  
    
    return (
        <ul>
            {
                treeData != null && treeData.length != 0 ?

                    treeData.map((node: any) => (
                        <TreeNode node={node} GetAddNew={GetAddNew} getParentCode={getParentCode} viewAddNew={viewAddNew} key={node.Key} />
            )) : null
            }
        </ul>
    );
}
//child
function TreeNode({ node, GetAddNew, viewAddNew, getParentCode}: any) {
    const { children, label, key,type } = node;
    var [showChildren, setShowChildren]: any = useState(false);
 
    const handleClick = (e: any) => {
        console.log('type', type)
        const list = document.querySelectorAll('.ram');
        getParentCode(e.target.id)
        list.forEach((curr: any) => {
            curr.style.backgroundColor = '#fff';
            curr.style.color = 'black';
           
        });
        document.getElementById(key)!.style.backgroundColor = 'pink';
        document.getElementById(key)!.style.color = '#fff';

        console.log('e', e.target.id);
        type == 1 ? GetAddNew(true) : GetAddNew(false)
        setShowChildren(!showChildren);
    };
    return (
        <>
            <ul style={{ marginBottom: "10px", borderLeft: "1px solid black", }}>
                <li className="ram" id={key}>
                    <a className="m-1 p-1 Snode" onClick={handleClick} key={type } id={key} style={{ border: '1px solid black' }} >{label}</a>
                </li>
            </ul>



            <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black", marginLeft: '40px' }}>
                {showChildren && <Tree GetAddNew={GetAddNew} viewAddNew={viewAddNew} getParentCode={getParentCode }  treeData={children} />}
            </ul>
        </>
    );
}