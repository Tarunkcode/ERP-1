﻿
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