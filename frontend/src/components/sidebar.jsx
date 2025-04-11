import React, { useState } from "react";
import {
    LayoutDashboard,
    TextCursorInput,
    UnfoldVertical,
    Upload,
    ChevronDown,
    ChevronLeft,
} from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useStore } from "../store";


export default function Sidebar() {
    const {
        headerOpen,
        setHeaderOpen,
        openSubHeader,
        setOpenSubHeader,
        subHeaderOpen,
        setSubHeaderOpen,
        sections,
        subOptions,
        reorderSections,
        reorderSubOptions,
    } = useStore();

    const handleItemClick = (sectionId) => {
        setOpenSubHeader(sectionId);
    };

    const handleBackClick = () => {
        setOpenSubHeader(null);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        if (openSubHeader) {
            reorderSubOptions(result.source.index, result.destination.index);
        } else {
            reorderSections(result.source.index, result.destination.index);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen p-4 w-64 fixed top-0 left-0 z-10 transition-all duration-300 ease-in-out sm:relative">
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    {openSubHeader ? (
                        <div
                            className="flex items-center cursor-pointer hover:text-gray-300"
                            onClick={handleBackClick}
                        >
                            <ChevronLeft size={20} />
                            <h1 className="text-xl font-bold ml-2">
                                {sections.find(s => s.id === openSubHeader)?.label}
                            </h1>
                            <ChevronDown
                                size={20}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSubHeaderOpen(!subHeaderOpen);
                                }}
                                className={`ml-auto transition-transform duration-300 ${subHeaderOpen ? "rotate-180" : "rotate-0"}`}
                            />
                        </div>
                    ) : (
                        <div
                            className="flex items-center cursor-pointer hover:text-gray-300"
                            onClick={() => setHeaderOpen(!headerOpen)}
                        >
                            <h1 className="text-xl font-bold">ShopWeaver</h1>
                            <ChevronDown
                                size={20}
                                className={`ml-2 transition-transform duration-300 ${headerOpen ? "rotate-180" : "rotate-0"}`}
                            />
                        </div>
                    )}
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        (openSubHeader && subHeaderOpen) || (!openSubHeader && headerOpen)
                            ? "max-h-[1000px] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <ul className="mt-4 space-y-4">
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="menu">
                                {(provided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}>
                                        {(openSubHeader ? subOptions : sections).map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <li
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        onClick={() => !openSubHeader && handleItemClick(item.id)}
                                                        className={`flex items-center gap-3 cursor-pointer hover:text-gray-300 px-2 py-1 rounded ${snapshot.isDragging ? "bg-gray-700" : "bg-transparent"}`}
                                                    >
                                                        {item.icon ? (
                                                            <item.icon size={20} />
                                                        ) : (
                                                            <Upload size={20} />
                                                        )}
                                                        <span>{item.label}</span>
                                                    </li>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </ul>
                </div>
            </div>
        </div>
    );
}