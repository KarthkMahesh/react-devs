
import DepartmentTable from "./DepartmentTable"
import {Card, CardBody} from "@nextui-org/react";
import "./main.css"

const Main = () => {

const tableDetails =[
    {
        "id": 1023,
        "deptCode": "ACCN",
        "description": "ACCOUNTANT"
    },
    {
        "id": 5678,
        "deptCode": "HRMG",
        "description": "HUMAN RESOURCES"
    },
    {
        "id": 2345,
        "deptCode": "ITDT",
        "description": "IT DEPARTMENT"
    },
    {
        "id": 6789,
        "deptCode": "MKTG",
        "description": "MARKETING"
    },
    {
        "id": 3456,
        "deptCode": "FNCE",
        "description": "FINANCE"
    },
    {
        "id": 7890,
        "deptCode": "OPRS",
        "description": "OPERATIONS"
    },
    {
        "id": 4567,
        "deptCode": "SLDS",
        "description": "SALES"
    },
    {
        "id": 8912,
        "deptCode": "RND",
        "description": "RESEARCH AND DEVELOPMENT"
    }
]
    
  return (
    <>
    <br/>
    <br/>
    <br/>
    <div style={{padding:'20px'}}>
     <Card>
      <CardBody>
        <p className="header-text ">| Department Details</p>
      </CardBody>
    </Card>
    </div>
    <div style={{padding:'20px'}}>
          <DepartmentTable style={{margin:'3rem'}} tableDetails = {tableDetails}/>
    </div>
    </>
    )
}

export default Main