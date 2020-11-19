import React, { Component } from 'react';
import ReactTable from 'react-table-6';

class Mytable extends Component {
    render() {
        //creating data for table
        const tabledata=[]
        //creating the column for table
        const col=[{Header:"Name",accessor:""},{Header:"Age",accessor:""}]

        return (
            <div>
                <ReactTable 
                    data={tabledata} 
                    columns={col} 
                    defaultPageSize={2} // be default user can see 2 pages
                    pageSizeOptions={[2,4,6,8,10]}//user selects the number of page wish to see
                />

            </div>
        ); 
    }
}

export default Mytable;