import React from "react";

interface IPerson {
  name: string;
  title: string;
  github: string;
  twitter: string;
  image: {
    title: string;
    url: string;
  };
}

const Person = ({ person }: { person: IPerson }) => {
  return (
    <div className={"md:flex"}>
      <h1 className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
        {person.name}
      </h1>
      <p>{person.title}</p>
      <img src={person.image.url} alt={person.image.title} />
    </div>
  );
};

export default Person;
