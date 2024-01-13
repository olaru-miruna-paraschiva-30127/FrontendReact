/*import Employee from "./component/Employee";


function App() {
  return (
      <div className="app">

        <Employee/>

      </div>
  );
}

export default App;*/


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

import {
    Route,
    Routes,
    useNavigate,
} from 'react-router-dom';
import {Input, Link} from "@mui/material";
import {type} from "@testing-library/user-event/dist/type";


export default function App() {
    const navigate = useNavigate();


    const navigateAddEmployee = () => {
        // 👇️ navigate to /
        navigate('/addemployee');
    };
    const navigateAddDepartment = () => {
        // 👇️ navigate to /
        navigate('/adddepartment');
    };
    const navigateEditEmployee = () => {
        // 👇️ navigate to /
        navigate('/editemployee');
    };
    const navigateEditDepartment = () => {
        // 👇️ navigate to /
        navigate('/editdepartment');
    };
    const navigateShowEmployee = () => {
        // 👇️ navigate to /
        navigate('/showemployee');
    };
    const navigateShowDepartment = () => {
        // 👇️ navigate to /
        navigate('/showdepartment');
    };
    const navigateDeleteEmployee = () => {
        // 👇️ navigate to /
        navigate('/deleteemployee');
    };
    const navigateDeleteDepartment = () => {
        // 👇️ navigate to /
        navigate('/deletedepartment');
    };





    return (
      <div>

            <h1> Departments</h1>
            <Button onClick={navigateAddDepartment} style={{padding: "14px"}} variant="contained">Add
                department</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={navigateShowDepartment} style={{padding:"14px"}} variant="contained">Show all departments</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={navigateEditDepartment} style={{padding:"14px"}} variant="contained">Edit department</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={navigateDeleteDepartment} style={{padding:"14px"}} variant="contained">Delete department</Button>

            <hr/>
            <h1>Employees</h1>
            <Button onClick={navigateAddEmployee} style={{padding:"14px"}} variant="contained">Add employee</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={navigateShowEmployee} style={{padding:"14px"}} variant="contained">Show all employees</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={navigateEditEmployee} style={{padding:"14px"}} variant="contained">Edit employee</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={navigateDeleteEmployee} style={{padding:"14px"}} variant="contained">Delete employee</Button>
            <hr/>

            <Routes>

                <Route path="/addemployee" element={<AddEmployee/>}/>
                <Route path="/adddepartment" element={<AddDepartment/>}/>

                <Route path="/showdepartment" element={<DisplayDepartment/>}/>
                <Route path="/showemployee" element={<DisplayEmployee/>}/>
                <Route path="/editdepartment" element={<EditDepartment/>}/>
                <Route path="/editemployee" element={<EditEmployee/>}/>
                <Route path="/deletedepartment" element={<DeleteDepartment/>}/>
                <Route path="/deleteemployee" element={<DeleteEmployee/>}/>


            </Routes>
        </div>

    );
}
function Login() {
    const navigate = useNavigate();
    const [formState, setFormState] = React.useState({
        id:"",
        name: "",
        password: ""
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        e.preventDefault();
        setFormState({
            ...formState,
            [type]: e.target.value
        })
    }
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/', {
            method: 'POST',
          //
            headers: {
                // needed so express parser says OK to read
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    id: formState.id,
                name: formState.name,

                password: formState.password
            })
        })
        //if (response.status !== 200) {
        if(formState.id == 1){
           // return alert("Something went wrong");
            navigate("/addemployee");
        }
        else{}
        //navigate("/addemployee");
    }
    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Id</label>
                    <input onChange={(e) => onChange(e, "id")} value={formState.id}/>
                </div>
                <div>
                    <label>Name</label>
                    <input onChange={(e) => onChange(e, "name")} value={formState.name}/>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={(e) => onChange(e, "password")} type="password" value={formState.password}/>
                </div>
                <button>Submit</button>
            </form>

        </div>
    );
}

function AddEmployee() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [depId, setDepId] = useState("");
    const [managerId, setManagerId] = useState("");
    const [email, setEmail] = useState("");

    const submitData =(e) =>{
        e.preventDefault();
        const studentData = {id,name,depId,managerId,email};
        /**Here, we are using a post request to send data to the api */
        fetch("http://localhost:8080/employee/add",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(studentData)
            })
            .then(res=>console.log(res))
            .catch(e=>console.log(e))
    };
    return (
        <div>
            <h1>Add Employee</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 0.5, width: '50%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="ID" variant="outlined" onChange={(e)=>setId(e.target.value)} />
                <TextField label="Name" variant="outlined" onChange={(e)=>setName(e.target.value)} />
                <TextField label="Department ID" variant="outlined" onChange={(e)=>setDepId(e.target.value)} />
                <TextField label="Manager ID" variant="outlined" onChange={(e)=>setManagerId(e.target.value)} />
                <TextField label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} />
                <Button onClick={submitData} style={{padding:"14px"}} variant="contained">Add Employee</Button>

            </Box>

        </div>
    );
}
function AddDepartment() {
    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [parentId, setParentId] = useState("");


    const submitData =(e) =>{
        e.preventDefault();
        const studentData = {id,description,parentId};
        /**Here, we are using a post request to send data to the api */
        fetch("http://localhost:8080/department/add",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(studentData)
            })
            .then(res=>console.log(res))
            .catch(e=>console.log(e))
    };
    return (
        <div>
            <h1>Add Department</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 0.5, width: '50%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="ID" variant="outlined" onChange={(e)=>setId(e.target.value)} />
                <TextField label="Description" variant="outlined" onChange={(e)=>setDescription(e.target.value)} />
                <TextField label="Parent ID" variant="outlined" onChange={(e)=>setParentId(e.target.value)} />

                <Button onClick={submitData} style={{padding:"14px"}} variant="contained">Add Department</Button>

            </Box>

        </div>
    );
}


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'description', headerName: 'Description', width: 130 },
    { field: 'parentId', headerName: 'Parent ID', width: 130 },
];

 function DisplayDepartment() {
    const [departmentsArray, setDepartments] = useState([]);

    /**Here, we are fetching student from the api */
    useEffect(()=>{
        fetch("http://localhost:8080/department")
            .then(res=>res.json())
            .then(departmentObj=>setDepartments(departmentObj))
            .catch(e=>console.log(e))
    },[departmentsArray]);


    return (
        <div style={{height: 300, width: '40%', margin: 'auto', marginBottom: '55px', marginTop: '30px'}}>
            <h2> Departments Data From Database</h2>

            <DataGrid
                rows={departmentsArray}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />

        </div>
    );
 }


const columnss = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'dep_id', headerName: 'Department ID', width: 130 },
    { field: 'manager_id', headerName: 'Manager ID', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
];

function DisplayEmployee() {
    const [departmentsArray, setDepartments] = useState([]);

    /**Here, we are fetching student from the api */
    useEffect(()=>{
        fetch("http://localhost:8080/employee")
            .then(res=>res.json())
            .then(departmentObj=>setDepartments(departmentObj))
            .catch(e=>console.log(e))
    },[departmentsArray]);


    return (
        <div style={{ height: 300, width: '40%', margin:'auto', marginBottom:'55px', marginTop:'30px' }}>
            <h2> Employees Data From Database</h2>
            <DataGrid
                rows={departmentsArray}
                columns={columnss}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}



function EditEmployee() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [depId, setDepId] = useState("");
    const [managerId, setManagerId] = useState("");
    const [email, setEmail] = useState("");

    const submitData =(e) =>{
        e.preventDefault();
        const studentData = {id,name,depId,managerId,email};
        /**Here, we are using a post request to send data to the api */
        fetch("http://localhost:8080/employee/editemployee",
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(studentData)
            })
            .then(res=>console.log(res))
            .catch(e=>console.log(e))
    };
    return (
        <div>
            <h1>Edit Employee</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 0.5, width: '50%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="ID" variant="outlined" onChange={(e)=>setId(e.target.value)} />
                <TextField label="Name" variant="outlined" onChange={(e)=>setName(e.target.value)} />
                <TextField label="Department ID" variant="outlined" onChange={(e)=>setDepId(e.target.value)} />
                <TextField label="Manager ID" variant="outlined" onChange={(e)=>setManagerId(e.target.value)} />
                <TextField label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} />
                <Button onClick={submitData} style={{padding:"14px"}} variant="contained">Edit Employee</Button>

            </Box>

        </div>
    );
}
function EditDepartment() {
    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [parentId, setParentId] = useState("");


    const submitData =(e) =>{
        e.preventDefault();
        const studentData = {id,description,parentId};
        /**Here, we are using a post request to send data to the api */
        fetch("http://localhost:8080/department/editdepartment",
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(studentData)
            })
            .then(res=>console.log(res))
            .catch(e=>console.log(e))
    };
    return (
        <div>
            <h1>Edit Department</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 0.5, width: '50%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="ID" variant="outlined" onChange={(e)=>setId(e.target.value)} />
                <TextField label="Description" variant="outlined" onChange={(e)=>setDescription(e.target.value)} />
                <TextField label="Parent ID" variant="outlined" onChange={(e)=>setParentId(e.target.value)} />

                <Button onClick={submitData} style={{padding:"14px"}} variant="contained">Edit Department</Button>

            </Box>

        </div>
    );
}

function DeleteEmployee() {
    const handleDelete = (id) => {
        fetch("http://localhost:8080/employee/deleteemployee/" + id, {
            method: "DELETE",
            headers: {"Accept": "application/json", "Content-Type": "application/json"}
        }).then(() => {

        });
    }

    const [message, setMessage] = useState('');
    const handleChange = (event) => {
        // 👇 Get input value from "event"
        setMessage(event.target.value);
    };
    return (
        <div>
            <h1>Delete Employee</h1>
            <Input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                onClick={handleDelete(parseInt(message))}
            />
        </div>
    );
}


function DeleteDepartment() {
    const handleDelete = (id) => {
        fetch("http://localhost:8080/department/deletedepartment/" + id, {
            method: "DELETE",
            headers: {"Accept": "application/json", "Content-Type": "application/json"}
        }).then(() => {

        });
    }

    const [message, setMessage] = useState('');
    const handleChange = (event) => {
        // 👇 Get input value from "event"
        setMessage(event.target.value);
    };
    return (
        <div>
            <h1>Delete Department</h1>
            <Input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                onClick={handleDelete(parseInt(message))}
            />
        </div>
    );
}





