import React from 'react';

import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";

const Tables = ({data, columns, heightTable, options}) => {

    const dynamicColumns = columns.map((col, i) => {
        if (col.width) {
            return <Column className={col.class} key={col.field} field={col.field} header={col.header}  headerStyle={{ width: col.width }}/>;
        } else {
            return <Column className={col.class} key={col.field} field={col.field} header={col.header}/>;
        }
    });

    const actionBodyTemplate = () => ( options );

    return (
        <div className="table-content">
            <DataTable value={data} scrollable scrollHeight={heightTable}>
                {dynamicColumns}
                {
                    options &&
                    <Column header="Opciones" headerStyle={{ width: '160px' }}  body={actionBodyTemplate}/>

                }
            </DataTable>
        </div>
    );
};

export default Tables;
