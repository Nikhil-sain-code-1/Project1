import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminComponents/AdminHeader";
import FireDb from "../Fire";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Showcontact = () => {
    const [msg, setMsg] = useState({});

    useEffect(() => {
        FireDb.child("Contact").on("value", (snapshot) => {
            const form = snapshot.val();
            setMsg(form || {});
        });
    }, []);

    const excel = () => {
        const dataArray = Object.keys(msg).map((key) => ({
            Name: msg[key].Name,
            Email: msg[key].Email,
            Phone: msg[key].Phone,
            Message: msg[key].Message,
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataArray);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });

        const file = new Blob([excelBuffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });

        saveAs(file, "ContactData.xlsx");
    };

    return (
        <div>
            <AdminHeader />
            <div className="admin-contact">
                <button style={{ margin: "30px" }} onClick={excel}>
                    Convert Into Excel
                </button>
                <table border={2}>
                    <thead>
                        <tr>
                            <th>S no.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(msg).map((key, index) => (
                            <tr key={key}>
                                <td>{index + 1}</td>
                                <td>{msg[key].Name}</td>
                                <td>{msg[key].Email}</td>
                                <td>{msg[key].Phone}</td>
                                <td>{msg[key].Message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Showcontact;
