import React from "react";

interface IPerson {
  name: string;
  title: string;
  github: string;
  twitter: string;
}

const Person = ({ person }: { person: IPerson }) => {
  return (
    <div>
      <h1> {person.name}</h1>
      <p>{person.title}</p>
    </div>
  );
};

export default Person;
