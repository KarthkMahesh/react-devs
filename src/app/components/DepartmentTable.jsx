"use client";
import {Table} from "@nextui-org/react";
import {TableHeader} from "@nextui-org/react";
import {TableBody} from "@nextui-org/react";
import {TableColumn} from "@nextui-org/react";
import {TableRow} from "@nextui-org/react";
import {TableCell} from "@nextui-org/react";
import '../globals.css';

const DepartmentTable = ({tableDetails}) => {
  return (

    <Table isStriped aria-label="Example static collection table ">
      <TableHeader>
        <TableColumn>Department Code</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Edit</TableColumn>
        <TableColumn>View</TableColumn>
        <TableColumn>Delete</TableColumn>
      </TableHeader>
      <TableBody>
        {tableDetails.map((item) => (
          <TableRow key={item.id}>
          <TableCell>{item.deptCode}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell><p className="text-blue">Edit</p></TableCell>
          <TableCell><p className="text-blue">View</p></TableCell>
          <TableCell><p className="text-red">Delete</p></TableCell>
        </TableRow>  
        ))}
        
      </TableBody>
    </Table>
  )
}

export default DepartmentTable