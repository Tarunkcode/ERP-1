import * as React from 'react';
import Tree from "../../../components/custom-tree/tree.component"
import ConfigModal from "../../../components/Modals/config_Modals"
function SeriesConfig_Page({ handleChange, handlePosting, getCode, getCtype,parentCode }: any) {
   
    var [tree, setTree]: any = React.useState([])
    const compCode = window.sessionStorage.getItem('compCode') || ""
   const customer = window.sessionStorage.getItem('customer') || ""
    const username = window.sessionStorage.getItem('username') || ""
    const renderTreeData = () => {
        var urlStr = `http://103.25.128.155:12019/api/GetSeriesNode?Customer=${customer}&Company=${compCode}`;
        var req: Request;
        let h = new Headers();
        h.append('Accept', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append('FYear', '0');
        try {
            req = new Request(urlStr, {
                method: 'GET',
                headers: h,
                mode: 'cors'
            });
            fetch(req).then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 1')
            }).then((result: any) => {
                var jsonStr: string = result.data;
                console.log('json',jsonStr)
                setTree(JSON.parse(jsonStr))

            });;

        } catch (err) { alert(err) }
    }
    React.useEffect(() => {

        renderTreeData()
    }, [])
    const [viewAddNew, setViewAddNew]: any = React.useState();
/*    const [parentCode, setParentCode]: any = React.useState('');*/
    const [name, setName]: any = React.useState('');

  /*  const getParentCode = (value: any) => { setParentCode(value) }*/

    const getName = (value: any) => {setName(value)}
    const GetAddNew = (value: boolean) => {
        setViewAddNew(value);
    }
    const AddNewSeriesBy_POST = () => {
        var urlStr = `http://103.25.128.155:12019/api/AddSeriesNode?Customer=${customer}&Company=${compCode}&ParentCode=${parentCode}&Name=${name}&UserName=${username}`;
        var req: Request;
        let h = new Headers();
        h.append('Accept', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append('FYear', '0');
        try {
            req = new Request(urlStr, {
                method: 'POST',
                headers: h,
                mode: 'cors'
            });
            fetch(req).then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 2')
            }).then((result: any) => {
                alert(result.msg)
                renderTreeData()

            });;

        } catch (err) { alert(err) }
    }
   return (
       <div className="main card firstDiv">
           <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
               <span className="row-header p-0 m-0" >Series Configuration</span>
           </div>
           {
               tree.length != 0 && tree != null ? (
                   <div className=" d-md-flex flex-md-row">
                       <div className="left-panel p-3" style={{ border: '1px solid black', width: '25vw', maxHeight: '94vh', backgroundColor: '#fff', overflow: 'scroll' }}>
                           <Tree fore="series" treeData={tree} getParentCode={getCode} viewAddNew={viewAddNew} GetAddNew={GetAddNew} />
                       </div>
                       <div className="right-window p-3" style={{ border: '1px solid black', width: '70vw', minHeight: '94vh', margin: 'auto' }}>
                           {
                               viewAddNew != null && viewAddNew != undefined ? (
                                   <div className="col-6" style={{ border: '1px solid grey', padding: '5em' }}>
                                       <ConfigModal gettingCtype={getCtype} isNumConf={!viewAddNew} isApprovalConf={!viewAddNew} getName={getName} addNewSeries={AddNewSeriesBy_POST} isVoucherConf={!viewAddNew} isAddNew={viewAddNew} handleChange={handleChange} handlePosting={handlePosting} />

                                   </div>
                 
                               ): null
                           }
                       </div>
                          
           
                  </div>  
                    ): null
            }
        </div>
        )
}
export default SeriesConfig_Page;