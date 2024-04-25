import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const EmployeeUpdate = () => {
    const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    useEffect(() => {
        setId(localStorage.getItem('EmpId'));
        setName(localStorage.getItem('Name'));
        setDepartment(localStorage.getItem('Department'));
        setAge(localStorage.getItem('Age'));
        setGender(localStorage.getItem('Gender'));
        setSalary(localStorage.getItem('Salary'));
        setYearsOfExperience(localStorage.getItem('Experience'));
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !department || !age || !gender || !salary || !yearsOfExperience) {
            // Handle validation
            return;
        }
        const empData = {
            id: id,
            name: name,
            department: department,
            age: age,
            gender: gender,
            salary: salary,
            yearsOfExperience: yearsOfExperience
        };
        axios.put(`http://localhost:3001/employee/${id}`, empData)
            .then((res) => {
                alert('Updated successfully.');
                navigate('/');
            })
            .catch((err) => {
                console.error('Error:', err.message);
            });
    };
    return (
        <div>
            <div className="mt-5 row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="" style={{ "textAlign": "left" }}>
                            <div style={{ "textAlign": "center", color: 'black' }}>
                                <h2>EDIT EMPLOYEE</h2>
                            </div>
                            <div className="mt-5 card-body">
                                <div className="row">
                                    {/* <div row className="col-lg-12 ">
                                        <div className="form-group">
                                            <label>Employee ID</label>
                                            <input value={id} disabled className="form-control"></input>
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-sm-3 form-group">
                                                <label>Employee Name</label>
                                        </div>
                                        <div className="col-md-9 form-group">
                                            <input required value={name} onChange={(e) => setName(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="mt-3 row">
                                        <div className="col-sm-3 form-group">
                                            <label>Department</label>
                                            </div>
                                            <div className="col-md-9 form-group">
                                            <select value={department} onChange={(e) => setDepartment(e.target.value)} className="form-control">
                                                <option value=""></option>
                                                <option value="Development">Development</option>
                                                <option value="Testing">Testing</option>
                                                <option value="Sales">Sales</option>
                                                <option value="Support">Support</option>
                                              
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-3 row">
                                        <div className="col-sm-3 form-group">
                                            <label>Age</label>
                                            </div>
                                            <div className="col-md-9 form-group">
                                            <input value={age} onChange={(e) => setAge(e.target.value)} className="form-control"></input>
                                            </div>
                                    </div>
                                    <div className="mt-3 row">
                                        <div className="col-sm-3 form-group">
                                            <label>Gender</label>
                                            </div>
                                            <div className="col-md-9 form-group">
                                            <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-control">
                                                <option value=""></option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                {/* Add other genders as needed */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-3 row">
                                        <div className="col-sm-3 form-group">
                                            <label>Salary</label>
                                            </div>
                                            <div className="col-md-9 form-group">
                                            <input value={salary} onChange={(e) => setSalary(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="mt-3 row">
                                        <div className="col-sm-3 form-group">
                                            <label>Experience</label>
                                            </div>
                                            <div className="col-md-9 form-group">
                                            <input value={yearsOfExperience} onChange={(e) => setYearsOfExperience(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="mt-3 col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="ms-3 btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default EmployeeUpdate;