# Firestore CSV importer

> This project allows you to import data from one or more csv files into your firebase collections

The usage is very simple:

* you must create a service account key file and place it on this folder with the name `serviceAccountKey.json`
* create a file named `fileNames.json`
  * Inside this file create a json with the name of the files to be imported
    * must be like this `["collection1", "collection2"]`
  * These files must be placed inside the files folder
  * The file name must be the same of the collection where the data will be saved

  after this just type in a terminal on this folder the command `node import.js`