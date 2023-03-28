import * as React from 'react';
import { useState } from 'react';
import { store2 } from '../../Redux/config/config.reducer';
import "./tree.styles.css"
//parent
export default function Tree2({ treeData, handleChange, defaultRights, virtual, suStatus, suArr, ...rest }: any) {

    /*    console.log('def rights', defaultRights);*/
    return (
        <ul>
            {
                treeData != null && treeData.length != 0 ?

                    treeData.map((node: any) => (
                        <TreeNode2 node={node} handleChange={handleChange} suStatus={suStatus} suArr={suArr} defChkList={suStatus ? suArr : defaultRights} vcc={virtual} />
                    )) : null
            }
        </ul>
    );
}
//child
function TreeNode2({ node, handleChange, defChkList, vcc, suStatus, suArr, ...rest }: any) {
    const { children, label, key, type } = node;

    var [showChildren, setShowChildren]: any = useState(false);
    var statusCheck = false;
    if (vcc !== 0) statusCheck = defChkList ? defChkList.find((item: any) => item.code == key) : false
    if (suStatus === true) {

        let eleMArr: any = document.getElementsByClassName('rolebox');
        for (let i = 0; i < eleMArr.length; i++) {
            eleMArr[i].checked = true;
        }
        statusCheck = true;
    }
    
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
            document.getElementById(key)!.style.color = '#fff';

            console.log('e', e.target.id);

            setShowChildren(!showChildren);

        } else { }

    };
    return (
        <>
            <ul style={{ marginBottom: "10px", borderLeft: "1px solid black", }}>
                <li className="ram" id={key} style={{ fontSize: '1.4rem' }}>
                    <span>
                        <a className="m-1 p-2 Snode" onClick={handleClick} key={type} id={key} style={{ border: '1px solid black', cursor: 'pointer', backgroundColor: 'navy', color: 'white' }} >{label}</a>
                    </span>

                    <input type="checkbox" id={label} name={key} defaultChecked={statusCheck ? true : false} onChange={handleChange} className="col-1 rolebox m-0 p-0" />

                </li>
            </ul>



            <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black", marginLeft: '40px' }}>
                {showChildren && <Tree2 treeData={children} handleChange={handleChange} defaultRights={suStatus ? suArr : defChkList} virtual={vcc} suStatus={suStatus} suArr={suArr} />}
            </ul>
        </>
    );
}