import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const EmployeeCreate = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [validation, setValidation] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id || !name || !department || !age || !gender || !salary || !yearsOfExperience) {
            setValidation(true);
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

        axios.post("http://localhost:3001/employee", empData)
            .then((res) => {
                alert('Saved successfully.');
                navigate('/');
            })
            .catch((err) => {
                console.error('Error:', err.message);
            });
    };

    return (
        <div>
 
          
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div style={{ "textAlign": "center", color: 'black' }}>
                                <h2> Create Employee</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Employee ID</label>
                                            <input required value={id} onChange={(e) => setId(e.target.value)} className="form-control"></input>
                                            {validation && !id && <span className="text-danger">Enter the Employee ID</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onChange={(e) => setName(e.target.value)} className="form-control"></input>
                                            {validation && !name && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Department</label>
                                            <select value={department} onChange={(e) => setDepartment(e.target.value)} className="form-control">
                                                <option value="">Select Department</option>
                                                <option value="Development">Development</option>
                                                <option value="Testing">Testing</option>
                                                <option value="Sales">Sales</option>
                                                <option value="Support">Support</option>
                                              
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Age</label>
                                            <input value={age} onChange={(e) => setAge(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-control">
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                {/* Add other genders as needed */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Salary</label>
                                            <input value={salary} onChange={(e) => setSalary(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Years of Experience</label>
                                            <input value={yearsOfExperience} onChange={(e) => setYearsOfExperience(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12" style={{ paddingTop: '50px'}}>
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
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

export default EmployeeCreate;
