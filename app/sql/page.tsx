
import Link from 'next/link';
import { Suspense } from "react";
import { Sql , zSql} from "./type";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import ParseSql from './ParseSql';

export const revalidate = 0;

// export const metadata = {
//     title: "List Notes",
// }
type Props = {
    item: Sql;
}
export default async function Page() {

    // 2. APIを用いたデータ取得
    return (
        <main className="mx-2 sm:mx-4 relative">

            <h2 className='mb-6 text-gray-400 text-xs'>Parse SQL</h2>
           
<ParseSql></ParseSql>
        </main>
    )
}

