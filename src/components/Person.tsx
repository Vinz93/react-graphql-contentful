import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

interface IPerson {
  name: string;
  title: string;
  github: string;
  twitter: string;
  image: {
    title: string;
    url: string;
  };
  bio: {
    json: any;
  };
}

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: any) => {
      return <h1 className="font-bold text-green-500">{children}</h1>;
    },
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      return <p className="text-blue-400 lg:max-w-md mt-4">{children} </p>;
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      return (
        <a className="text-pink-200 font-bold" href={node.data.uri}>
          {children}
        </a>
      );
    },
  },
};

const Person = ({ person }: { person: IPerson }) => {
  return (
    <div className="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
      <div className="top h-64 w-full bg-blue-600 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
          className="bg w-full h-full object-cover object-center absolute z-0"
        />
        <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          <img src={person.image.url} alt={person.image.title} />
          <h1 className="text-2xl font-semibold">{person.name}</h1>
          <h4 className="text-sm font-semibold">{person.title}</h4>
        </div>
      </div>
      {documentToReactComponents(person.bio.json, RICHTEXT_OPTIONS)}
    </div>
  );
};

export default Person;
