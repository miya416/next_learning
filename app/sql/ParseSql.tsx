'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Sql, zSql } from "./type";

type Props = {
    item: Sql;
}

const ParseSql: React.FC = () => {
    const [title, setTitle] = useState("");
    const [sql, setSql] = useState("");
    const [ast, setAst] = useState("");
    const parseSql = async () => {
        const res = await fetch(`api/sql`, {
            cache: 'no-store',
            method: 'POST',
            body: JSON.stringify({ title, sql, ast }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        const ret = zSql.parse(data);

        setAst(ret.ast)

        return ret;
    };
    // 2. APIを用いたデータ取得
    return (
        <div className="flex flex-col bg-gray-100 rounded-lg relative p-5 gap-2.5">
            <div className="sm:col-span-2">
                <label htmlFor="title" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Title</label>
                <input
                    name="title"
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-pink-300 rounded outline-none transition duration-100 px-3 py-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="sm:col-span-2">こんにちは</div>
            <div className="sm:col-span-2">
                <label htmlFor="sql" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Sql</label>
                <textarea
                    name="sql"
                    className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-pink-300 rounded outline-none transition duration-100 px-3 py-2"
                    value={sql}
                    onChange={(e) => setSql(e.target.value)}
                ></textarea>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="ast" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Ast</label>
                <textarea
                    name="ast"
                    className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-pink-300 rounded outline-none transition duration-100 px-3 py-2"
                    value={ast}
                    onChange={(e) => setAst(e.target.value)}
                ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-2.5">
                <button onClick={parseSql} className="inline-block bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus-visible:ring ring-pink-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-2">Parse!</button>
            </div>
        </div>
    )


}

export default ParseSql;