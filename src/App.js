import React from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

//implementation
const App = () => {
  const activeMenu = false;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ backgroundColor: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>
          {/*  */}
          <div>
            <Routes>
              {/* dashboard */}
              <Routes path="/" element="ECommerce" />
              <Routes path="/ecommerce" element="ECommerce" />
              {/* pages */}
              <Route path="/orders" element="Order" />
              <Route path="/employees" element="Employees" />
              <Route path="/customers" element="Customer" />

              {/* APPS */}
              <Route path="/kanban" element="Kanban" />
              <Route path="/editor" element="Editor" />
              <Route path="/calendar" element="Calendar" />
              <Route path="/color-picker" element="ColorPicker" />

              {/* charts */}
              <Routes path="/line" element="Line" />
              <Routes path="/area" element="Area" />
              <Routes path="/bar" element="Bar" />
              <Routes path="/pie" element="Pie" />
              <Routes path="/financial" element="Financial" />
              <Routes path="/color-mapping" element="ColorMapping" />
              <Routes path="/pyramid" element="Pyramid" />
              <Routes path="/stacked" element="Stacked" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
