#!/usr/bin/env node

import fs from "fs";
import { convertDate, convertGender, removeSpace } from "../utils/index.js";
import { sort1, sort2, sort3 } from "../utils/sort.js";

const INPUT_TYPES = ["comma", "pipe", "space"];

export function parseLine(type, line) {
  if (!type || !INPUT_TYPES.includes(type)) {
    console.error("Parse Line Error: Invalid type");
    return;
  }

  if (!line) {
    console.error("Parse Line Error: Invalid line");
    return;
  }

  switch (type) {
    case "comma":
      const commaData = line.split(",").map((item) => removeSpace(item));
      return {
        lastName: commaData[0],
        firstName: commaData[1],
        gender: commaData[2],
        dateOfBirth: commaData[4],
        favoriteColor: commaData[3],
      };
    case "pipe":
      const pipeData = line.split("|").map((item) => removeSpace(item));
      return {
        lastName: pipeData[0],
        firstName: pipeData[1],
        gender: convertGender(pipeData[3]),
        dateOfBirth: convertDate(pipeData[5]),
        favoriteColor: pipeData[4],
      };
    case "space":
      const spaceData = line.split(" ").map((item) => removeSpace(item));
      return {
        lastName: spaceData[0],
        firstName: spaceData[1],
        gender: convertGender(spaceData[3]),
        dateOfBirth: convertDate(spaceData[4]),
        favoriteColor: spaceData[5],
      };
    default:
      break;
  }
}

export function readFiles() {
  let inputData = [];

  try {
    for (const type of INPUT_TYPES) {
      const fileContent = fs.readFileSync(`./files/${type}.txt`, "utf-8");
      for (const line of fileContent.split(/\r?\n/)) {
        inputData.push(parseLine(type, line));
      }
    }
  } catch (error) {
    console.error("File Read Error: ", error.message);
  }

  return inputData;
}

export function getResult(sortData) {
  if (!sortData) {
    console.error("Get Result Error: Invalid sort data");
    return;
  }

  let result = "";
  sortData.forEach((data) => {
    result += Object.values(data).join(" ") + "\n";
  });

  return result;
}

function run() {
  const inputData = readFiles();
  const sort1Data = sort1(inputData);
  const sort2Data = sort2(inputData);
  const sort3Data = sort3(inputData);

  const sort1Result = getResult(sort1Data);
  const sort2Result = getResult(sort2Data);
  const sort3Result = getResult(sort3Data);

  console.log(sort1Result);
  console.log(sort2Result);
  console.log(sort3Result);
}

run();
