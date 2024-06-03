import React from "react";
import CollapsibleExample from "../../components/Navbar";
import { Table } from "flowbite-react";
// import "../TopSongsPage/style.css"

const PageOfSingers = () => {
  return (
    <>
      <CollapsibleExample />
      <div className="overflow-x-auto p-8 font-tkt">
        <Table>
          <Table.Head className="dark:bg-black" style={{backgroundColor: "black", color: "black" }}>
            <Table.HeadCell className="p-6">Artist</Table.HeadCell>
            <Table.HeadCell>Top Album</Table.HeadCell>
            <Table.HeadCell>Age</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body>
            <Table.Row className="dark:bg-white">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black p-6">
                <div className="song-and-author">
                  <p>Frank Ocean</p>
                </div>
              </Table.Cell>
              <Table.Cell>Blond</Table.Cell>
              <Table.Cell>30</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:underline"
                >
                  See Profile
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-black">
              <Table.Cell className="whitespace-nowrap font-medium text-white p-6">
                <div className="song-and-author">
                  <p>Playboi Carti</p>
                </div>
              </Table.Cell>
              <Table.Cell style={{ color: "white" }}>Die Lit</Table.Cell>
              <Table.Cell style={{ color: "white" }}>27</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:underline"
                >
                  See Profile
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium p-6 text-black">
                <div className="song-and-author">
                  <p>Soulja Boy</p>
                </div>
              </Table.Cell>
              <Table.Cell>SouljaBoyTellEm</Table.Cell>
              <Table.Cell>34</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:underline"
                >
                  See Profile
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-black dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium p-6 text-black">
                <div className="song-and-author" style={{color: "white"}}>
                  <p>Travis Scott</p>
                </div>
              </Table.Cell>
              <Table.Cell style={{color: "white"}}>SouljaBoyTellEm</Table.Cell>
              <Table.Cell style={{color: "white"}}>34</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:underline"
                >
                  See Profile
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default PageOfSingers;
