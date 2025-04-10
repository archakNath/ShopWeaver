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

export default function Sidebar() {
    const [headerOpen, setHeaderOpen] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [openAccounts, setOpenAccounts] = useState(false);
    const [showMainHeader, setShowMainHeader] = useState(true);

    const [sections, setSections] = useState([
        { id: "header", icon: LayoutDashboard, label: "Header" },
        { id: "hero", icon: TextCursorInput, label: "Hero Section" },
        { id: "1", icon: UnfoldVertical, label: "Section 1" },
        { id: "2", icon: UnfoldVertical, label: "Section 2" },
        { id: "3", icon: UnfoldVertical, label: "Section 3" },
        { id: "4", icon: UnfoldVertical, label: "Section 4" },
        { id: "5", icon: UnfoldVertical, label: "Section 5" },
    ]);

    // const handleOptionsClick = () => {
    //     setShowMainHeader(false);
    //     setOpenOptions(true);
    //     setOpenAccounts(false);
    // };

    // const handleAccountsClick = () => {
    //     setShowMainHeader(false);
    //     setOpenAccounts(true);
    //     setOpenOptions(false);
    // };

    const handleBackClick = () => {
        setShowMainHeader(true);
        setOpenOptions(false);
        setOpenAccounts(false);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const updatedSections = Array.from(sections);
        const [reorderedItem] = updatedSections.splice(result.source.index, 1);
        updatedSections.splice(result.destination.index, 0, reorderedItem);

        setSections(updatedSections);
    };

    return (
        <div className="bg-black text-white min-h-screen p-4 w-64 fixed top-0 left-0 z-10 transition-all duration-300 ease-in-out sm:relative">
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    {showMainHeader ? (
                        <div
                            className="flex items-center cursor-pointer hover:text-gray-300"
                            onClick={() => setHeaderOpen(!headerOpen)}
                        >
                            <h1 className="text-xl font-bold">ShopWeaver</h1>
                            <ChevronDown
                                size={20}
                                className={`ml-2 transition-transform duration-300 ${headerOpen ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </div>
                    ) : (
                        <div
                            className="flex items-center cursor-pointer hover:text-gray-300"
                            onClick={handleBackClick}
                        >
                            <ChevronLeft size={20} />
                            <h1 className="text-xl font-bold ml-2">
                                {openOptions ? "Options" : "Accounts"}
                            </h1>
                        </div>
                    )}
                </div>

                {/* MAIN MENU */}
                {showMainHeader && (
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${headerOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <ul className="mt-4 space-y-4">
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId="sections">
                                    {(provided) => (
                                        <div {...provided.droppableProps} ref={provided.innerRef}>
                                            {sections.map((section, index) => (
                                                <Draggable
                                                    key={section.id}
                                                    draggableId={section.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={`flex items-center gap-3 cursor-pointer hover:text-gray-300 px-2 py-1 rounded ${snapshot.isDragging
                                                                ? "bg-gray-700"
                                                                : "bg-transparent"
                                                                }`}
                                                        >
                                                            {section.icon ? (
                                                                <section.icon size={20} />
                                                            ) : (
                                                                <Upload size={20} />
                                                            )}
                                                            <span>{section.label}</span>
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
                )}
            </div>
        </div>
    );
}
