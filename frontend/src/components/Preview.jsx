import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import { useStore } from "../store";

function Preview() {
  const { sections, reorderSections, addSection, addSubsection } = useStore();

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    reorderSections(result.source.index, result.destination.index);
  };

  const renderSectionCode = (id, subsections, index) => {
    let content;
    switch (id) {
      case "header":
        content = (
          <header className="flex w-full justify-between items-center p-3">
            <h1 className="font-bold">Admin</h1>
            <nav className="flex gap-5">
              <ul className="flex gap-3 items-center">
                <li>Shop</li>
                <li>Cart</li>
                <li>About us</li>
              </ul>
              <button className="bg-amber-200 py-2 px-3 rounded-sm">Login</button>
            </nav>
          </header>
        );
        break;
      case "hero":
        content = (
          <main
            style={{
              backgroundImage: `url(https://i.pinimg.com/736x/0a/d5/16/0ad516d7ee2277fab0a7c37aecab1cb8.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="text-white flex justify-center items-center p-10"
          >
            <div className="container flex justify-between items-center">
              <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold">Fresh Grocery at door step</h1>
                <h3 className="text-2xl">
                  We deliver fresh groceries to your doorstep
                </h3>
                <button className="bg-purple-900 py-2 px-3 rounded-sm w-fit">
                  Order now
                </button>
              </div>
              <img
                src="https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-cartoon-happy-school-boy-waving-hand-png-image_4691658.png"
                alt=""
              />
            </div>
          </main>
        );
        break;
      default:
        content = <div className="p-4">Default content for section {id}</div>;
    }

    return (
      <div className="space-y-3">
        {content}
        <div className="ml-4 mt-2">
          {subsections.map((sub, i) => (
            <div
              key={i}
              className="border mt-1 p-2 rounded bg-gray-100 text-sm"
            >
              Subsection: {sub}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-5 w-full bg-stone-100 max-[400px]:w-full">
      <h2 className="text-2xl font-bold mb-3">Preview</h2>
      <div id="sections-preview" className="w-full bg-white rounded-xl p-3">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="sections">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {sections.map((section, index) => (
                  <Draggable
                    key={section.id}
                    draggableId={section.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="mb-2"
                      >
                        <p
                          className="text-sm text-gray-400 cursor-move"
                          {...provided.dragHandleProps}
                        >
                          {section.label}
                        </p>
                        <div className="border-1 overflow-hidden border-dashed rounded-xl">
                          {renderSectionCode(section.id, section.subsections || [], index)}
                        </div>
                        {/* Add Subsection button placed outside the dotted box */}
                        <div className="mt-3 text-center">
                          <button
                            onClick={() => addSubsection(index)}
                            className="bg-gray-400 text-white py-1 px-3 rounded-sm hover:bg-black"
                          >
                            + Add Subsection
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="flex justify-end mt-5 p-3">
          <button
            onClick={addSection}
            className="bg-black text-white py-2 px-4 rounded shadow-md"
          >
            + Add Section
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
