import * as React from 'react';
import BomRoutingConfig_Page from '../../Pages/Master/BomRoutingConfiguration/bom-routing-config.component';
import useFetch from '../Hooks/useFetch';
import BoM_Parent from '../HOC/loadBOM';
import { toast } from 'react-toastify';

interface IProps {
   api : any
}
interface IState {
    series: any[],
    process: any[],
    itemCode: any[]

}
class BOM_Routing extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            series: [],
            process: [],
            itemCode:[]
        }
    }

  
   getList = async () => {
       let SeriesUrl = '/api/GetSeries?TranType=12&SrType=0&Company=46&Customer=57';
       try {
        let { res, got } = await this.props.api(SeriesUrl, "GET", '');
       if (res.status == 200) this.setState({ series: got.data }) 
       else toast.error(res.msg);       }
       catch (err) {
           alert(err)
       }
    }
    getProcess = async () => {
        let processUrl = '/api/LoadMasterData?MasterType=11&Company=46&Customer=57';
        try {
            let { res, got } = await this.props.api(processUrl, 'GET', '');
            if (res.status == 200) {

                const itm2: any = got.data.map((opn: any) => ({ label: opn.name, value: opn.code }));
/*                console.log('items................',itm2)*/
                this.setState({ process: itm2 })
            }
            else toast.error(res.msg);
        } catch (err) {
            alert(err)
        }
    }
    componentDidMount() {
        this.getList();
        this.getProcess();
    }


    render() {
        return (
            <BomRoutingConfig_Page options={this.state.series} process={this.state.process } />
            )
    }
}

const BOM = BoM_Parent(BOM_Routing);
export default BOM;