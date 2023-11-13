import React from 'react';
import Subscribepage from "./components/subscribepage";
import Confirmpage from "./components/confirmpage";
import { useState } from 'react';

export default function App() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
    <Subscribepage openmodal={openModal} />
    <Confirmpage isopen={isOpen} closemodal={closeModal} />
    </>
  )
}