import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import './Mat.css'
import AddIcon from '@material-ui/icons/Add';
import { Checkbox, Select, MenuItem } from '@material-ui/core'
import Navbar from '../Navbar/Navbar'
function Mat_table() {
    const [filter, setFilter] = useState(true)
    const [tableData, setTableData] = useState([]);
    const columns = [
        { title: 'Name', field: 'name.first', sorting: true, filtering: true, },
        { title: 'Mail ID', field: 'email' },
        { title: 'Country', field: 'location.country' }
    ]
    useEffect(() => {
        fetch("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
            .then(resp => resp.json())
            .then(resp => {
                setTableData(resp)
            })
    }, [])
    const handleChange = () => {
        setFilter(!filter)
    }
    return (
        <>
        <Navbar/>
            <div className="App">
                
                <h4 align='center'>Material Table All Options</h4>
                <MaterialTable columns={columns} data={tableData}
                    editable={{
                        onRowAdd: (newRow) => new Promise((resolve, reject) => {
                            setTableData([...tableData, newRow])

                            setTimeout(() => resolve(), 500)
                        }),
                        onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                            const updatedData = [...tableData]
                            updatedData[oldRow.tableData.id] = newRow
                            setTableData(updatedData)
                            setTimeout(() => resolve(), 500)
                        }),
                        onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                            const updatedData = [...tableData]
                            updatedData.splice(selectedRow.tableData.id, 1)
                            setTableData(updatedData)
                            setTimeout(() => resolve(), 1000)

                        })
                    }}
                    actions={[
                        {
                            icon: () => <GetAppIcon />,
                            tooltip: "Click me",
                            onClick: (e, data) => console.log(data),
                        },
                        {
                            icon: () => <Checkbox
                                checked={filter}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />,
                            tooltip: "Hide/Show Filter option",
                            isFreeAction: true
                        }
                    ]}
                    onSelectionChange={(selectedRows) => console.log(selectedRows)}
                    options={{
                        sorting: true, search: true,
                        searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
                        filtering: filter, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
                        paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
                        exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
                        showSelectAllCheckbox: false, showTextRowsSelected: true,
                        grouping: true, columnsButton: true,
                        rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
                        headerStyle: { background: "#808080", color: "#fff" }
                    }}
                    title="Employee Data"
                    icons={{ Add: () => <AddIcon /> }} />
            </div>
        </>
    )
}
export default Mat_table;
