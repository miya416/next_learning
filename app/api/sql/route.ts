import { Parser} from "node-sql-parser/build/transactsql";
import { NextResponse, NextRequest } from "next/server";
import { zSql } from "@/app/sql/type";


export async function POST(req: NextRequest){
    const data = await req.json();
    const parcedData = zSql.parse(data);

    const parser = new Parser();
    const result = parser.astify(parcedData.sql,{database: 'transactsql'});
    const ret = JSON.stringify(result,null,2);
    parcedData.ast = ret;
    
    return NextResponse.json(parcedData)
}