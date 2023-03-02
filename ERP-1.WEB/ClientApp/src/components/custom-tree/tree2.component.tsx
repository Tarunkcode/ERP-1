import * as React from 'react';
import { useState } from 'react';
import { store2 } from '../../Redux/config/config.reducer';
import "./tree.styles.css"
//parent
export default function Tree2({ treeData, handleChange}: any) {


    return (
        <ul>
            {
                treeData != null && treeData.length != 0 ?

                    treeData.map((node: any) => (
                        <TreeNode2 node={node} handleChange={handleChange}/>
                    )) : null
            }
        </ul>
    );
}
//child
function TreeNode2({ node, handleChange}: any) {
    const { Children, label, Key, type } = node;
    var [showChildren, setShowChildren]: any = useState(false);
    //var isNodeChecked = document.getElementById
    //useState(() => { },[])
    const handleClick = (e: any) => {
        var check: any = document.getElementById(label) as HTMLInputElement;

        if (check.checked) {
            const list = document.querySelectorAll('.ram');
            /* getParentCode(e.target.id)*/
            list.forEach((curr: any) => {
                curr.style.backgroundColor = '#fff';
                curr.style.color = 'black';

            });
           /* document.getElementById(Key)!.style.backgroundColor = 'pink';*/
            document.getElementById(Key)!.style.color = '#fff';

            console.log('e', e.target.id);

            setShowChildren(!showChildren);

        } else {}
   
    };
    return (
        <>
            <ul style={{ marginBottom: "10px", borderLeft: "1px solid black", }}>
                <li className="ram" id={Key} style={{ fontSize:'1.4rem' }}>
                    <span>
                        <a className="m-1 p-2 Snode" onClick={handleClick} key={type} id={Key} style={{ border: '1px solid black', cursor:'pointer', backgroundColor: 'navy',  color: 'white' }} >{label}</a>
                    </span>
                    <input type="checkbox" id={label} name={Key } onBlur={handleChange} className="col-1 m-0 p-0" />
                </li>
            </ul>



            <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black", marginLeft: '40px' }}>
                {showChildren && <Tree2 treeData={Children} handleChange={handleChange} />}
            </ul>
        </>
    );
}