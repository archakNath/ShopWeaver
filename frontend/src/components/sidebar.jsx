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
    const [openSubHeader, setOpenSubHeader] = useState(null);
    const [subHeaderOpen, setSubHeaderOpen] = useState(true);

    const [sections, setSections] = useState([
        { id: "header", icon: LayoutDashboard, label: "Header" },
        { id: "hero", icon: TextCursorInput, label: "Hero Section" },
        { id: "1", icon: UnfoldVertical, label: "Section 1" },
        { id: "2", icon: UnfoldVertical, label: "Section 2" },
        { id: "3", icon: UnfoldVertical, label: "Section 3" },
        { id: "4", icon: UnfoldVertical, label: "Section 4" },
        { id: "5", icon: UnfoldVertical, label: "Section 5" },
    ]);

    const headerSubOptions = [
        { id: "header-sub1", icon: UnfoldVertical,label: "Header: Sub Section 1" },
        { id: "header-sub2", icon: UnfoldVertical,label: "Header: Sub Section 2" },
        { id: "header-sub3", icon: UnfoldVertical,label: "Header: Sub Section 3" },
    ];

    const heroSubOptions = [
        { id: "hero-sub1", icon: UnfoldVertical,label: "Hero Section: Sub Section 1" },
        { id: "hero-sub2", icon: UnfoldVertical,label: "Hero Section: Sub Section 2" },
        { id: "hero-sub3", icon: UnfoldVertical,label: "Hero Section: Sub Section 3" },
    ];

    const section1SubOptions = [
        { id: "1-sub1", icon: UnfoldVertical,label: "Section 1: Sub Section 1" },
        { id: "1-sub2", icon: UnfoldVertical,label: "Section 1: Sub Section 2" },
        { id: "1-sub3", label: "Section 1: Sub Section 3" },
    ];

    const section2SubOptions = [
        { id: "2-sub1", icon: UnfoldVertical,label: "Section 2: Sub Section 1" },
        { id: "2-sub2", icon: UnfoldVertical,label: "Section 2: Sub Section 2" },
        { id: "2-sub3", icon: UnfoldVertical,label: "Section 2: Sub Section 3" },
    ];

    const section3SubOptions = [
        { id: "3-sub1", icon: UnfoldVertical,label: "Section 3: Sub Section 1" },
        { id: "3-sub2", icon: UnfoldVertical,label: "Section 3: Sub Section 2" },
        { id: "3-sub3", icon: UnfoldVertical,label: "Section 3: Sub Section 3" },
    ];

    const section4SubOptions = [
        { id: "4-sub1", icon: UnfoldVertical,label: "Section 4: Sub Section 1" },
        { id: "4-sub2", icon: UnfoldVertical,label: "Section 4: Sub Section 2" },
        { id: "4-sub3", icon: UnfoldVertical,label: "Section 4: Sub Section 3" },
    ];

    const section5SubOptions = [
        { id: "5-sub1", icon: UnfoldVertical,label: "Section 5: Sub Section 1" },
        { id: "5-sub2", icon: UnfoldVertical,label: "Section 5: Sub Section 2" },
        { id: "5-sub3", icon: UnfoldVertical,label: "Section 5: Sub Section 3" },
    ];

    const subOptionsMap = {
        header: headerSubOptions,
        hero: heroSubOptions,
        "1": section1SubOptions,
        "2": section2SubOptions,
        "3": section3SubOptions,
        "4": section4SubOptions,
        "5": section5SubOptions,
    };

    const [subOptions, setSubOptions] = useState([]);

    const handleItemClick = (sectionId) => {
        setOpenSubHeader(sectionId);
        setSubHeaderOpen(true);
        setSubOptions(subOptionsMap[sectionId] || []);
    };

    const handleBackClick = () => {
        setOpenSubHeader(null);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const list = openSubHeader ? [...subOptions] : [...sections];
        const [reorderedItem] = list.splice(result.source.index, 1);
        list.splice(result.destination.index, 0, reorderedItem);

        if (openSubHeader) {
            setSubOptions(list);
        } else {
            setSections(list);
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