"use client";
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { Card, CardBody } from '@nextui-org/react';
import {Skeleton} from "@nextui-org/skeleton";
import {Input} from "@nextui-org/input";
import {Table} from "@nextui-org/react";
import {TableHeader} from "@nextui-org/react";
import {TableBody} from "@nextui-org/react";
import {TableColumn} from "@nextui-org/react";
import {TableRow} from "@nextui-org/react";
import {TableCell} from "@nextui-org/react";
import Main from "./components/Main"
// import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";

export default function Home() {
  return (
    <>
    <div className=' w-full  text-white' style={{fontWeight:'bold',padding:'40px',backgroundColor:'black',height:'5rem',display:'flex',alignItems : 'center'}}>
      <p style={{fontSize:'35px'}} >dSalary</p>
    </div>
   <Main/>
    </>
    
  );
}
