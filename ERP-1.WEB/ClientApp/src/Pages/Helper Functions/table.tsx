import * as React from "react";
import { Redirect, useHistory } from "react-router-dom";

export const AddRow = (arr: any[], tableProps: any[], func: any) => {
    if (arr.length !== 0) {
        let mArr = [...arr];
        let obj = arr[0];
        const attrArr = Object.getOwnPropertyNames(obj);

        let ob = mArr[mArr.length - 1] // first instance
        let tempArr = [{}];
        for (let i = 0; i < attrArr.length; i++) {
            let code = ob[attrArr[i]].name;

            let ob2 = { ...ob[attrArr[i]], name: code + 1 } // latest instance
            let latest = { [attrArr[i]]: ob2 };
            tempArr[0] = { ...tempArr[0], ...latest }
        }
        mArr.push(tempArr[0]);
        func(mArr);



    } else {
        func(tableProps);
    }
}

export const DeleteRow = (index: any, tableState: any[], func: any) => {
    let arr = [...tableState];
    let i = parseInt(index);
    arr.splice(i, 1);
    func(arr);
}

export const getCurrentRowNo = (val: number) => {
    return { sNo: val }
}

export const clear_form = (formObj: any) => {
    let ag_cells = document.getElementsByClassName('ag-cell')
    if (ag_cells.length > 0) {
        for (let i = 0; i < ag_cells.length; i++) {
            ag_cells[i].innerHTML = '';
        }
    }
    let inputs = document.getElementsByTagName('input');
    let select = document.getElementsByTagName('select');
    for (let i = 0; i < inputs.length; i++) {
        let type = inputs[i].type;
        if (type == 'checkbox') {
           inputs[i].checked = false;
        
          
        }
    }
    for (let i = 0; i < select.length; i++) {

        select[i].selectedIndex = 2;
    }

    formObj.reset();
}

export const GetNameFromCode = (code: number, dataArray: any[]) => {
    var foundObj = dataArray.find((obj: any) =>
        obj.id == code
    );
    console.log(foundObj);
    return foundObj;
}
