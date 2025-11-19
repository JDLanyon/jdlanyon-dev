'use client'

import "@/app/globals.css";


interface ButtonProps {
  text?: string;
  href?: string;
  target_blank?: boolean;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

// TODO: auto generate buttons based on existing headings


export default function Tags({tags} : {tags : string[]}) {
  return (
    <div className="flex flex-wrap grow h-auto items-center justify-center">
      {tags ? tags.map(t => (
          <a key={t} className="font-bold text-xl! py-2 mx-8">{t}</a>
      )) : null}
    </div>
  )
}