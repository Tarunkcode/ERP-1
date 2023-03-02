import * as React from 'react';
import Tree2 from "../../../components/custom-tree/tree2.component"
import useFetch from '../../../components/Hooks/useFetch';
export default function Role_Master_Page({ handleChange, handlePosting, getName, getDes1, getDes2, getDes3, getDes4,...props}: any) {
    var [tree, setTree]: any = React.useState([])
    let api = useFetch();
       const renderTreeData = async () => {

            try {
           
                let path = `/api/LoadRoleManuTree`
                let { res, got } = await api(path, 'GET', '')
                console.log('res', res)
                if (res.status === 200) {
                    var jsonStr: string = got.data;
                    setTree(JSON.parse(jsonStr))
                }
                else throw new Error('Bad Fetch 1')
            } catch (err) { alert(err) }
        }
    React.useEffect(() => {

        renderTreeData()
    }, [])
    const findName = (e: any) => {getName(e.target.value)}
    const findDes1 = (e: any) => {getDes1(e.target.value) }
    const findDes2 = (e: any) => { getDes2(e.target.value)}
    const findDes3 = (e: any) => {getDes3(e.target.value)}
    const findDes4 = (e: any) => {getDes4(e.target.value)}
    return (
        <div className="main card firstDiv">
            <div className="main card firstDiv">
                <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                    <span className="row-header p-0 m-0" >Role Master Configuration</span>
                </div>
                {
                    tree.length != 0 && tree != null ? (
                        <div className=" d-md-flex flex-md-row">
                            <div className="left-window p-3" style={{ border: '1px solid black', width: '60vw', minHeight: '100vh', margin: 'auto' }}>
                             
                                <div className="col-8 p-3 m-0">
                                    <span className="m-0 mb-2 p-0 col-12 d-flex">
                                    <label htmlFor="Name" className="form-label p-0 m-0 mt-2 col-2">Name</label>
                                        <input name="Name" type="text" title="" className="form form-control col-10 mt-2" required onChange={findName}/>
                                    </span>
                                       <span className="m-0 mb-2 p-0 col-12 d-flex">
                                    <label htmlFor="Name" className="form-label col-2"></label>
                                    <input className="form form-control col-10 mt-2" placeholder="Enter Description 1" onBlur={findDes1} required />
                                     </span>
                                       <span className="m-0 mb-2 p-0 col-12 d-flex">
                                    <label htmlFor="Name" className="form-label col-2"></label>
                                    <input onBlur={findDes2} className="form form-control col-10 mt-2" placeholder="Enter Description 2" required />
                                     </span>
                                       <span className="m-0 p-0 mb-2 col-12 d-flex">
                                    <label htmlFor="Name" className="form-label col-2"></label>
                                    <input onBlur={findDes3} className="form form-control col-10 mt-2" placeholder="Enter Description 3" required />
                                     </span>
                                       <span className="m-0 mb-2 p-0 col-12 d-flex">
                                    <label htmlFor="Name" className="form-label col-2"></label>
                                    <input className="form form-control col-10 mt-2" placeholder="Enter Description 4" onBlur={findDes4 } required />
                                     </span>
                                    <button className="btn btn-primary col-4 m-3" onClick={handlePosting }>Save</button>
                                </div>

                            </div>
                            <div className="right-panel p-3" style={{ border: '1px solid black', width: '35vw', maxHeight: '100vh', backgroundColor: '#fff', overflow: 'scroll' }}>
                                <Tree2 handleChange={ handleChange} treeData={tree} />
                            </div>


                        </div>
                    ) : null
                }
            </div>
        </div>
        )
}