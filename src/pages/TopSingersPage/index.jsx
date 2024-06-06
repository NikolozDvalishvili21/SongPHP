import React, { useState, useEffect } from "react";
import CollapsibleExample from "../../components/Navbar";
import { Table } from "flowbite-react";
import axios from "axios";

const PageOfSingers = () => {
  const [singers, setSingers] = useState([]);

  useEffect(() => {
    const fetchSingers = async () => {
      try {
        const response = await axios.get('http://localhost/Project/get_singers.php');
        if (response.data.status === 'success') {
          setSingers(response.data.singers);
        } else {
          console.error('Error fetching singers:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching singers:', error);
      }
    };

    fetchSingers();
  }, []);

  return (
    <>
      <CollapsibleExample />
      <div className="overflow-x-auto p-8 font-tkt">
        <Table style={{ fontSize: "17px" }}>
          <Table.Head>
            <Table.HeadCell className="p-6" style={{ fontSize: "17px", backgroundColor: "black", color: "white" }}>Artist</Table.HeadCell>
            <Table.HeadCell style={{ fontSize: "17px", backgroundColor: "black", color: "white" }}>Top Album</Table.HeadCell>
            <Table.HeadCell style={{ fontSize: "17px", backgroundColor: "black", color: "white" }}>Age</Table.HeadCell>
            <Table.HeadCell style={{ backgroundColor: "black", color: "white" }}>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {singers.map((singer, index) => (
              <Table.Row key={index} className={index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-black dark:bg-gray-700"}>
                <Table.Cell className="whitespace-nowrap font-medium p-6">
                  <div className="song-and-author">
                    <p style={{ color: index % 2 === 0 ? "black" : "white" }}>{singer.FirstName} {singer.LastName}</p>
                  </div>
                </Table.Cell>
                <Table.Cell style={{ color: index % 2 === 0 ? "black" : "white" }}>{singer.Top_Album}</Table.Cell>
                <Table.Cell style={{ color: index % 2 === 0 ? "black" : "white" }}>{singer.Age}</Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-orange-600 hover:underline">See Profile</a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default PageOfSingers;
