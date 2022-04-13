import React,{useState,useEffect} from 'react'
import { Table,Radio, Divider } from 'antd'
import 'antd/dist/antd.css';
import axios from 'axios';
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];
const columns = [
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',    
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render:name =>`${name.title}. ${name.first}  ${name.last}`
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'location',
    key: 'location',
    render:location=>`${location.street.name},  ${location.city}, ${location.state}, ${location.country}`
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};


function Employee(props) {
  const [selectionType, setSelectionType] = useState('checkbox'); 
  const [emp, setEmp]=useState();
  useEffect(()=>{
    axios.post('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
    .then((response)=>{
        setEmp(response.data)
    })
  },[])
  console.log(emp)

  return (
    <div>Employee
    <pre>{JSON.stringify(emp)}</pre>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />
      <Table dataSource={emp}
         rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
         columns={columns}/>
    </div>
  )
}

export default Employee