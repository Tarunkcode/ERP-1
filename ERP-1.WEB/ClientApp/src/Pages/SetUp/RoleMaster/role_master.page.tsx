import * as React from 'react';
import { useContext } from 'react';
import { LoaderContext } from '../../../AppContext/loaderContext';
import Tree2 from "../../../components/custom-tree/tree2.component"
import useFetch from '../../../components/Hooks/useFetch';
export default function Role_Master_Page({ defRoleMaster, handleChange, handlePosting, getName, getDes1, getDes2, getDes3, getDes4, vccode, getAllStatus, suDefArr, ...props }: any) {
    var [tree, setTree]: any = React.useState([])
    var [suStatus, setSuStatus]: any = React.useState(false)

    let api = useFetch();
    let { setLoader } = useContext(LoaderContext);
    const renderTreeData = async () => {
        setLoader(true)
        try {

            let path = `/api/LoadRoleManuTree`
            let { res, got } = await api(path, 'GET', '')
            console.log('res', res)
            if (res.status === 200) {
                var json: any[] = got;
                setTree(json)
                setLoader(false)
            }
            else {
                setLoader(false)
                throw new Error('Bad Fetch 1')
            }
        } catch (err) {
            setLoader(false)
            alert(err)
        }
    }
    React.useEffect(() => {
        renderTreeData()

    }, [])
    React.useEffect(() => {

        console.log('else  ', defRoleMaster)
    }, [defRoleMaster])

    const findName = (e: any) => { getName(e.target.value) }
    const findDes1 = (e: any) => { getDes1(e.target.value) }
    const findDes2 = (e: any) => { getDes2(e.target.value) }
    const findDes3 = (e: any) => { getDes3(e.target.value) }
    const findDes4 = (e: any) => { getDes4(e.target.value) }

    const CallSuperUserRoleRights = (e: any) => {
        e.target.checked ? setSuStatus(true) : setSuStatus(false);
        getAllStatus(e.target.checked);
    }

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

                                <form className="col-8 p-3 m-0" id="form">
                                    <span className="m-0 mb-2 p-0 col-12 d-flex">
                                        <label htmlFor="name" className="form-label p-0 m-0 mt-2 col-2">Name</label>
                                        <input name="name" defaultValue={defRoleMaster.roleheader ? defRoleMaster.roleheader[0].name : ''} type="text" title="" className="form form-control inp col-10 mt-2" required onChange={findName} autoComplete="off" />
                                    </span>
                                    <span className="m-0 mb-2 p-0 col-12 d-flex">
                                        <label htmlFor="des1" className="form-label col-2"></label>
                                        <input name="des1" defaultValue={defRoleMaster.roleheader ? defRoleMaster.roleheader[0].des1 : ''} className="form form-control inp col-10 mt-2" placeholder="Enter Description 1" onBlur={findDes1} required />
                                    </span>
                                    <span className="m-0 mb-2 p-0 col-12 d-flex">
                                        <label htmlFor="des2" className="form-label col-2"></label>
                                        <input name="des2" defaultValue={defRoleMaster.roleheader ? defRoleMaster.roleheader[0].des2 : ''} onBlur={findDes2} className="form form-control inp col-10 mt-2" placeholder="Enter Description 2" required />
                                    </span>
                                    <span className="m-0 p-0 mb-2 col-12 d-flex">
                                        <label htmlFor="des3" className="form-label col-2"></label>
                                        <input name="des3" defaultValue={defRoleMaster.roleheader ? defRoleMaster.roleheader[0].des3 : ''} onBlur={findDes3} className="form form-control inp col-10 mt-2" placeholder="Enter Description 3" required />
                                    </span>
                                    <span className="m-0 mb-2 p-0 col-12 d-flex">
                                        <label htmlFor="des4" className="form-label col-2"></label>
                                        <input name="des4" defaultValue={defRoleMaster.roleheader ? defRoleMaster.roleheader[0].des4 : ''} className="form form-control inp col-10 mt-2" placeholder="Enter Description 4" onBlur={findDes4} required />
                                    </span>
                                    <button className="btn btn-success col-4 m-3" onClick={handlePosting}>Save</button>
                                </form>

                            </div>
                            <div className="right-panel p-3" style={{ border: '1px solid black', width: '35vw', maxHeight: '100vh', backgroundColor: '#fff', overflow: 'scroll' }}>
                                <ul style={{ marginBottom: "10px", borderLeft: "1px solid black", }}>
                                    <li className="ram" id="topnode" style={{ fontSize: '1.4rem' }}>
                                        <span>
                                            <a className="m-1 p-2 Snode" style={{ border: '1px solid black', cursor: 'pointer', backgroundColor: 'navy', color: 'white' }} >All</a>
                                        </span>

                                        <input type="checkbox" id="super" name="super" onChange={CallSuperUserRoleRights} className="col-1 m-0 p-0" />

                                    </li>
                                </ul>

                                <Tree2 handleChange={handleChange} treeData={tree} suStatus={suStatus} suArr={suDefArr} defaultRights={defRoleMaster.roleright} virtual={vccode} />
                            </div>


                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}